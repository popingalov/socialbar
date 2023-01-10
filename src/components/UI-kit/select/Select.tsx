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
  value: string;
  options?: string[];
  onChange?: any;
}

const Select: React.FC<IProps> = ({ value, onChange, options }) => {
  // const [currentValue, setCurrentValue] = useState(value);
  const [selectCoordinates, setSelectCoordinates] = useState<ICoordinates>({
    top: null,
    left: null,
    right: null,
  });
  const dispatch = useDispatch();
  const popUpIsOpen = useSelector(selectPopUpStatus);
  const btnRef = useRef<HTMLButtonElement>();

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
    // setCurrentValue(value);

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
        {value}
        {/* {currentValue !== '' ? currentValue : label} */}
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
                    // isActive={value === currentValue}
                    isActive={option === value}
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

// import { useEffect, useRef, useState } from 'react';
// import { Option, OptionsList, SelectLabelButton } from './Select.styled';
// import PopUp from 'components/modal/popUp';
// import { useDispatch } from 'react-redux';
// import { setPopUpIsOpen } from 'redux/modal/modalSlice';
// import { AnimatePresence } from 'framer-motion';
// import { useSelector } from 'react-redux';
// import { selectPopUpStatus } from 'redux/modal/modalSelectors';
// import { AiOutlineCaretDown } from 'react-icons/ai';
// import { theme } from 'constants/theme';

// interface IProps {
//   label: string;
//   values?: string[];
//   onChange?: any;
// }

// const Select: React.FC<IProps> = ({ label, onChange, values }) => {
//   // const [currentValue, setCurrentValue] = useState(label);
//   const [selectCoordinates, setSelectCoordinates] = useState<ICoordinates>({
//     top: null,
//     left: null,
//     right: null,
//   });
//   const dispatch = useDispatch();
//   const popUpIsOpen = useSelector(selectPopUpStatus);
//   const btnRef = useRef<HTMLButtonElement>();

//   useEffect(() => {
//     window.addEventListener('resize', getCoordinates);

//     function getCoordinates() {
//       if (btnRef.current) {
//         const { top, left, right } = btnRef.current.getBoundingClientRect();
//         setSelectCoordinates({ top, left, right });
//       }
//     }
//     getCoordinates();

//     return () => window.removeEventListener('resize', getCoordinates);
//   }, []);

//   const handleOpen: React.MouseEventHandler<HTMLButtonElement> = event => {
//     dispatch(setPopUpIsOpen(true));
//   };

//   const handleChange = (value: string) => {
//     // setCurrentValue(value);

//     if (onChange) onChange(value);

//     dispatch(setPopUpIsOpen(false));
//   };

//   return (
//     <>
//       <SelectLabelButton
//         whileTap={{
//           backgroundColor: theme.colors.accent,
//           transition: { duration: 1 },
//         }}
//         ref={btnRef}
//         onClick={handleOpen}
//       >
//         {label}
//         {/* {currentValue !== '' ? currentValue : label} */}
//         <AiOutlineCaretDown />
//       </SelectLabelButton>

//       <AnimatePresence>
//         {popUpIsOpen && (
//           <PopUp key="popUp" coordinates={selectCoordinates} type="select">
//             <OptionsList>
//               {values &&
//                 values.map((value: string) => (
//                   <Option
//                     onClick={() => handleChange(value)}
//                     // isActive={value === currentValue}
//                     isActive={value === label}
//                     key={value}
//                   >
//                     {value}
//                   </Option>
//                 ))}
//             </OptionsList>
//           </PopUp>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Select;
