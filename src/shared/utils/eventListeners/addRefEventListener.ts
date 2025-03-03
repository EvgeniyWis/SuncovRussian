import { BrowserEventTypes } from '../../types/global';
import { deleteRefEventListener } from './deleteRefEventListener';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const addRefEventListener = (
  ref: React.RefObject<any>,
  eventType: BrowserEventTypes,
  func: (e?: any) => void,
  elemForEvent: HTMLElement | Document = document,
  withDeleteAfterFirstUse: boolean = false,
) => {
  ref.current = (e: any) => {
    func(e);

    if (withDeleteAfterFirstUse) {
      deleteRefEventListener(ref, eventType, elemForEvent);
    }
  };

  elemForEvent.addEventListener(eventType, ref.current);
};
