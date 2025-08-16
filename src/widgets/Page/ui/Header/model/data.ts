/* eslint-disable ulbi-tv-plugin/layer-imports */
import { HeaderMenu, HeaderRoutes } from './types';
import { wordsForTrainers } from '@/pages/TrainerPage';
// TODO: Вернуть загрузку данных с бекенда
export const headerCategories: HeaderMenu = {
  'Части речи': ['Вводное слово', 'Вводное слово2'],
  Тесты: ['Склонение', 'Склонение2'],
  Диктанты: [
    {
      theme: 'Чередующиеся гласные',
      items: [
        { subtheme: 'гар–гор' },
        { subtheme: 'зар–зор' },
        { subtheme: 'твар–твор' },
        { subtheme: 'клан–клон' },
        { subtheme: 'плав–плов' },
        { subtheme: 'раст–рос–ращ' },
        { subtheme: 'лаг–лож' },
        { subtheme: 'кас–кос' },
        { subtheme: 'скак–скоч' },
        { subtheme: 'равн–ровн' },
        { subtheme: 'мак–мок' },
        { subtheme: 'чет–чит' },
        { subtheme: 'бер–бир' },
        { subtheme: 'дер–дир' },
        { subtheme: 'мер–мир' },
        { subtheme: 'пер–пир' },
        { subtheme: 'тер–тир' },
        { subtheme: 'жег–жиг' },
        { subtheme: 'блест–блист' },
        { subtheme: 'стел–стил' },
        { subtheme: 'им–ин–ем–ен' },
        { subtheme: 'пре-при' },
        { subtheme: 'раз-рас' },
        { subtheme: 'без-бес' }
      ]
    },
  ],
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
