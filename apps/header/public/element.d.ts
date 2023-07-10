import type { DOMAttributes } from 'react';

type CustomEvents<K extends string> = {
  [key in K]: (event: CustomEvent) => void;
};

type CustomElement<Attributes = unknown, Events extends string> = Partial<
  Attributes & DOMAttributes<Attributes> & CustomEvents<Events>
>;

// List of custom attributes that can be passed as a configuration to the microfrontend
// All keys should be lowercase
export type CustomElementAttributes = {
  brand: string;
  theme: string;
};

// List of custom events that can be emitted to orchestrator
type CustomElementEvents = '';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Element name
      ['myorg-header']: CustomElement<
        CustomElementAttributes,
        CustomElementEvents
      >;
    }
  }
}
