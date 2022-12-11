import { Checkbox } from 'components/checkbox/Checkbox';
import { useState } from 'react';
// import { useState } from 'react';

// @use "@material/checkbox";
// @use "@material/form-field";

// @include checkbox.core-styles;
// @include form - field.core - styles;

interface IProps {
  type: string;
  name: string;
}
export const IngredientCard: React.FC<IProps> = ({ type, name }) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <p>
        {type} {name}
      </p>
      <Checkbox
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
      />
    </>
  );
};
