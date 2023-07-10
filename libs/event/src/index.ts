/**
 * Dispatch an event
 * @param {string} eventName Event Name
 * @param {*} data Data to transport
 */
export const dispatch = <T = unknown>(eventName: string, data: T) => {
  const event = new CustomEvent(eventName, { detail: data });

  window.dispatchEvent(event);
};

/**
 * Subscribe to an event
 * @param {string} eventName Event Name
 * @param {Function} callback Callback Function
 */
export const on = <T>(
  eventName: string,
  callback: (event: CustomEvent<T>) => void
) => {
  window.addEventListener(eventName, callback as EventListener);
};

/**
 * Subscribe to an event and immediately unsubscribe once received
 * @param {string} eventName Event Name
 * @param {Function} callback Callback Function
 */
export const once = <T>(
  eventName: string,
  callback: (event: CustomEvent<T>) => void
) => {
  window.addEventListener(eventName, callback as EventListener, { once: true });
};

/**
 * Unsubscribe from an event
 * @param {string} eventName Event Name
 * @param {Function} callback Callback Function
 */
export const unsubscribe = <T>(
  eventName: string,
  callback: (event: CustomEvent<T>) => void
) => {
  window.removeEventListener(eventName, callback as EventListener);
};
