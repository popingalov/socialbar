import styled from 'styled-components';

export const SelectContainer = styled.div`
  position: relative;
  margin: 0;
`;

export const SelectLabelButton = styled.button`
  padding: 0.3rem 0.5rem;
  min-width: 7rem;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  color: #111;
  align-items: center;
  justify-content: space-between;
  border: 1px solid slategrey;
  cursor: pointer;
  box-shadow: 0 1px 4px 0 #ccc;
  transition: 0.3s ease;
  &:hover {
    background-color: #eee;
  }
`;

export const DropdownStyle = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  max-height: ${p => (p.isVisible ? '40vmax' : '40px')};
  min-width: 10rem;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: #fafafa;
  border: 1.5px solid slategrey;
  transition: max-height 0.2s ease;
  overflow: scroll;
  visibility: ${p => (p.isVisible ? 'all' : 'hidden')}; ;
`;

export const DropdownItem = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0.15rem 0;
  padding: 0.3rem 0.5rem;
  font-size: 0.9rem;
  font-weight: ${p => (p.isActive ? '500' : '400')};
  color: ${p => (p.isActive ? '#166edc' : '#333')};
  border-radius: 0.3rem;
  cursor: pointer;

  &:hover,
  :focus,
  :focus:hover {
    background-color: #166edc;
    color: #fafafa;
    outline: none;
  }
`;
