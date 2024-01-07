import translation from "../public/locales/en/translation.json";

const resources = {
  translation,
} as const;

declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof resources;
  }
}
