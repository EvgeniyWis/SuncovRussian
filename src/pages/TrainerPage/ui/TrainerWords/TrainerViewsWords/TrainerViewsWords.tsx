import { memo, useContext } from 'react';
import { Flex } from '@/shared/lib/Stack';
import { tabletMediaQueryWidth } from '@/shared/const/global';
import { TrainerWord } from '@/shared/ui/TrainerWord';
import { TrainerPageContext } from '../../../model/context/TrainerPageContext';
import * as styles from './TrainerViewsWords.module.scss';
import { useTrainerWords } from '../../../model/selectors/getTrainerWords/getTrainerWords';
import {
  wordActionsFunctionType,
  wordActionsFunctionExtendType,
} from '../../../lib/hooks/useWordActions';
import { ViewsWordsInterface } from '../../../model/types/views';

interface TrainerViewsWordsProps {
  randomWord: ViewsWordsInterface;
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordActionsFunctionExtendType;
  viewsTypes: string[];
}

export const TrainerViewsWords: React.FC<TrainerViewsWordsProps> = memo(
  ({
    randomWord,
    wordOnSuccess,
    wordOnFail,
    viewsTypes,
  }): React.JSX.Element => {
    // Инициализация данных и контекста
    const storeWords = useTrainerWords();
    const { isIncorrect, isErrorWork } = useContext(TrainerPageContext);

    return (
      <Flex width="100" direction="column" gap="10" justify="center">
        <span
          className={styles.TrainerViewsWords__word}
          data-testid="TrainerViewsWords__word"
        >
          {randomWord.word}
        </span>

        <Flex
          justify="center"
          direction={tabletMediaQueryWidth.matches ? 'column' : 'row'}
          width="100"
        >
          {viewsTypes.map((viewsType, index) => (
            <TrainerWord
              dataTestId={`TrainerViewsWords__${viewsType}`}
              onClick={
                viewsType === randomWord.viewType
                  ? () => wordOnSuccess(storeWords, isErrorWork, randomWord.id)
                  : () =>
                      wordOnFail(
                        storeWords,
                        isErrorWork,
                        randomWord.id,
                        'views',
                      )
              }
              type={
                isIncorrect && viewsType !== randomWord.viewType
                  ? 'invalid'
                  : 'default'
              }
              key={viewsType}
              style={
                index === 0
                  ? {
                      borderRightWidth: tabletMediaQueryWidth.matches ? 3 : 0,

                      borderBottomWidth: tabletMediaQueryWidth.matches ? 0 : 3,
                    }
                  : {}
              }
            >
              {viewsType}
            </TrainerWord>
          ))}
        </Flex>
      </Flex>
    );
  },
);

TrainerViewsWords.displayName = 'TrainerViewsWords';
