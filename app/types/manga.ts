export interface IManga {
  id: number;
  idMal: number | null | undefined;
  bannerImage: string;
  coverImage: {
    extraLarge: string;
  };
  title: {
    romaji: string;
    english: string;
  };
  description: string;
  status: string;
  averageScore: string;
  favourites: string;
  genres: string[];
}

export interface IDetailManga extends IManga {
  synonyms: string[];
  startDate: {
    year: number;
    month: number;
    day: number;
  };
  tags: {
    name: string;
  }[];
  characters: {
    edges: {
      role: string;
      node: {
        name: {
          full: string;
          userPreferred: string;
        };
        image: {
          large: string;
        };
      };
    }[];
  };
  staff: {
    edges: {
      role: string;
      node: {
        name: {
          full: string;
          userPreferred: string;
        };
        image: {
          large: string;
        };
      };
    }[];
  };
  trailer: {
    id: string;
  } | null;
  recommendations: {
    edges: {
      node: {
        mediaRecommendation: {
          id: string;
          title: {
            userPreferred: string;
            english: string;
          };
          coverImage: {
            large: string;
          };
          status: string;
        };
      };
    }[];
  };
  externalLinks: {
    url: string;
    site: string;
    language: string;
  }[];
}

export interface IMangaList {
  data: {
    Page: {
      media: IManga[];
    };
  };
}

export interface IReturnListManga {
  data: {
    Media: IManga;
  };
}

export interface IReturnDetailManga {
  data: {
    Media: IDetailManga;
  };
}

interface IPages {
  b2key: string;
  w: number;
  h: number;
}

export interface IChapterInComick {
  chap: string;
  hid: string;
  title: string;
}

export interface IComick {
  chapter: {
    chap: string;
    title: string;
    md_images: IPages[];
    md_comics: {
      md_covers: { b2key: string; w: number; h: number }[];
      id: number;
      title: string;
      links: {
        al: string;
      };
    };
  };
  chapters: IChapterInComick[];
  langList: string[];
  next: {
    chap: string;
    title: string;
    hid: string;
  };
  prev: {
    chap: string;
    title: string;
    hid: string;
  };
}

export interface IChapter {
  chap: string;
  hid: string;
  title: string;
  group_name: string[];
  created_at: string;
}

export interface ITag {
  id: number;
  name: string;
}

export interface IHistoryManga {
  userAgent: string;
  userId?: string;
  alId?: string;
  clientIp: string;
  mangadexId: string;
  coverImage: string;
  title: string;
  path: string;
  readingChapter: string;
}
