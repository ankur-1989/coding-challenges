interface TranslatedAttribute {
  "en-US"?: string;
  "de-DE"?: string;
  "fr-FR"?: string;
  "es-ES"?: string;
}

export interface Deal {
  expireTime: string;
  headline: TranslatedAttribute;
  details: TranslatedAttribute;
}

export interface Benefit {
  text: TranslatedAttribute;
}

export interface HotelImage {
  url: string;
  caption: TranslatedAttribute;
}

export interface Hotel {
  id: number;
  minPrice: number;
  currencyCode: string;
  countryCode: string;
  name: TranslatedAttribute;
  address: TranslatedAttribute;
  city: TranslatedAttribute;
  description: TranslatedAttribute;
  benefits: Benefit[];
  deals: Deal[];
  images: HotelImage[];
}

export interface Result {
  success: boolean;
  error: string;
  result: Hotel[];
}
