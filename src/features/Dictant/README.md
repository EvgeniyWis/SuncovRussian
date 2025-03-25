## Диктант

Описание:
Используется на странице "Диктанты", как главный блок взаимодействия с пользователем, для вставки нужных букв в слова.

#### Public api

- types

`DictantItem` - предмет единицы Диктанта
`DictantType` - весь объект Диктанта

- const

`DictantSymbolForMissed` - символ для пропущенной буквы
`DictantSymbolForEndSentences` - символ для конца предложения

- hooks

`useCheckCorrectness` - хук для получения функции проверки
