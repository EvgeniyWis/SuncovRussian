import { BrowserEventTypes } from '../../types/global';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const addRefEventListener = (
  ref: React.RefObject<any>,
  eventType: BrowserEventTypes,
  func: (e?: any) => void,
  elemForEvent: HTMLElement | Document = document,
) => {
  ref.current = func;

  elemForEvent.addEventListener(eventType, ref.current);
};
