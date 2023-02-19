import {
  Modal,
  Option,
  OptionsList,
  SelectLabelButton,
} from './FormSelect.styled';
import { AnimatePresence } from 'framer-motion';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { theme } from 'constants/theme';
import Box from 'components/box/Box';

interface IProps {
  options?: string[];
  onChange?: (type: string, value: string) => void;
  name: string;
  selectIsOpen: boolean;
  closeSelect: () => void;
  openSelect: () => void;
}

const FormSelect: React.FC<IProps> = ({
  onChange,
  options,
  closeSelect,
  selectIsOpen,
  openSelect,
  name,
}) => {
  const handleOpen: React.MouseEventHandler<HTMLButtonElement> = event => {
    openSelect();
  };

  const handleChange = (option: string) => {
    if (onChange) onChange(name, option);
    closeSelect();
  };

  return (
    <Box position="relative">
      <SelectLabelButton
        name={name}
        type="button"
        whileTap={{
          backgroundColor: theme.colors.accent,
          transition: { duration: 1 },
        }}
        onClick={handleOpen}
      >
        <AiOutlineCaretDown color={theme.colors.mainText} />
      </SelectLabelButton>

      <AnimatePresence>
        {selectIsOpen && (
          <Modal key="popUp" name="categorySelect">
            <OptionsList>
              {options &&
                options.map((option: string) => (
                  <Option onClick={() => handleChange(option)} key={option}>
                    {option}
                  </Option>
                ))}
            </OptionsList>
          </Modal>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default FormSelect;
