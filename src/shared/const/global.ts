window.matchMedia =
  window.matchMedia ||
  // eslint-disable-next-line func-names
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

export const laptopMediaQueryWidth: MediaQueryList = window.matchMedia(
  '(max-width: 1500px)',
);

export const tabletMediaQueryWidth: MediaQueryList = window.matchMedia(
  '(max-width: 1000px)',
);

export const mobileMediaQueryWidth: MediaQueryList =
  window.matchMedia('(max-width: 600px)');

export const timeoutDurationForRender: number = 0;

export const vowelsArray: string[] = [
  'а',
  'е',
  'ё',
  'и',
  'о',
  'у',
  'ы',
  'э',
  'ю',
  'я',
];
