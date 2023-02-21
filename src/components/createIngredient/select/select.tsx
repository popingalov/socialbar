import {
  Select,
  SelectHeader,
  SelectCurrent,
  SelectIcon,
  SelectBody,
  SelectItem,
} from './select.styled';

import React from 'react';

import { AiFillCaretDown } from 'react-icons/ai';

interface IProps {
  text: string;
  isMenuOpen?: boolean;
  clickFunction: () => void;
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
            <AiFillCaretDown size={14} fill="#757575" />
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
