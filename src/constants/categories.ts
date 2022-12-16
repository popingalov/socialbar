interface IIngredientCategories {
  readonly strongAlcohol: string;
  readonly softAlcohol: string;
  readonly beverages: string;
  readonly juices: string;
  readonly fruits: string;
  readonly other: string;
}

export const ingredientCategories: IIngredientCategories = {
  strongAlcohol: 'Strong alcohol',
  softAlcohol: 'Soft alcohol',
  beverages: 'Beverages',
  juices: 'Juices',
  fruits: 'Fruits',
  other: 'Other',
};

interface ICocktailTypes {
  readonly ibaOfficial: string;
  readonly strong: string;
  readonly moderatelyStrong: string;
  readonly soft: string;
  readonly long: string;
  readonly shooters: string;
  readonly nonAlcoholic: string;
}

export const cocktailTypes: ICocktailTypes = {
  ibaOfficial: 'IBA Official',
  strong: 'Strong',
  moderatelyStrong: 'Moderately strong',
  soft: 'Soft',
  long: 'Long',
  shooters: 'Shooters',
  nonAlcoholic: 'Non-alcoholic',
};
