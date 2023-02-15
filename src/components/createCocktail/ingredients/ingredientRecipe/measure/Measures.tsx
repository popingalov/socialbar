import Box from 'components/box';
import FormSelect from 'components/UI-kit/form/formSelect';
import Input from 'components/UI-kit/form/input';
import { ChangeEventHandler } from 'react';
import { MeasureBox, MeasureType } from './Measures.styled';

interface IProps {
  handleFieldChange: ChangeEventHandler<HTMLInputElement>;
  handleSelect: (type: string, value: string) => void;
  measure: string;
  measureTypes: string[];
  measureType: string;
  measureSelectIsOpen: boolean;
  openSelect: () => void;
  closeSelect: () => void;
}

const Measures: React.FC<IProps> = ({
  handleFieldChange,
  measure,
  measureTypes,
  measureType,
  handleSelect,
  measureSelectIsOpen,
  openSelect,
  closeSelect,
}) => {
  return (
    <MeasureBox>
      <Input
        placeholder=""
        changeInput={handleFieldChange}
        name="measure"
        type="number"
        value={measure}
        isRecipeIngredient={true}
      />
      <Box display="flex" justifyContent="center" alignItems="center">
        <MeasureType name="measureType" value={measureType} readOnly />
        <FormSelect
          name="measureType"
          options={measureTypes}
          onChange={handleSelect}
          selectIsOpen={measureSelectIsOpen}
          openSelect={openSelect}
          closeSelect={closeSelect}
        />
      </Box>
    </MeasureBox>
  );
};

export default Measures;
