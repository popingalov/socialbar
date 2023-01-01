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
import { useAppSize } from 'hooks/useAppSize';

interface IProps {
  label: string;
  values?: string[];
  onChange?: any;
}

const Select: React.FC<IProps> = ({ label, values, onChange }) => {
  const [currentValue, setCurrentValue] = useState('');
  const [selectCoordinates, setSelectCoordinates] = useState<ICoordinates>({
    top: null,
    left: null,
    right: null,
  });
  const dispatch = useDispatch();
  const popUpIsOpen = useSelector(selectPopUpStatus);
  const btnRef = useRef<HTMLButtonElement>();

  // const size = useAppSize();

  // useEffect(() => {
  //   if (btnRef.current) {
  //     const { top, left, right } = btnRef.current.getBoundingClientRect();
  //     setSelectCoordinates({ top, left, right });
  //   }
  // }, [size]);

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

  const handleChange = (value: string) => {
    setCurrentValue(value);

    // call method, if it exists
    if (onChange) onChange(value);

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
        {currentValue !== '' ? currentValue : label}
        <AiOutlineCaretDown />
      </SelectLabelButton>

      <AnimatePresence>
        {popUpIsOpen && (
          <PopUp key="popUp" coordinates={selectCoordinates} type="select">
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
