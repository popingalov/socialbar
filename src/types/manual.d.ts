export interface IGlass {
  id: string;
  title: string;
  picture: string;
}

interface IItem {
  title: string;
  code: string;
}

export interface ICategory {
  ingredients: IItem[];
  cocktails: IItem[];
}
