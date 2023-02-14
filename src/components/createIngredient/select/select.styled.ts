import styled, { keyframes } from 'styled-components';

export const Select = styled.div`
  width: 160px;
  margin-right: auto;
  position: relative;
`;
const animateArrow = keyframes`
  0% {
     transform: scale(1, 1);
     background: transparent;
  }
  50% {
     transform: scale(40, 40);
     background: #3aafa9;
  }
  100% {
     transform: scale(0, 0);
     background: transparent;
  }
`;
export const SelectHeader = styled.div`
  display: flex;
  border: none;
  cursor: pointer;
  :before {
    content: '';
    position: absolute;
    top: 53%;
    right: 5px;
    width: 1px;
    height: 1px;
    border-radius: 50%;
    background: transparent;
  }
  :hover:before {
    animation: ${animateArrow} 500ms ease;
    opacity: 0.7;
    -webkit-transform: scale(40, 40);
    -ms-transform: scale(40, 40);
  }
`;
export const SelectCurrent = styled.span`
  padding: 0;
  font-size: 15px;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.secondaryText};
  background: transparent;
  display: flex;
`;
export const ImgArrow = styled.img`
  display: flex;
  width: 7px;
  height: 7px;
  margin: auto 5px auto auto;
`;

export const SelectIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-shrink: 0;
  margin-left: auto;
`;
export const SelectBody = styled.ul`
  position: absolute;
  min-width: 130px;
  left: 0;
  top: 0;
  border: none;
  border-top: 0;
  background: ${({ theme }) => theme.colors.modal};
  /* padding: ${({ theme }) => theme.space[2]}px; */
  overflow: hidden;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
`;
export const SelectItem = styled.li`
  position: relative;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.mainText};
  padding: ${({ theme }) => theme.space[2]}px;
  cursor: pointer;
  /* 
  :not(:last-child) {
    margin-bottom: 20px;
  } */

  :before {
    content: '';
    position: absolute;
    top: 75%;
    left: 62%;
    width: 1px;
    height: 1px;
    background: transparent;
    transition: all 2s ease;
  }
  :hover:before {
    transition: all 1s ease;
    background: #3aafa9;
    opacity: 0.7;
    -webkit-transform: scale(170, 50);
    -ms-transform: scale(170, 50);
    transform: scale(170, 50);
  }
`;
