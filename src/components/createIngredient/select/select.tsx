import {
  Select,
  SelectHeader,
  SelectCurrent,
  SelectIcon,
  SelectBody,
  SelectItem,
  ImgArrow,
} from './select.styled';

import arrowSvg from '../../../assets/images/newIngridient/down-arrow-7425.svg';
import React from 'react';

interface IProps {
  text: string;
  isMenuOpen?: boolean;
  clickFunction: any;
  chooseFunction: any;
}

const SelectMenu: React.FC<IProps> = ({
  text,
  isMenuOpen = false,
  clickFunction,
  chooseFunction,
}) => {
  const selectList = [
    'Strong alcohol',
    'Soft alcohol',
    'Beverages',
    'Juices',
    'Fruits',
    'Other',
  ];

  return (
    <>
      <Select>
        <SelectHeader onClick={clickFunction}>
          <SelectCurrent>{text}</SelectCurrent>
          <SelectIcon>
            <ImgArrow src={arrowSvg} alt="Select arrow" />
          </SelectIcon>
        </SelectHeader>
        {isMenuOpen && (
          <>
            <SelectBody>
              {selectList.map(item => {
                return (
                  <SelectItem key={item} onClick={chooseFunction}>
                    {item}
                  </SelectItem>
                );
              })}
            </SelectBody>
          </>
        )}
      </Select>
    </>
  );
};
export default SelectMenu;
