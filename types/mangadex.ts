export interface IChapterDex {
  id: string;
  attributes: {
    chapter: string;
    title: string;
    createdAt: string;
    pages: number;
  };
  relationships: {
    id: string;
    type: string;
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
    availableTranslatedLanguages: string[];
  };
}
