export const funcOnEnter = (e: KeyboardEvent, func: () => void) => {
  if (e.key === 'Enter') {
    func();
  }
};
