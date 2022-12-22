import styled from 'styled-components';

export const SelectContainer = styled.div`
  position: relative;
  margin: 0;
`;

export const SelectLabelButton = styled.button`
  padding-left: ${({ theme }) => theme.space[3]}px;
  padding-right: ${({ theme }) => theme.space[3]}px;
  padding-top: ${({ theme }) => theme.space[2]}px;
  padding-bottom: ${({ theme }) => theme.space[2]}px;
  max-width: 220px;
  width: 100%;
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes.s};
  letter-spacing: 0.03em;
  font-weight: 500;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.lightText};
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverLinkBackgroundColor};
  }
`;

export const OptionsList = styled.ul`
  width: 100%;
`;

export const Option = styled.li<{ isActive: boolean }>`
  display: flex;
  align-items: flex-start;
  width: 90%;
  margin: 0;
  padding: ${({ theme }) => theme.space[1]}px;
  font-size: 0.9rem;
  font-weight: ${p => (p.isActive ? '500' : '400')};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.accent : theme.colors.mainText};
  border-radius: 4px;
  cursor: pointer;

  &:hover,
  :focus,
  :focus:hover {
    background-color: ${({ theme }) => theme.colors.hoverLinkBackgroundColor};
    color: ${({ theme }) => theme.colors.lightText};
    outline: none;
  }
`;
