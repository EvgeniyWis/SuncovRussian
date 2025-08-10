/* eslint-disable ulbi-tv-plugin/layer-imports */
import { HeaderMenu, HeaderRoutes } from './types';
import { wordsForTrainers } from '@/pages/TrainerPage';

export const headerCategories: HeaderMenu = {
  'Части речи': [],
  Тесты: [],
  Диктанты: [],
  Теория: [],
  Тренажеры: [
    ...Object.keys(wordsForTrainers).filter(
      (key) => wordsForTrainers[key].inHeader && key !== 'задание 9',
    ),
    {
      theme: 'задание 9',
      items: [
        { subtheme: 'часть 1' },
        { subtheme: 'часть 2' },
        { subtheme: 'часть 3' },
      ],
    },
  ],
};

export const headerRoutesCategories: HeaderRoutes = {
  'Части речи': 'parts-of-speech',
  Тесты: 'tests',
  Диктанты: 'dictants',
  Теория: 'theory',
  Тренажеры: 'trainers',
};
