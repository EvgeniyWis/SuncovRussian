import { Flex } from '@/shared/lib/Stack';
import {
  wordActionsFunctionExtendType,
  wordActionsFunctionType,
} from '../../../lib/hooks/useWordActions';
import { AccentsWordsInterface } from '../../../model/types/accents';
import * as styles from './TrainerAccentsWords.module.scss';
import { memo } from 'react';

// TODO: написать тесты

interface TrainerAccentsWordsProps {
  randomWord: AccentsWordsInterface;
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordActionsFunctionExtendType;
}

export const TrainerAccentsWords: React.FC<TrainerAccentsWordsProps> = memo(
  ({ randomWord }): React.JSX.Element => {
    return (
      <Flex maxHeight width="100" direction="column" gap="20" justify="center">
        <span className={styles.TrainerAccentsWords__letter}>
          {randomWord.word.split('').map((letter) => (
            <>{letter}</>
          ))}
        </span>
      </Flex>
    );
  },
);

TrainerAccentsWords.displayName = 'TrainerAccentsWords';
