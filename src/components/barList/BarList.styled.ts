import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BarListStyled = styled(motion.ul)<{ type: string }>`
  display: flex;
  flex-direction: column;

  li {
    border-bottom: 1px solid
      ${({ theme, type }) =>
        type === 'search'
          ? theme.colors.mainBackgroundColor
          : theme.colors.borderBottom};
    display: block;
    padding-top: ${p => p.theme.space[2]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: calc(${p => p.theme.space[4]}px - 8px);
  }

  img {
    display: block;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: ${({ theme }) => `1px solid ${theme.colors.borderBottom}`};
    object-fit: cover;
    background-color: ${({ theme }) => theme.colors.white};
    margin-right: ${p => p.theme.space[3]}px;
  }
`;
