import { getRouteTests } from '@/shared/const/router';
import { TestsPage } from '@/pages/TestsPage';
import { AppRoutes } from '@/shared/types/router';
import { RouteProps } from 'react-router-dom';
import { useCallback } from 'react';

interface useFetchTestsRoutesResult {
  fetchTestsRoutes: () => Promise<Partial<
    Record<AppRoutes, RouteProps>
  > | null>;
}
// TODO: Вернуть загрузку данных с бекенда
export const useFetchTestsRoutes = (): useFetchTestsRoutesResult => {
  const fetchTestsRoutes = useCallback(async () => {
    try {
      const staticTestsData = [
        {
          id: 1,
          title: 'Склонение',
          questions: [
            {
              id: 1,
              text: 'Укажите существительное 1 склонения',
              has_one_correct_answer: true,
              test: 1,
              answers: [
                {
                  id: 1,
                  text: 'перо',
                  is_correct: false,
                  question: 1
                },
                {
                  id: 2,
                  text: 'утюг',
                  is_correct: false,
                  question: 1
                },
                {
                  id: 3,
                  text: 'река',
                  is_correct: true,
                  question: 1
                },
                {
                  id: 4,
                  text: 'дом',
                  is_correct: false,
                  question: 1
                }
              ]
            },
            {
              id: 2,
              text: 'Укажите существительное 2 склонения',
              has_one_correct_answer: true,
              test: 1,
              answers: [
                {
                  id: 5,
                  text: 'перо',
                  is_correct: false,
                  question: 2
                },
                {
                  id: 6,
                  text: 'утюг',
                  is_correct: false,
                  question: 2
                },
                {
                  id: 7,
                  text: 'река',
                  is_correct: true,
                  question: 2
                },
                {
                  id: 8,
                  text: 'дом',
                  is_correct: false,
                  question: 2
                }
              ]
            },
            {
              id: 3,
              text: 'Укажите существительное 3 склонения',
              has_one_correct_answer: false,
              test: 1,
              answers: [
                {
                  id: 9,
                  text: 'перо',
                  is_correct: true,
                  question: 3
                },
                {
                  id: 10,
                  text: 'утюг',
                  is_correct: false,
                  question: 3
                },
                {
                  id: 11,
                  text: 'река',
                  is_correct: true,
                  question: 3
                },
                {
                  id: 12,
                  text: 'дом',
                  is_correct: false,
                  question: 3
                }
              ]
            }
          ]
        },
        {
          id: 2,
          title: 'Склонение2',
          questions: [
            {
              id: 4,
              text: 'Укажите существительное 4 склонения',
              has_one_correct_answer: true,
              test: 2,
              answers: [
                {
                  id: 13,
                  text: 'перо',
                  is_correct: false,
                  question: 4
                },
                {
                  id: 14,
                  text: 'утюг',
                  is_correct: false,
                  question: 4
                },
                {
                  id: 15,
                  text: 'река',
                  is_correct: true,
                  question: 4
                },
                {
                  id: 16,
                  text: 'дом',
                  is_correct: false,
                  question: 4
                }
              ]
            },
            {
              id: 5,
              text: 'Укажите существительное 5 склонения',
              has_one_correct_answer: false,
              test: 2,
              answers: [
                {
                  id: 17,
                  text: 'перо',
                  is_correct: true,
                  question: 5
                },
                {
                  id: 18,
                  text: 'утюг',
                  is_correct: false,
                  question: 5
                },
                {
                  id: 19,
                  text: 'река',
                  is_correct: true,
                  question: 5
                },
                {
                  id: 20,
                  text: 'дом',
                  is_correct: false,
                  question: 5
                }
              ]
            },
            {
              id: 6,
              text: 'Укажите существительное 6 склонения',
              has_one_correct_answer: false,
              test: 2,
              answers: [
                {
                  id: 21,
                  text: 'перо',
                  is_correct: true,
                  question: 6
                },
                {
                  id: 22,
                  text: 'утюг',
                  is_correct: false,
                  question: 6
                },
                {
                  id: 23,
                  text: 'река',
                  is_correct: true,
                  question: 6
                },
                {
                  id: 24,
                  text: 'дом',
                  is_correct: false,
                  question: 6
                }
              ]
            }
          ]
        }
      ];

      const testsRoutes: Partial<Record<AppRoutes, RouteProps>> =
        staticTestsData.reduce(
          (acc, test) => ({
            ...acc,
            [test.title]: {
              path: getRouteTests(test.title),
              element: (
                <TestsPage
                  key={test.id}
                  theme={test.title}
                  questions={test.questions.map(q => ({
                    id: q.id,
                    answers: q.answers,
                    text: q.text,
                    test: q.test,
                    has_one_correct_answer: q.has_one_correct_answer,
                  }))}
                />
              ),
            },
          }),
          {},
        );

      return testsRoutes;
    } catch (error) {
      console.error('Ошибка при загрузке тестов:', error);
      return null;
    }
  }, []);

  return {
    fetchTestsRoutes,
  };
};