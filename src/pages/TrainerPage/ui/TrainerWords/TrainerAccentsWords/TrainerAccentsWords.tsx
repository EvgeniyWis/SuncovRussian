import * as styles from './TrainerAccentsWords.module.scss';
import { memo } from 'react';

// TODO: написать тесты

export const TrainerAccentsWords: React.FC = memo((): React.JSX.Element => {
  return <div className={styles.TrainerAccentsWords}></div>;
});

TrainerAccentsWords.displayName = 'TrainerAccentsWords';
