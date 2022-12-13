interface ICocktail {
  name: string;
  des: string;
  recipe: string[];
  type: string[];
  ingredients: string[];
}

// export interface IIngredient {
//   id: string;
//   ing_id: string;
//   ing_name: string;
//   ing_image: string;
//   quantity: number;
//   measure: string;
//   garnish: boolean;
//   optional: boolean;
//   substitute: string | null; // id ингредиента-замены
// }

// export interface ICocktail {
//   id: string;
//   name: string;
//   image: string;
//   glass: string;
//   des: string;
//   recipe: string[];
//   type: string; // в базовом приложении у коктейля может быть только один тип
//   ingredients: IIngredient[];
// }
