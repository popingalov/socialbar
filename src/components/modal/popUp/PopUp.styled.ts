import { motion } from 'framer-motion';
import { IWindowDimensions } from 'hooks/useGetWindowDimensions';
import styled from 'styled-components';

interface IProps extends ICoordinates {
  type: 'select' | 'extraMenu' | 'context' | 'search';
  modaldimensions: {
    width: number;
    height: number;
  };
  windowdimensions: IWindowDimensions;
}

export const Modal = styled(motion.div)<IProps>`
  position: absolute;

  top: ${({
    top,
    type,
    modaldimensions: { height },
    windowdimensions: { windowHeight },
  }) => {
    if (type === 'context') {
      if (top && top > windowHeight - 10 - height) {
        return 'auto';
      }
      return `${top}px`;
    }
    return `${top}px`;
  }};

  bottom: ${({
    top,
    type,
    modaldimensions: { height },
    windowdimensions: { windowHeight },
  }) => {
    if (type === 'context') {
      if (top && top > windowHeight - 10 - height) {
        return `${windowHeight - top}px`;
      }
    }
    return `auto`;
  }};

  left: ${({
    left,
    type,
    modaldimensions: { width },
    windowdimensions: { windowWidth },
  }) => {
    if (type === 'select' || type === 'search') {
      return `${left}px`;
    }

    if (type === 'context') {
      if (left && left > windowWidth - 10 - width) {
        return 'auto';
      }
      return `${left}px`;
    }

    return 'auto';
  }};

  right: ${({
    right,
    type,
    theme,
    left,
    modaldimensions: { width },
    windowdimensions: { windowWidth },
  }) => {
    if (type === 'select') {
      return `${right}px`;
    }
    if (type === 'search') {
      return `${theme.space[4]}px`;
    }
    if (type === 'extraMenu') {
      return `${theme.space[1]}px`;
    }

    if (type === 'context') {
      if (left && left > windowWidth - 10 - width) {
        return `${windowWidth - left}px`;
      }
    }

    return `auto`;
  }};

  z-index: 100;
  padding: ${p => p.theme.space[2]}px;

  background-color: ${p => p.theme.colors.mainBackgroundColor};
  min-width: ${({ type }) => (type === 'context' ? '190px' : '150px')};
  max-width: ${({ type }) => (type === 'search' ? '300px' : '220px')};
  max-height: 100vh;
  overflow-y: scroll;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  background-clip: padding-box;
`;
