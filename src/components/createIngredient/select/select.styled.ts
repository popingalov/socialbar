import styled from 'styled-components';

export const Select = styled.div`
  width: 160px;
  margin-right: auto;
  position: relative;
`;

export const SelectHeader = styled.div`
  display: flex;
  border: none;
  cursor: pointer;
  :before {
    content: '';
    position: absolute;
    top: 57%;
    right: 3px;
    width: 1px;
    height: 1px;
    border-radius: 50%;
    background: transparent;
  }
  :hover:before {
    transform: scale(40, 40);
    background: ${({ theme }) => theme.colors.accent};
    opacity: 0.4;
  }
`;
export const SelectCurrent = styled.span`
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.secondaryText};
  padding: ${({ theme }) => theme.space[0]}px;
  background: transparent;
  display: flex;
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
  background: ${({ theme }) => theme.colors.white};
  padding-left: ${({ theme }) => theme.space[1]}px;
  padding-bottom: ${({ theme }) => theme.space[2]}px;
  padding-right: ${({ theme }) => theme.space[1]}px;
  padding-top: ${({ theme }) => theme.space[2]}px;
  border-radius: 2px;
  overflow: hidden;
`;
export const SelectItem = styled.li`
  position: relative;
  padding: ${({ theme }) => theme.space[0]}px;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.secondaryText};

    cursor: pointer;
  :not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[2]}px;
  }
  :before {
    content: '';
    position: absolute;
    top: 75%;
    left: 62%;
    width: 1px;
    height: 1px;
    background: transparent
    transition: all 0.5s ease;
     }
  :hover:before {
    transition: all 0.5s ease;
   background: ${({ theme }) => theme.colors.accent};
    opacity: 0.4;
    -webkit-transform: scale(170, 50);
    -ms-transform: scale(170, 50);
    transform: scale(170, 50);
  }

`;
