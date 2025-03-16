interface TranslatedAttribute {
  "en-US"?: string;
  "de-DE"?: string;
  "fr-FR"?: string;
  "es-ES"?: string;
}
export interface Result {
  success: boolean;
  error: string;
  result: {
    id: number;
    minPrice: number;
    currencyCode: string;
    countryCode: string;
    name: TranslatedAttribute;
    address: TranslatedAttribute;
    city: TranslatedAttribute;
    description: TranslatedAttribute;
    benefits: {
      text: TranslatedAttribute;
    }[];
    deals: {
      expireTime: string;
      headLine: TranslatedAttribute;
      details: TranslatedAttribute;
    }[];
    images: {
      url: string;
      caption: TranslatedAttribute;
    }[];
  }[];
}
