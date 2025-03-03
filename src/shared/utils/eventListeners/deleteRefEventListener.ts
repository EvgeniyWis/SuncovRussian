/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowserEventTypes } from '../../types/global';

export const deleteRefEventListener = (
  ref: React.RefObject<any>,
  eventType: BrowserEventTypes,
  elemForEvent: HTMLElement | Document = document,
) => {
  if (ref.current) {
    elemForEvent.removeEventListener(eventType, ref.current);
    ref.current = null;
  }
};
