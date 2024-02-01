import {
  Select,
  SelectHeader,
  SelectCurrent,
  SelectIcon,
  SelectBody,
  SelectItem,
} from './SelectMenu.styled';

import React from 'react';

import { AiOutlineCaretDown } from 'react-icons/ai';

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
            <AiOutlineCaretDown size={16} />
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
