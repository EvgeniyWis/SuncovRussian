import { memo, useContext, useEffect, useMemo, useRef } from 'react';
import { useTrainerWords } from '../../model/selectors/getTrainerWords/getTrainerWords';
import { TrainerPageContext } from '../../model/context/TrainerPageContext';
import { ProgressBar } from '@/shared/ui/ProgressBar';

export const TrainerProgressBar: React.FC = memo((): React.JSX.Element => {
  // Получение слов
  const storeWords = useTrainerWords();

  // Получение слов, находящихся в прогрессе
  const wordsInProgressProbability = useMemo(
    () => storeWords.filter((word) => word.inProgress),
    [storeWords],
  );

  // Получение процентов слов, находящихся в прогрессе
  const wordsInProgressProbabilityPercent = useMemo(() => {
    const result = wordsInProgressProbability.length / storeWords.length;

    if (isNaN(result)) return 0;

    return result;
  }, [storeWords.length, wordsInProgressProbability.length]);

  // Сохранение времени начала прохождения
  const StartTimeRef = useRef<Date>(new Date());

  useEffect(() => {
    StartTimeRef.current = new Date();
  }, []);

  // Окно с завершением тренажёра
  const { setTotalTime } = useContext(TrainerPageContext);

  useEffect(() => {
    if (wordsInProgressProbabilityPercent === 1) {
      const endTime = new Date();

      const TotalTime = endTime.getTime() - StartTimeRef.current!.getTime();

      setTotalTime(TotalTime);
    }
  }, [setTotalTime, wordsInProgressProbabilityPercent]);

  return (
    <ProgressBar
      percent={wordsInProgressProbabilityPercent}
      progressDataTestID="Trainer__TrainerProgressBar__percent"
    />
  );
});

TrainerProgressBar.displayName = 'TrainerProgressBar';
