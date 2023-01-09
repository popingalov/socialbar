export const ingredientTypes = [
  'No Filter',
  'Strong alcohol',
  'Soft alcohol',
  'Beverages',
  'Juices',
  'Fruits',
  'Other',
];

export const cocktailTypes = [
  'No Filter',
  'IBA Official',
  'Strong',
  'Moderately strong',
  'Soft',
  'Long',
  'Shooters',
  'Non-alcoholic',
];

interface ICategory {
  readonly value: string;
  readonly label: string;
}

export const ingredientCategoriesSelect: ICategory[] = [
  { value: 'noFilter', label: 'No Filter' },
  { value: 'strongAlcohol', label: 'Strong alcohol' },
  { value: 'softAlcohol', label: 'Soft alcohol' },
  { value: 'beverages', label: 'Beverages' },
  { value: 'juices', label: 'Juices' },
  { value: 'fruits', label: 'Fruits' },
  { value: 'other', label: 'Other' },
];

export const cocktailCategoriesSelect: ICategory[] = [
  { value: 'noFilter', label: 'No Filter' },
  { value: 'strong', label: 'Strong' },
  { value: 'ibaOfficial', label: 'IBA Official' },
  { value: 'moderatelyStrong', label: 'Moderately strong' },
  { value: 'soft', label: 'Soft' },
  { value: 'long', label: 'Long' },
  { value: 'shooters', label: 'Shooters' },
  { value: 'nonAlcoholic', label: 'Non-alcoholic' },
];
