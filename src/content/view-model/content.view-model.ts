interface TranslationField {
  [key: string]: string;
}

export interface ContentViewModel {
  id: number;
  url: string;
  meta_title: TranslationField;
  meta_description: TranslationField;
  meta_keywords: TranslationField;
  crypto_title: TranslationField;
  crypto_text: TranslationField;
  how_to_title: TranslationField;
  how_to_text: TranslationField;
  bottom_how_to_title: TranslationField;
  bottom_how_to_text: TranslationField;
  bottom_advantages_title: TranslationField;
  bottom_advantages_text: TranslationField;
}
