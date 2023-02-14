import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SelectContainer = styled.div`
  position: relative;
  margin: 0;
`;

export const SelectLabelButton = styled(motion.button)<{ ref: any }>`
  padding-left: ${({ theme }) => theme.space[3]}px;
  padding-right: ${({ theme }) => theme.space[3]}px;
  padding-top: ${({ theme }) => theme.space[2]}px;
  padding-bottom: ${({ theme }) => theme.space[2]}px;
  display: flex;
  align-items: center;
  text-align: left;
  font-family: inherit;
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

  /* &:hover {
    background-color: ${({ theme }) => theme.colors.hoverLinkBackgroundColor};
  } */
`;

export const OptionsList = styled.ul`
  width: 100%;
`;

export const Option = styled.li`
  display: flex;
  align-items: flex-start;
  width: 90%;
  margin: 0;
  padding: ${({ theme }) => theme.space[1]}px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.mainText};
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;

  :hover,
  :focus,
  :focus:hover {
    background-color: ${({ theme }) => theme.colors.activeLinkBackgroundColor};
    outline: none;
  }
`;
