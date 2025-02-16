/* eslint-disable ulbi-tv-plugin/layer-imports */
import { mockDictants } from '@/pages/DictantsPage';
import { HeaderMenu, HeaderRoutes } from './types';
import { wordsForTrainers } from '@/pages/TrainerPage';
import { mockPartsOfSpeach } from '@/pages/PartsOfSpeachPage';

export const headerCategories: HeaderMenu = {
  'Части речи': [...Object.keys(mockPartsOfSpeach)],
  Тесты: [],
  Диктанты: [...mockDictants.map((dictant) => dictant)],
  Теория: [],
  Тренажеры: [
    ...Object.keys(wordsForTrainers).filter(
      (key) => wordsForTrainers[key].inHeader,
    ),
  ],
};

export const headerRoutesCategories: HeaderRoutes = {
  'Части речи': 'parts-of-speech',
  Тесты: 'tests',
  Диктанты: 'dictants',
  Теория: 'theory',
  Тренажеры: 'trainers',
};
