import { WordsForTrainersTypes } from '../../../../model/types/types';
import {
  wordActionsFunctionType,
  wordActionsFunctionExtendType,
} from '../../../../lib/hooks/useWordActions';
import { ChoiceWordInterface } from '../../../../model/types/choice';
import { onFailHandler } from './onFailHandler';

export const ChoiceWordOnClick = (
  e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
  randomWord: ChoiceWordInterface,
  choiceWord: string,
  wordOnSuccess: wordActionsFunctionType,
  wordOnFail: wordActionsFunctionExtendType,
  isErrorWork: boolean,
  storeWords: WordsForTrainersTypes[],
  showNewWord: wordActionsFunctionType,
  isIncorrect: boolean,
) => {
  if (!isIncorrect) {
    // В зависимости от правильности ответа, совершаем определённое действие
    if (randomWord.choiceWord === choiceWord) {
      wordOnSuccess(storeWords, isErrorWork, randomWord.id);
    } else {
      onFailHandler(e, randomWord, wordOnFail, storeWords, isErrorWork);
    }
  } else {
    showNewWord(storeWords, isErrorWork, randomWord.id);
  }
};
