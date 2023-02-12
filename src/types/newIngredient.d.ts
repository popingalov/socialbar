// import { ICocktail } from './cocktail';

export interface newIIngredient extends FormData {
  title: string;
  description: string;
  picture?: Blob;
  category: string[];
}

export interface newIngredient extends FormData {
  data: {
    availability: boolean;
    category: string;
    cocktails: [];
    description: string;
    iHave: boolean;
    id: string[];
    isDefault: boolean;
    owner: string;
    picture: Blob;
    shopping: boolean;
    title: string;
    __v: number;
    _id: string;
  };
}

//   data: {
// availability: boolean;
// category: string;
// cocktails: [];
// description: string;
// iHave: boolean;
// id: string;
// isDefault: boolean;
// owner: string;
// picture: string;
// shopping: boolean;
// title: string;
// __v: number;
// _id: string;
//   };
// }>({
//   data: {
// availability: false,
// category: 'Strong alcohol',
// cocktails: [],
// description: '',
// iHave: false,
// id: '',
// isDefault: false,
// owner: '',
// picture: '',
// shopping: false,
// title: '',
// __v: 0,
// _id: '',
//   },
// });

// {
//   data: {
// availability: boolean;
// category: string;
// cocktails: [];
// description: string;
// iHave: boolean;
// id: string;
// isDefault: boolean;
// owner: string;
// picture: string;
// shopping: boolean;
// title: string;
// __v: number;
// _id: string;
//   };
// }
