export interface INewIngredient extends FormData {
  title: string;
  description: string;
  picture?: Blob;
  category: string[];
}

export interface IINewIngredient extends FormData {
  title?: string;
  description?: string;
  picture?: Blob;
  category?: string[];
}

export interface IUpdateIngredient extends FormData {
  id: string;
  owner: string;
  respond: IINewIngredient;
}
