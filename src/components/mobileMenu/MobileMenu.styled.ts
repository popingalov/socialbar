import { motion } from 'framer-motion';
import styled from 'styled-components';
import background from '../../assets/images/background.jpg';

export const Menu = styled(motion.div)`
  background-image: ${() => `url(${background})`};
  /* background-color: ${({ theme }) => theme.colors.modal}; */
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 480px) {
    overflow-y: scroll;
  }
`;

export const MenuHeader = styled.div`
  padding: ${({ theme }) => theme.space[2]}px;
  min-height: 100px;
  /* background-color: ${({ theme }) => theme.colors.accent}; */
  backdrop-filter: blur(20px);
`;

export const UserIconWrapper = styled.div`
  padding: ${({ theme }) => theme.space[2]}px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: ${({ theme }) => `1px solid ${theme.colors.accent}`};
  background-color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${p => p.theme.space[4]}px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  svg {
    width: 30px;
    height: 30px;
    fill: ${({ theme }) => theme.colors.accent};
  }
`;

export const UserEmail = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.lightText};
  font-size: ${p => p.theme.fontSizes.s};
  font-family: inherit;
`;
