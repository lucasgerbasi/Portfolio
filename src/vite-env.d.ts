/// <reference types="vite/client" />

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

interface Window {
  goatcounter: {
    count: (options: { path: string; event: boolean; title?: string }) => void;
  };
}