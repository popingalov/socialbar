import { useEffect, useRef, useState } from 'react';
import { Option, OptionsList, SelectLabelButton } from './Select.styled';
import PopUp from 'components/modal/popUp';
import { useDispatch } from 'react-redux';
import { setPopUpIsOpen } from 'redux/modal/modalSlice';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectPopUpStatus } from 'redux/modal/modalSelectors';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { theme } from 'constants/theme';

interface IProps {
  label: string;
  options?: string[];
  onChange?: any;
}

const Select: React.FC<IProps> = ({ label, onChange, options }) => {
  const [currentValue, setCurrentValue] = useState('');
  const [selectCoordinates, setSelectCoordinates] = useState<ICoordinates>({
    top: null,
    left: null,
    right: null,
  });
  const dispatch = useDispatch();
  const popUpIsOpen = useSelector(selectPopUpStatus);
  const btnRef = useRef<HTMLButtonElement>();

  useEffect(() => {
    setCurrentValue(label);
  }, [label]);

  useEffect(() => {
    window.addEventListener('resize', getCoordinates);

    function getCoordinates() {
      if (btnRef.current) {
        const { top, left, right } = btnRef.current.getBoundingClientRect();
        setSelectCoordinates({ top, left, right });
      }
    }
    getCoordinates();

    return () => window.removeEventListener('resize', getCoordinates);
  }, []);

  const handleOpen: React.MouseEventHandler<HTMLButtonElement> = event => {
    dispatch(setPopUpIsOpen(true));
  };

  const handleChange = (option: string) => {
    setCurrentValue(option);

    if (onChange) onChange(option);

    dispatch(setPopUpIsOpen(false));
  };

  return (
    <>
      <SelectLabelButton
        whileTap={{
          backgroundColor: theme.colors.accent,
          transition: { duration: 1 },
        }}
        ref={btnRef}
        onClick={handleOpen}
      >
        {/* {value} */}
        {currentValue !== '' ? currentValue : label}
        <AiOutlineCaretDown />
      </SelectLabelButton>

      <AnimatePresence>
        {popUpIsOpen && (
          <PopUp key="popUp" coordinates={selectCoordinates} type="select">
            <OptionsList>
              {options &&
                options.map((option: string) => (
                  <Option
                    onClick={() => handleChange(option)}
                    isActive={option === currentValue}
                    // isActive={option === value}
                    key={option}
                  >
                    {option}
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
