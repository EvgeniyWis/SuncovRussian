import * as styles from '../../../TrainerAccentsWords.module.scss';

// Функция для обработки нажатий на стрелки
export const arrowsHandler = (e: KeyboardEvent) => {
  // Если есть плашка "Неправильно", то не обрабатываем нажатия на стрелки
  const main: HTMLElement = document.querySelector('main')!;

  if (main.style.pointerEvents === 'none') {
    return;
  }

  // Получаем все гласные
  const vowels = document.querySelectorAll(
    '[data-name="TrainerAccentsWords__vowel"]',
  );

  // Получаем текущую выбранную гласную
  const currentVowel = document.querySelector('[data-is-focused="true"]')!;

  // По нажатию на правую стрелочку
  if (e.key === 'ArrowRight') {
    // Получаем следующую гласную (если она последняя, то получаем первую)
    const nextVowel = (
      Array.from(vowels).indexOf(currentVowel) === vowels.length - 1
        ? vowels.item(0)
        : vowels.item(Array.from(vowels).indexOf(currentVowel) + 1)
    ) as HTMLElement;

    // Убираем фокус с текущей буквы
    currentVowel.setAttribute('data-is-focused', 'false');
    currentVowel.classList.remove(
      styles.TrainerAccentsWords__letterWrapper__vowel__focus,
    );

    // Добавляем фокус на следующую букву
    nextVowel.setAttribute('data-is-focused', 'true');
    nextVowel.classList.add(
      styles.TrainerAccentsWords__letterWrapper__vowel__focus,
    );
  } else if (e.key === 'ArrowLeft') {
    // Получаем предыдущую гласную (если она первая, то получаем последнюю)
    const prevVowel = (
      Array.from(vowels).indexOf(currentVowel) === 0
        ? vowels.item(vowels.length - 1)
        : vowels.item(Array.from(vowels).indexOf(currentVowel) - 1)
    ) as HTMLElement;

    // Убираем фокус с текущей буквы
    currentVowel.setAttribute('data-is-focused', 'false');
    currentVowel.classList.remove(
      styles.TrainerAccentsWords__letterWrapper__vowel__focus,
    );

    // Добавляем фокус на предыдущую букву
    prevVowel.setAttribute('data-is-focused', 'true');
    prevVowel.classList.add(
      styles.TrainerAccentsWords__letterWrapper__vowel__focus,
    );
  }
};
