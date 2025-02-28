/// <reference types="vite/client" />
/// <reference types="vite-plugin-svg-icons/client" />

declare module "*.png" {
  const content: string;
  export default content;
}
