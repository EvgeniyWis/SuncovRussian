import { useCallback, useContext, useRef, useState } from 'react';
import { useRandomWord } from '../useRandomWord';
import { useTrainerActions } from '../../../model/slice/TrainerPageSlice';
import { playSound } from '@/shared/utils/playSound';
import { useInitializeWords } from '../useInitializeWords';
import { useTrainerWords } from '../../../model/selectors/getTrainerWords/getTrainerWords';
import { TrainerPageContext } from '../../../model/context/TrainerPageContext';
import { mobileMediaQueryWidth } from '@/shared/const/global';
import { isInJest } from '@/shared/tests/isInJest';
import {
  UseWordActionsResult,
  wordActionsFunctionType,
  wordActionsFunctionExtendType,
} from './types/types';
import { keyDownEventListener } from './helpers/keyDownEventListener';
import {
  addRefEventListener,
  deleteRefEventListener,
} from '@/shared/utils/eventListeners';

export const useWordActions = (
  randomWordId: number | null,
  setRandomWordsIsReverse: React.Dispatch<React.SetStateAction<boolean>>,
  setRandomWordId: React.Dispatch<React.SetStateAction<number | null>>,
  setIsIncorrect: React.Dispatch<React.SetStateAction<boolean>>,
): UseWordActionsResult => {
  // Инициализация данных
  const {
    changeWordProbability,
    changeWordUncorrectTimes,
    changeWordConsecutivelyTimes,
    changeWordInProgressStatus,
  } = useTrainerActions();

  const storeWords = useTrainerWords();

  const { initializeWords } = useInitializeWords(storeWords);

  const { isOneLifeMode, isCheckMode, setAllAttemptsCount } =
    useContext(TrainerPageContext);

  // Изменение вероятности при неправильном ответе
  const [waitRepeatedClickInFail, setWaitRepeatedClickInFail] =
    useState<boolean>(false);

  const { updateRandomWord } = useRandomWord(
    randomWordId,
    setRandomWordsIsReverse,
    setRandomWordId,
  );

  // Добавляем ref для хранения обработчиков событий
  const keydownEventListenerRef = useRef<((e: KeyboardEvent) => void) | null>(
    null,
  );
  const clickEventListenerRef = useRef<(() => void) | null>(null);

  // Показ нового слова
  const showNewWord: wordActionsFunctionType = useCallback(
    (words, isErrorWork, randomWordId) => {
      // Удаляем обработчики событий
      deleteRefEventListener(clickEventListenerRef, 'click');
      deleteRefEventListener(keydownEventListenerRef, 'keydown');

      // Изменяем стили обратно
      const main: HTMLElement = document.querySelector('main')!;

      if (!isInJest()) {
        main.style.pointerEvents = 'all';
      }

      // Функционал показа нового слова
      if (isOneLifeMode) {
        initializeWords();
        setAllAttemptsCount((prev) => prev + 1);
      }

      setWaitRepeatedClickInFail(false);
      setIsIncorrect(false);

      const currentRandomWord = words.find((word) => word.id === randomWordId);

      if (!currentRandomWord) return;

      if (!isErrorWork) {
        changeWordProbability({
          probability: 0.2,
          id: currentRandomWord.id,
        });

        changeWordUncorrectTimes({
          id: currentRandomWord.id,
          uncorrectTimes: currentRandomWord.uncorrectTimes! + 1,
        });
      }

      changeWordConsecutivelyTimes({
        id: currentRandomWord.id,
        consecutivelyTimes: 0,
      });

      changeWordInProgressStatus({
        id: currentRandomWord.id,
        inProgress: false,
      });

      if (isCheckMode) {
        changeWordProbability({
          id: currentRandomWord.id,
          probability: 0,
        });

        changeWordInProgressStatus({
          id: currentRandomWord.id,
          inProgress: true,
        });
      }

      updateRandomWord();
    },
    [
      changeWordConsecutivelyTimes,
      changeWordInProgressStatus,
      changeWordProbability,
      changeWordUncorrectTimes,
      initializeWords,
      isCheckMode,
      isOneLifeMode,
      setAllAttemptsCount,
      setIsIncorrect,
      updateRandomWord,
    ],
  );

  // Изменение вероятности при правильном ответе
  const wordOnFail: wordActionsFunctionExtendType = useCallback(
    (words, isErrorWork, randomWordId, type, elemForClick = document) => {
      if (waitRepeatedClickInFail) return;

      playSound('FailSound');

      setIsIncorrect(true);

      setWaitRepeatedClickInFail(true);

      const main: HTMLElement = document.querySelector('main')!;

      if (!isInJest()) {
        main.style.pointerEvents = 'none';
      }

      // Добавляем обработчики
      let isFirstClick = true; // Флаг для того, чтобы не вызывать showNewWord при первом клике
      addRefEventListener(
        clickEventListenerRef,
        'click',
        () => {
          if (isFirstClick) {
            isFirstClick = false;
            return;
          }

          showNewWord(words, isErrorWork, randomWordId);

          deleteRefEventListener(clickEventListenerRef, 'click');
        },
        elemForClick,
        type === 'choice',
      );

      addRefEventListener(
        keydownEventListenerRef,
        'keydown',
        (e: KeyboardEvent) => {
          keyDownEventListener(
            e,
            showNewWord,
            words,
            isErrorWork,
            randomWordId,
          );

          deleteRefEventListener(keydownEventListenerRef, 'keydown');
        },
        document,
        type === 'choice',
      );
    },
    [setIsIncorrect, showNewWord, waitRepeatedClickInFail],
  );

  // Изменение вероятности при правильном ответе
  const wordOnSuccess: wordActionsFunctionType = useCallback(
    (words, isErrorWork, randomWordId) => {
      if (waitRepeatedClickInFail) return;

      const currentRandomWord = words.find((word) => word.id === randomWordId);

      if (!currentRandomWord) return;

      if (isErrorWork) {
        const futureConsecutivelyTimes =
          currentRandomWord.consecutivelyTimes! + 1;

        changeWordConsecutivelyTimes({
          id: currentRandomWord.id,
          consecutivelyTimes: futureConsecutivelyTimes,
        });

        if (futureConsecutivelyTimes === 3) {
          changeWordInProgressStatus({
            id: currentRandomWord.id,
            inProgress: true,
          });

          changeWordProbability({
            probability: 0.05,
            id: currentRandomWord.id,
          });
        }
      } else {
        if (currentRandomWord.probability === 0.2) {
          changeWordProbability({
            id: currentRandomWord.id,
            probability: 0.1,
          });
        } else if (currentRandomWord.probability === 0.1) {
          changeWordProbability({
            id: currentRandomWord.id,
            probability: 0.05,
          });
        } else {
          changeWordProbability({
            id: currentRandomWord.id,
            probability: isOneLifeMode ? 0 : 0.01,
          });

          changeWordInProgressStatus({
            id: currentRandomWord.id,
            inProgress: true,
          });
        }
      }

      if (isCheckMode) {
        changeWordProbability({
          id: currentRandomWord.id,
          probability: 0,
        });

        changeWordInProgressStatus({
          id: currentRandomWord.id,
          inProgress: true,
        });
      }

      // Костыль, чтобы на мобильных устройствах не было видно, какой элемент был нажат
      if (mobileMediaQueryWidth.matches) {
        const timeoutForUpdate = setTimeout(() => {
          updateRandomWord();
          clearTimeout(timeoutForUpdate);
        }, 150);
      } else {
        updateRandomWord();
      }
    },
    [
      changeWordConsecutivelyTimes,
      changeWordInProgressStatus,
      changeWordProbability,
      isCheckMode,
      isOneLifeMode,
      updateRandomWord,
      waitRepeatedClickInFail,
    ],
  );

  return {
    showNewWord,
    wordOnSuccess,
    wordOnFail,
  };
};
