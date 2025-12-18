export {};

declare global {
  interface Window {
    initComponents?: (context?: HTMLElement | Document) => void;
  }
}
