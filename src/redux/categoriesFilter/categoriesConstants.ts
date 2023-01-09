interface ICocktailCategories {
  readonly noFilter: string;
  readonly ibaOfficial: string;
  readonly strong: string;
  readonly moderatelyStrong: string;
  readonly soft: string;
  readonly long: string;
  readonly shooters: string;
  readonly nonAlcoholic: string;
}

export const cocktailCategories: ICocktailCategories = {
  noFilter: 'noFilter',
  ibaOfficial: 'ibaOfficial',
  strong: 'strong',
  moderatelyStrong: 'moderatelyStrong',
  soft: 'soft',
  long: 'long',
  shooters: 'shooters',
  nonAlcoholic: 'nonAlcoholic',
};

interface IIngredientCategories {
  readonly noFilter: string;
  readonly strongAlcohol: string;
  readonly softAlcohol: string;
  readonly beverages: string;
  readonly juices: string;
  readonly fruits: string;
  readonly other: string;
}

export const ingredientCategories: IIngredientCategories = {
  noFilter: 'noFilter',
  strongAlcohol: 'strongAlcohol',
  softAlcohol: 'softAlcohol',
  beverages: 'beverages',
  juices: 'juices',
  fruits: 'fruits',
  other: 'other',
};
