import { ICocktail } from '../CocktailDesc';
import cube from './cuba-png.png';
import rum from './rum.jpeg';
import ice from './ice.jpeg';
import lemon from './lime.jpg';
import cola from './cola.jpg';

export const cocktail: ICocktail = {
  id: '123fgre5rte',
  name: 'cuba libre',
  image: cube,
  glass: '',
  des: 'Often referred to as "Rum and Cola," this IBA official cocktail became popular in the United States after the Andrews Sisters recorded a song named after the drinks ingredients, "Rum and Coca-Cola," in 1945. A popular variation often omits lime juice.',
  recipe: [
    'fill a highball glass with ice.',
    'pour 50ml of light rum and 120ml of cola over the ice',
    'Add 10ml of lime juice',
    'Garnish with a lime slice',
    'Ok, now you cant drink',
  ],
  type: 'IBA Official', //не видела коктейлей с несколькими типами???
  ingredients: [
    {
      id: 1,
      name: 'white run',
      image: rum,
      quantity: 200,
      measure: 'ml',
      garnish: false,
      optional: false,
      substitute: 'whisky',
    },
    {
      id: 2,
      name: 'cola',
      image: cola,
      quantity: 120,
      measure: 'ml',
      garnish: false,
      optional: false,
      substitute: null,
    },
    {
      id: 3,
      name: 'lime',
      image: lemon,
      quantity: 1,
      measure: 'half',
      garnish: false,
      optional: true,
      substitute: null,
    },
    {
      id: 4,
      name: 'lime',
      image: lemon,
      quantity: 1,
      measure: 'slice',
      garnish: true,
      optional: false,
      substitute: null,
    },
    {
      id: 5,
      name: 'ice',
      image: ice,
      quantity: 100,
      measure: 'gr',
      garnish: false,
      optional: false,
      substitute: null,
    },
  ],
};

export const myBar = [
  {
    id: 1,
    ingredient: 'white run',
  },
  {
    id: 2,
    ingredient: 'ice',
  },
];

export const myFavorite = [
  {
    id: 1,
    cocktail: 'cuba libre',
  },
];
