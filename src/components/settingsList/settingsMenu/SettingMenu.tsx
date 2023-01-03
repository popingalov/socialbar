import React from 'react';

interface IProps {
  type: string;
}

const SettingMenu: React.FC<IProps> = ({ type }) => {
  return <div>SettingMenu {type}</div>;
};

export default SettingMenu;
