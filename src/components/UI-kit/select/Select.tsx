import { useState } from 'react';
import { Option, OptionsList, SelectLabelButton } from './Select.styled';
import PopUp from 'components/popUp';
import { useDispatch } from 'react-redux';
import { setPopUpIsOpen } from 'redux/modal/modalSlice';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectPopUpStatus } from 'redux/modal/modalSelectors';

interface IProps {
  label: string;
  values?: string[];
  onChange?: any;
}

const Select: React.FC<IProps> = ({ label, values, onChange }) => {
  const [currentValue, setCurrentValue] = useState('');
  const dispatch = useDispatch();
  const popUpIsOpen = useSelector(selectPopUpStatus);

  // find DOM element position via useRef and el.getBoundingClientRect()
  const handleOpen: React.MouseEventHandler<HTMLButtonElement> = event => {
    dispatch(setPopUpIsOpen(true));
    // console.log(
    //   'event.clientX, y: event.clientY ',
    //   event.clientX,
    //   event.clientY,
    // );
  };

  const handleChange = (value: string) => {
    setCurrentValue(value);

    // call method, if it exists
    if (onChange) onChange(value);

    dispatch(setPopUpIsOpen(false));
  };

  return (
    <>
      <SelectLabelButton onClick={handleOpen}>
        {currentValue !== '' ? currentValue : label}
      </SelectLabelButton>

      <AnimatePresence>
        {popUpIsOpen && (
          <PopUp key="popUp">
            <OptionsList>
              {values &&
                values.map((value: string) => (
                  <Option
                    onClick={() => handleChange(value)}
                    isActive={value === currentValue}
                    key={value}
                  >
                    {value}
                  </Option>
                ))}
            </OptionsList>
          </PopUp>
        )}
      </AnimatePresence>
    </>
  );
};

export default Select;
