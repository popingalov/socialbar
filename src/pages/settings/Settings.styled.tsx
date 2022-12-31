import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SettingsListStyled = styled(motion.ul)`
  display: flex;
  flex-direction: column;
`;

export const SettingsItem = styled.li<{ name: string }>`
  display: block;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[5]}px;
  padding-left: calc(${p => p.theme.space[5]}px - 4px);
`;

export const Title = styled.p`
  text-transform: capitalize;
  margin-bottom: 2px;
`;

export const Description = styled.p`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
