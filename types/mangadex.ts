export interface IChapterDex {
  id: string;
  attributes: {
    chapter: string;
    title: string;
    translatedLanguage: string;
    createdAt: string;
    pages: number;
  };
  relationships: {
    id: string;
    type: string;
    attributes?: {
      name: string;
      website?: string;
    };
  }[];
}

export interface IChapterImages {
  chapter: {
    hash: string;
    data: string[];
    dataSaver: string[];
  };
}

export interface IMangaDex {
  id: string;
  attributes: {
    title: { en: string; "ja-ro": string };
    availableTranslatedLanguages: string[];
    links: {
      al: string;
    };
  };
  relationships: {
    id: string;
    type: string;
    attributes?: {
      fileName?: string;
    };
  }[];
}
