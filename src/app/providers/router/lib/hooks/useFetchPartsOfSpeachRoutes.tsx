import { AppRoutes } from '@/shared/types/router';
import { RouteProps } from 'react-router-dom';
import { useCallback } from 'react';
import {
  PartsOfSpeachPage,
} from '@/pages/PartsOfSpeachPage';
import { getRoutePartsOfSpeach } from '@/shared/const/router';

interface useFetchPartsOfSpeachRoutesResult {
  fetchPartsOfSpeachRoutes: () => Promise<Partial<
    Record<AppRoutes, RouteProps>
  > | null>;
}
// TODO: Вернуть загрузку данных с бекенда
export const useFetchPartsOfSpeachRoutes =
  (): useFetchPartsOfSpeachRoutesResult => {
    const fetchPartsOfSpeachRoutes = useCallback(async () => {
      try {
        const partsOfSpeachData = [
          {
            theme: 'Вводное слово',
            items: [
              {
                text: 'Мама, *видимо,* поняла моё состояние. Она бросила шитье и задумалась. Я заметил, как слёзы выступили у неё на глазах и потекли по щекам.',
              },
              {
                text: 'День, *безусловно,* выдался очень удачным. Солнце светило ярко, и легкий ветерок приятно освежал.',
              },
              {
                text: '*К&счастью,* экзамен прошел успешно. Все студенты, *как&оказалось,* хорошо подготовились.',
              },
              {
                text: 'Погода, *по-видимому,* собиралась испортиться. Тяжелые тучи медленно заволакивали небо.',
              },
              {
                text: '*Честно&говоря,* я не ожидал такого поворота событий. Ситуация, *вероятно,* требовала более тщательного анализа.',
              },
            ],
          },
          {
            theme: 'Вводное слово2',
            items: [
              {
                text: 'Мама, *видимо,* поняла моё состояние. Она бросила шитье и задумалась. Я заметил, как слёзы выступили у неё на глазах и потекли по щекам.',
              },
              {
                text: 'День, *безусловно,* выдался очень удачным. Солнце светило ярко, и легкий ветерок приятно освежал.',
              },
              {
                text: '*К&счастью,* экзамен прошел успешно. Все студенты, *как&оказалось,* хорошо подготовились.',
              },
              {
                text: 'Погода, *по-видимому,* собиралась испортиться. Тяжелые тучи медленно заволакивали небо.',
              },
              {
                text: '*Честно&говоря,* я не ожидал такого поворота событий. Ситуация, *вероятно,* требовала более тщательного анализа.',
              },
            ],
          },
        ];

        const partsOfSpeachRoutes: Partial<Record<AppRoutes, RouteProps>> =
          partsOfSpeachData.reduce(
            (acc, item) => ({
              ...acc,
              [item.theme]: {
                path: getRoutePartsOfSpeach(item.theme),
                element: <PartsOfSpeachPage item={item} />,
              },
            }),
            {},
          );

        return partsOfSpeachRoutes;
      } catch (error) {
        console.error('Ошибка при загрузке частей речи:', error);
        return null;
      }
    }, []);

    return {
      fetchPartsOfSpeachRoutes,
    };
  };
