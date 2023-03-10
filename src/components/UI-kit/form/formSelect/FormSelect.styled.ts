import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SelectContainer = styled.div`
  position: relative;
  margin: 0;
`;

export const SelectLabelButton = styled(motion.button)`
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
