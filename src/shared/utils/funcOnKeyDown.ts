export const funcOnKeyDown = (
  e: KeyboardEvent,
  func: () => void,
  key: string,
) => {
  if (e.key === key) {
    func();
  }
};
