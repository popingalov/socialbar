import { motion } from 'framer-motion';
import styled from 'styled-components';

export const TabContainer = styled.div`
  overflow-y: hidden;
  box-shadow: none;
`;

export const TabList = styled.div`
  display: block;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

export const TabItem = styled(motion.button)`
  white-space: nowrap;
  -webkit-appearance: none;
  box-sizing: border-box;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  user-select: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  box-shadow: none;
  cursor: pointer;
  text-decoration: none;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  padding: 10px 1rem;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  text-size-adjust: none;
  text-overflow: ellipsis;
  line-height: 1.5;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${p => (p.isActive ? 'rgb(25, 113, 194)' : 'rgb(95, 104, 113)')};
  margin: 0px;
  overflow: hidden;
`;

export const Slider = styled(motion.div)`
  height: 4px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  margin-left: 2px;
  margin-right: 2px;
  bottom: 0;
  position: absolute;
  background: #08e;
`;
