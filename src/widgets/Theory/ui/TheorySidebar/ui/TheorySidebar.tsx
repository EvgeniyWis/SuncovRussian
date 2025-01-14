import { Flex } from '@/shared/lib/Stack';
import * as styles from './TheorySidebar.module.scss';
<<<<<<< HEAD
import { memo, useContext, useEffect, useState } from 'react';
import { TheorySidebarProps } from '../model/types';
import { TheoryContext } from '../../../model/context/TheoryContext';
import { mobileMediaQueryWidth } from '@/shared/const/global';
=======
import { memo, useContext, useEffect } from 'react';
import { TheorySidebarProps } from '../model/types';
import { TheoryContext } from '../../../model/context/TheoryContext';
>>>>>>> 3736a6b (Add SideBar for Theory Block, add Theory Context and add functional of switching sections of theories.)

export const TheorySidebar: React.FC<TheorySidebarProps> = memo(
  ({ pdfFilesTitles }): React.JSX.Element => {
    // Выбор раздела
    const { selectedSection, setSelectedSection } = useContext(TheoryContext);

    // Инициализация первого раздела как значения по умолчанию
    useEffect(() => {
      setSelectedSection(pdfFilesTitles[0]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setSelectedSection]);

<<<<<<< HEAD
    // Если скролл пользователя не максимально вверху, то убираем margin-top
    const [marginTop, setMarginTop] = useState<string | number>(
      'var(--header-height)',
    );

    useEffect(() => {
      const checkScroll = () => {
        if (document.body.scrollTop === 0) {
          setMarginTop('var(--header-height)');
        } else {
          setMarginTop(0);
        }
      };

      document.body.addEventListener('scroll', checkScroll);
      return () => document.body.removeEventListener('scroll', checkScroll);
    }, []);

    return (
      <Flex
        data-testid="Theory__Sidebar"
        direction={mobileMediaQueryWidth.matches ? 'row' : 'column'}
        maxHeight
        align="start"
        width={mobileMediaQueryWidth.matches ? '100' : '15'}
        gap="15"
        className={styles.TheorySidebar}
        style={{ marginTop: marginTop }}
      >
        {pdfFilesTitles.map((title, index) => (
          <span
            data-testid={`Theory__Sidebar__${index}`}
=======
    return (
      <Flex
        direction="column"
        maxHeight
        align="start"
        width="20"
        gap="15"
        className={styles.TheorySidebar}
      >
        {pdfFilesTitles.map((title) => (
          <span
>>>>>>> 3736a6b (Add SideBar for Theory Block, add Theory Context and add functional of switching sections of theories.)
            onClick={() => setSelectedSection(title)}
            className={`${styles.TheorySidebar__title} ${selectedSection === title && styles.TheorySidebar__title__selected}`}
            key={title}
          >
            {title}
          </span>
        ))}
      </Flex>
    );
  },
);

TheorySidebar.displayName = 'TheorySidebar';