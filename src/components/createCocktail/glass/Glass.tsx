import Box from 'components/box';
import PopUp from 'components/modal/popUp';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useGetGlassesQuery } from 'redux/api/manualApi';
import { selectPopUpGlassStatus } from 'redux/modal/modalSelectors';
import { setPopUpGlassIsOpen } from 'redux/modal/modalSlice';
import { IGlass } from 'types/manual';
import { ButtonStyled } from './Glass.styled';

interface IProps {
  onChoose: (glass: IGlass) => void;
  currentGlass: IGlass;
}

const Glass: React.FC<IProps> = ({ onChoose, currentGlass }) => {
  const { data: glasses } = useGetGlassesQuery();
  const popUpIsOpen = useSelector(selectPopUpGlassStatus);
  const dispatch = useDispatch();
  const ref = useRef<HTMLButtonElement>();

  const [selectCoordinates, setSelectCoordinates] = useState<ICoordinates>({
    top: null,
    left: null,
    right: null,
  });

  useEffect(() => {
    if (ref.current) ref.current.focus();

    window.addEventListener('resize', getCoordinates);

    function getCoordinates() {
      if (ref.current) {
        const { top, left, right, height } =
          ref.current.getBoundingClientRect();
        setSelectCoordinates({ top: top + height, left, right });
      }
    }
    getCoordinates();

    return () => window.removeEventListener('resize', getCoordinates);
  }, []);

  const handleClick = () => {
    dispatch(setPopUpGlassIsOpen(true));
  };

  const handleOptionChange = (glass: IGlass) => {
    onChoose(glass);
    dispatch(setPopUpGlassIsOpen(false));
  };

  return (
    <>
      <Box>
        <p>Glass:</p>
        <p>{currentGlass.title}</p>
      </Box>
      <ButtonStyled type="button" ref={ref} onClick={handleClick}>
        Choose glass
      </ButtonStyled>

      <AnimatePresence>
        {popUpIsOpen && (
          <PopUp key="popUp" coordinates={selectCoordinates} type="glass">
            <ul>
              {glasses &&
                glasses.map(glass => (
                  <li
                    onClick={() => handleOptionChange(glass)}
                    // isActive={option === currentValue}
                    key={glass._id}
                  >
                    <p>{glass.title}</p>
                  </li>
                ))}
            </ul>
          </PopUp>
        )}
      </AnimatePresence>
    </>
  );
};

export default Glass;
