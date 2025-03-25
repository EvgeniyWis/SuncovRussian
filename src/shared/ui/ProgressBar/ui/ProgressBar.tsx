import * as styles from './ProgressBar.module.scss';
import { memo } from 'react';
import { Flex } from '@/shared/lib/Stack';

interface ProgressBarProps {
  percent: number;
  className?: string;
  progressDataTestID?: string;
  fullScreenWidth?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = memo(
  ({
    className,
    percent,
    progressDataTestID,
    fullScreenWidth,
  }): React.JSX.Element => {
    const roundPercent = Math.round(percent * 100);
    return (
      <Flex
        className={className}
        width={fullScreenWidth ? '165' : '50'}
        justify="center"
        gap="10"
      >
        <span className={styles.ProgressBar__percent}>{roundPercent}%</span>
        <progress
          className={`${styles.ProgressBar__progressbar}
          ${roundPercent >= 100 ? styles.ProgressBar__progressbar__full : ''}`}
          data-testid={progressDataTestID}
          value={percent}
        ></progress>
      </Flex>
    );
  },
);

ProgressBar.displayName = 'ProgressBar';
