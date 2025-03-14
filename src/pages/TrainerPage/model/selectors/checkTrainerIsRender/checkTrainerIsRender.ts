import { buildSelector } from '@/shared/lib/store';

export const checkTrainerRender = buildSelector<boolean>((state) => {
  if (!state.Trainer) return false;

  return true;
}, true)[0];
