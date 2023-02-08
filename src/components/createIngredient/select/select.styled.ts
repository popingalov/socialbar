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
  font-size: 15px;
  font-family: 'Montserrat', sans- serif;
  color: #696969;
  padding: 0;
  background: transparent;
  display: flex;
`;
export const ImgArrow = styled.img`
display: flex
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
  width: 130px;
  left: 0;
  top: 0;
  border: none;
  border-top: 0;
  background: #ffffff;
  padding: 10px 5px;
  border-radius: 2px;
  overflow: hidden;
`;
export const SelectItem = styled.li`
  position: relative;
  padding: 0;
  font-family: 'Montserrat', sans- serif;
  color: #696969;
  padding: 0;
    cursor: pointer;
  :not(:last-child) {
    margin-bottom: 20px;
  }
  :before {
    content: '';
    position: absolute;
    top: 75%;
    left: 62%;
    width: 1px;
    height: 1px;
    background: transparent
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