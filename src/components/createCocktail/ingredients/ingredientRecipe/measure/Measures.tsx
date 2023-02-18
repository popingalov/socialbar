import Box from 'components/box';
import FormSelect from 'components/UI-kit/form/formSelect';
import Input from 'components/UI-kit/form/input';
import { ChangeEventHandler, useState } from 'react';
import { MeasureBox, MeasureType } from './Measures.styled';

interface IProps {
  handleFieldChange: ChangeEventHandler<HTMLInputElement>;
  handleSelect: (type: string, value: string) => void;
  measure: string;
  measureTypes: string[];
  measureType: string;
}

const Measures: React.FC<IProps> = ({
  handleFieldChange,
  measure,
  measureTypes,
  measureType,
  handleSelect,
}) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  return (
    <MeasureBox>
      <Input
        placeholder=""
        changeInput={handleFieldChange}
        name="measure"
        type="number"
        value={measure !== '' ? measure : '0'}
        isRecipeIngredient={true}
      />
      <Box display="flex" justifyContent="center" alignItems="center">
        <MeasureType name="measureType" value={measureType} readOnly />
        <FormSelect
          name="measureType"
          options={measureTypes}
          onChange={handleSelect}
          selectIsOpen={isSelectOpen}
          openSelect={() => {
            setIsSelectOpen(true);
          }}
          closeSelect={() => {
            setIsSelectOpen(false);
          }}
        />
      </Box>
    </MeasureBox>
  );
};

export default Measures;
