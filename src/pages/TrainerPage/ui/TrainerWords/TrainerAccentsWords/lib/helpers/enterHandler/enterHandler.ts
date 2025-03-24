// Функция для обработки нажатия на Enter
export const enterHandler = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    // Получаем текущую выбранную гласную
    const currentVowel: HTMLElement = document.querySelector(
      '[data-is-focused="true"]',
    )!;

    currentVowel.click();
  }
};
