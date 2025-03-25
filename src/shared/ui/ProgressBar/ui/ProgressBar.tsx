import * as styles from './ProgressBar.module.scss';
import { memo } from 'react';
import { Flex } from '@/shared/lib/Stack';
import { FlexWitdth } from '@/shared/lib/Stack/Flex/Flex';

interface ProgressBarProps {
  percent: number;
  className?: string;
  progressDataTestID?: string;
  progressBarWidth?: FlexWitdth;
  canOverflow?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = memo(
  ({
    className,
    percent,
    progressDataTestID,
    progressBarWidth,
    canOverflow,
  }): React.JSX.Element => {
    const roundPercent = Math.round(percent * 100);
    return (
      <Flex
        className={className}
        width={progressBarWidth}
        justify="center"
        gap="10"
      >
        <span className={styles.ProgressBar__percent}>{roundPercent}%</span>
        <progress
          className={`${styles.ProgressBar__progressbar}
          ${canOverflow && roundPercent > 100 ? styles.ProgressBar__progressbar__canOverflow : ''}
          ${roundPercent >= 100 ? styles.ProgressBar__progressbar__100 : ''}`}
          data-testid={progressDataTestID}
          value={percent}
        ></progress>

        {canOverflow && (
          <progress
            className={`${styles.ProgressBar__progressbar} ${styles.ProgressBar__progressbar__overflow}`}
            value={percent - 1}
          ></progress>
        )}
      </Flex>
    );
  },
);

ProgressBar.displayName = 'ProgressBar';
