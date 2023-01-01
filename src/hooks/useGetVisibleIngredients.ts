import { useFetchIngredientsQuery } from 'redux/api/ingredientApi';
import { ingredientFilterStatus } from 'redux/filter/filterConstants';
import { IIngredient } from 'types/ingredient';

export const useGetVisibleIngredients = (filterStatus: string) => {
  const { data: allIngredients, isFetching } = useFetchIngredientsQuery();
  // const { data: myBar, isFetching } = useFetchMyBar();
  // const { data: shoppingList, isFetching } = useFetchShoppingList();

  //   const [skip, setSkip] = React.useState(true);
  //   const { data, error, isLoading, isUninitialized } = useGetPokemonByNameQuery(
  //     name,
  //     {skip,},
  //   );

  switch (filterStatus) {
    case ingredientFilterStatus.myBarShelf:
      const myIngredients: IIngredient[] = [];
      // setSkip(prev => !prev);
      return { visibleIngredients: myIngredients, isFetching };
    case ingredientFilterStatus.shoppingList:
      const shoppingList: IIngredient[] = [];
      return { visibleIngredients: shoppingList, isFetching };
    default:
      return { visibleIngredients: allIngredients, isFetching };
  }
};

// import * as React from 'react';
// import { useGetPokemonByNameQuery } from './services/pokemon';
// import type { PokemonName } from './pokemon.data';

// export const Pokemon = ({ name }: { name: PokemonName }) => {
//   const [skip, setSkip] = React.useState(true);
//   const { data, error, isLoading, isUninitialized } = useGetPokemonByNameQuery(
//     name,
//     {
//       skip,
//     },
//   );

//   const SkipToggle = () => (
//     <button onClick={() => setSkip(prev => !prev)}>
//       Toggle Skip ({String(skip)})
//     </button>
//   );

//   return (
//     <>
//       {error ? (
//         <>Oh no, there was an error</>
//       ) : isUninitialized ? (
//         <div>
//           {name} - Currently skipped - <SkipToggle />
//         </div>
//       ) : isLoading ? (
//         <>loading...</>
//       ) : data ? (
//         <>
//           <div>
//             <h3>{data.species.name}</h3>
//             <img src={data.sprites.front_shiny} alt={data.species.name} />
//           </div>
//           <SkipToggle />
//         </>
//       ) : null}
//     </>
//   );
// };
