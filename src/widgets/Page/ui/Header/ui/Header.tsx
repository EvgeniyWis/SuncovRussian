import { Flex } from '@/shared/lib/Stack';
import * as styles from './Header.module.scss';
import { Fragment, memo, useState } from 'react';
import { headerCategories, headerRoutesCategories } from '../model/data';
import { HeaderCategoryType, HeaderMenu } from '../model/types';
import { Link, matchPath } from 'react-router-dom';
import { transliterate } from '@/shared/utils/transliterate';
import { isInJest } from '@/shared/tests/isInJest';

interface HeaderProps {
  withHomeButton?: boolean;
}

export const Header: React.FC<HeaderProps> = memo(
  ({ withHomeButton = true }): React.JSX.Element => {
    // Обработка наведения на категории
    const [headerHoveredCategory, setHoveredHeaderCategory] = useState<
      string | null
    >(null);

    // Реализация показа подменю при наведении на категорию
    const [visibleSubmenu, setVisibleSubmenu] = useState<string | null>(null);

    // Получение дата-атрибутов из html
    const publicUrl = isInJest()
      ? ''
      : JSON.parse(document.body.getAttribute('data-publicUrl')!);

    const isDev = JSON.parse(document.body.getAttribute('data-isdev')!);
    const startPath = isDev ? '' : `/${publicUrl}`;

    // Делаем категории хедера стейтом
    const categories = useState<HeaderMenu>(headerCategories)[0];

    return (
      <header className={styles.Header}>
          <Flex maxHeight>
            {Object.entries(categories).map(([category, submenu]) => {
              // Инициализация ссылки предмета навигации
              const itemLink = `/${headerRoutesCategories[category as HeaderCategoryType]}`;

              // Инициализация начала data-testid
              const dataTestID = `Header__${category.replace(' ', '_')}`;

              return (
                <Flex
                  onMouseLeave={() => setHoveredHeaderCategory(null)}
                  key={category}
                  direction="column"
                  relative
                  maxHeight
                >
                  <Flex
                    maxHeight
                    justify="center"
                    onMouseEnter={() => setHoveredHeaderCategory(category)}
                    className={`${styles.Header__item} 
                ${matchPath(itemLink, window.location.pathname) && styles.Header__item__active}`}
                    data-testid={dataTestID}
                  >
                    {submenu.length > 0 ? (
                      <>{category}</>
                    ) : (
                      <Link to={itemLink}>{category}</Link>
                    )}
                  </Flex>

                  {submenu.length > 0 && (
                    <Flex
                      align="start"
                      className={`${styles.Header__submenu} 
            ${headerHoveredCategory === category && styles.Header__submenu__active}`}
                      direction="column"
                      data-testid={`${dataTestID}__submenu`}
                    >
                      {submenu.map((menuItem) => {
                        const isUsual = typeof menuItem === 'string';

                        return (
                          <Fragment key={isUsual ? menuItem : menuItem.theme}>
                            {isUsual
                              ? (() => {
                                  // Инициализация предмета подменю
                                  const submenuItemLink: string = `/${headerRoutesCategories[category as HeaderCategoryType]}/${transliterate(menuItem)}`;

                                  return (
                                    <Link
                                      to={submenuItemLink}
                                      className={`${styles.Header__submenu__item} 
                                    ${
                                      matchPath(
                                        `${startPath}${submenuItemLink}`,
                                        window.location.pathname,
                                      ) && styles.Header__submenu__item__active
                                    }`}
                                      onClick={() => setHoveredHeaderCategory(null)}
                                    >
                                      {menuItem}
                                    </Link>
                                  );
                                })()
                              : (() => {
                                  // Ссылки на подменю
                                  const submenuItemLink = (
                                    subTheme: string,
                                  ): string => {
                                    if (category === 'Тренажеры') {
                                      const trainerSubTheme = `задание 9 — ${subTheme}`;
                                      return `/${headerRoutesCategories[category as HeaderCategoryType]}/${transliterate(trainerSubTheme)}`;
                                    }

                                    return `/${headerRoutesCategories[category as HeaderCategoryType]}/${transliterate(menuItem.theme)}/${transliterate(subTheme)}`;
                                  };

                                  // Разбитие подменю на слайсы по 10 штук
                                  const submenuItems = menuItem.items.reduce<
                                    Array<typeof menuItem.items>
                                  >((acc, item, index) => {
                                    const chunkIndex = Math.floor(index / 10);

                                    if (!acc[chunkIndex]) {
                                      acc[chunkIndex] = [];
                                    }

                                    acc[chunkIndex].push(item);
                                    return acc;
                                  }, []);

                                  const isTrainerCategory = category === 'Тренажеры';
                                  const parentLink = isTrainerCategory
                                    ? `/${headerRoutesCategories[category as HeaderCategoryType]}/${transliterate(menuItem.theme)}`
                                    : undefined;

                                  return (
                                    <Flex
                                      onMouseLeave={() => setVisibleSubmenu(null)}
                                      align="start"
                                    >
                                      {isTrainerCategory ? (
                                        <Link
                                          to={parentLink!}
                                          className={`${styles.Header__submenu__item} 
                                    ${
                                      window.location.pathname.startsWith(
                                        `${startPath}/${headerRoutesCategories[category as HeaderCategoryType]}/${transliterate(menuItem.theme)}`,
                                      ) && styles.Header__submenu__item__active
                                    }`}
                                          onMouseEnter={() => setVisibleSubmenu(menuItem.theme)}
                                        >
                                          {menuItem.theme}
                                        </Link>
                                      ) : (
                                        <span
                                          className={`${styles.Header__submenu__item} 
                                    ${
                                      window.location.pathname.startsWith(
                                        `${startPath}/${headerRoutesCategories[category as HeaderCategoryType]}/${transliterate(menuItem.theme)}/`,
                                      ) && styles.Header__submenu__item__active
                                    }`}
                                          onMouseEnter={() => setVisibleSubmenu(menuItem.theme)}
                                        >
                                          {menuItem.theme}
                                        </span>
                                      )}

                                      <Flex
                                        align="start"
                                        data-testid={`${dataTestID}__submenu__submenu`}
                                        className={`${styles.Header__submenu__submenu} 
                                        ${visibleSubmenu === menuItem.theme && styles.Header__submenu__submenu__visible}`}
                                      >
                                        {submenuItems.map((items) => (
                                          <Flex
                                            key={items[0].subtheme}
                                            direction="column"
                                            align="start"
                                            className={
                                              styles.Header__submenu__submenu__column
                                            }
                                          >
                                            {items.map((item) => (
                                              <Link
                                                className={`${styles.Header__submenu__item} 
                                              ${
                                                matchPath(
                                                  `${startPath}${submenuItemLink(
                                                    item.subtheme,
                                                  )}`,
                                                  window.location.pathname,
                                                ) &&
                                                styles.Header__submenu__item__active
                                              }`}
                                                to={submenuItemLink(item.subtheme)}
                                                key={item.subtheme}
                                              >
                                                {item.subtheme}
                                              </Link>
                                            ))}
                                          </Flex>
                                        ))}
                                      </Flex>
                                    </Flex>
                                  );
                                })()}
                          </Fragment>
                        );
                      })}
                    </Flex>
                  )}
                </Flex>
              );
            })}
          </Flex>
{/* 
          {categoriesLoading && (
            <Flex maxHeight justify="center">
              <span className={styles.Header__item}>Идёт загрузка...</span>
            </Flex>
          )} */}

          {withHomeButton && (
            <Flex maxHeight justify="center" className={styles.Header__item}>
              <Link to="/">Домой</Link>
            </Flex>
          )}

      </header>
    );
  },
);

Header.displayName = 'Header';
