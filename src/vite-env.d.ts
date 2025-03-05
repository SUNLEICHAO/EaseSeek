/// <reference types="vite/client" />
/// <reference types="vite-plugin-svg-icons/client" />

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "virtual:*" {
  const content: unknown;
  export default content;
}
