# Сайт для изучения русского языка

# Запуск сайта

Инструкция по запуску сайта на ваш локальный компьютер:

1.  Склонируйте данный репозиторий.
2.  Напиши в терминале `npm install` для установки всех зависимостей.
3.  Напишите в терминале команду `npm run dev`.

## Или вы можете просто зайти на [сайт](https://evgeniywis.github.io/SuncovRussian/), загруженный на Github Pages.

## Скрипты

- `npm run dev` - Запуск проекта в dev режиме на Webpack
- `npm run build` - Сборка проекта с помощью Webpack
- `npm run deploy` - Деплой проекта на Github Pages
- `npm run lint:scss` - Запуск проверки scss файлов проекта с помощью styleLint
- `npm run lint:scss:fix` - Запуск исправления scss файлов проекта, там где это возможно, с помощью styleLint
- `npm run lint:ts` - Запуск проверки ts файлов проекта с помощью esLint
- `npm run lint:ts:fix` - Запуск исправления ts файлов проекта, там где это возможно, с помощью esLint
- `npm run storybook` - запуск Storybook
- `npm run test:unit` - Запуск unit тестов с jest/react-testing-library
- `npm run prettier` - запуск Prettier для форматирования кода
- `npm run test:e2e` - Запуск e2e тестов с Cypress

---

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design.

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Тесты

В проекте используются 3 вида тестов:

1. Обычные unit тесты на jest - `npm run test:unit`
2. Тесты на компоненты с React testing library - `npm run test:unit`
3. e2e тестирование с Cypress - `npm run test:e2e`

Подробнее о тестах - [документация тестирования](/docs/tests.md)

---

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями. Также используется dependency-cruiser для анализа зависимостей.

##### Запуск линтеров

- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

---

## Storybook

В проекте для каждого компонента описываются стори-кейсы.

Файл со сторикейсами создаётся рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:

- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ButtonTypes } from '../model/Button__types';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonRed: Story = {
  args: {
    to: '/',
    text: 'Красная кнопка',
    type: ButtonTypes.RED,
  },
};

export const ButtonBlue: Story = {
  args: {
    to: '/',
    text: 'Синяя кнопка',
    type: ButtonTypes.BLUE,
  },
};

export const ButtonGray: Story = {
  args: {
    to: '/',
    text: 'Серая кнопка',
    type: ButtonTypes.GRAY,
  },
};

export const ButtonBlack: Story = {
  args: {
    to: '/',
    text: 'Чёрная кнопка',
    type: ButtonTypes.BLACK,
  },
};
```

---

## Конфигурация проекта

Для разработки проект содержит декомпозированный конфиг:
Webpack - ./config/build и webpack.config.ts

Cборщик адаптирован под основные фичи приложения.

Вся конфигурация хранится в корне проекта:

- jest.config.ts - конфигурация тестовой среды Jest
- /.storybook - конфигурация Storybook

В папке `scripts` находятся различные скрипты для рефакторинга/упрощения написания кода/генерации отчетов и тд.

---

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter.

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](src/shared/ui/DynamicModuleLoader/ui/DynamicModuleLoader.tsx)

---

## Сущности (entities)

- [Theory Item](/src/entities/TheoryItem)

## Фичи (features)

- [Dictant](/src/features/Dictant)

- [PartsOfSpeachItem](/src/features/PartsOfSpeachItem)

- [Test](/src/features/Test)

## Прочие особенности:

#### ● Использовано Upload Thing API для загрузки файлов в разделе "Теория".

#### ● Использован React PDF для отображения PDF-файлов.

#### ● Реализована интеграция с backend-частью веб-приложения, используя RTK Query.

#### ● Использован Redux Toolkit.

#### ● Реализована грамотная архитектура проекта, используя Feature Sliced Design.

#### ● Реализован раздел "Части речи" для прохождения тестов на выделение нужных слов.

#### ● Реализован раздел "Тесты" для прохождения тестов на выбор нужных вариантов ответа.

#### ● Реализован раздел "Диктанты" для вставки нужных букв в слова.

#### ● Реализован раздел "Тренажёры" для прохождения тренажёров:

##### - Первичный тип - выбор правильного слова;

##### - Ударения - выбор ударения для гласной буквы в слове;

##### - Словарные слова - вставка пропущенной буквы в слово;

##### - Виды союзов - выбор правильного типа союза;

##### - Вторичный тип - выбор типа для слова;

#### ● Каждый тренажёр имеет полосу прогресса, а также работу над ошибками после прохождения.

#### ● Каждый тренажёр имеет единую систему при правильном и неправильном ответах.

#### ● Использована ленивая загрузка для страниц.
