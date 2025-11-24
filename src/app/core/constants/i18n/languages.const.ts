import { SafeHtml } from "@angular/platform-browser";

export type LanguageOption = {
  code: string;
  label: string;
  iconLabel: string;
  iconHtml?: SafeHtml;
};

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'en', label: 'English', iconLabel: 'navbar/en-flag'},
  { code: 'pt-br', label: 'Português (BR)', iconLabel: 'navbar/br-flag' },
  { code: 'jp', label: '日本語', iconLabel: 'navbar/jp-flag' },
];