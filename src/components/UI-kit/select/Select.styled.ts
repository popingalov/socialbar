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
  font-size: ${({ theme }) => theme.fontSizes.s};
  letter-spacing: 0.03em;
  font-weight: 500;
  /* background-color: transparent; */
  background-color: ${({ theme }) => theme.colors.activeLinkBackgroundColor};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.mainText};
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const DropdownStyle = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  max-height: ${p => (p.isVisible ? '270px' : '40px')};
  min-width: 150px;
  padding: ${({ theme }) => theme.space[2]}px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.mainBackgroundColor};
  border: 1px solid ${({ theme }) => theme.colors.backdropColor};
  border-radius: 4px;
  overflow: scroll;
  opacity: ${p => (p.isVisible ? '1' : '0')};
  visibility: ${p => (p.isVisible ? 'all' : 'hidden')};
  transition: max-height 0.2s ease;
`;

export const DropdownItem = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
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
