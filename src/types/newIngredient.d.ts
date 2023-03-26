export interface INewIngredient extends FormData {
  title: string;
  description: string;
  picture?: Blob;
  category: string[];
}

export interface IUpdateIngredient {
  ingredient: any;
}
