import styled from 'styled-components';
import {
  typography,
  color,
  space,
  layout,
  flexbox,
  grid,
  position,
  justifyContent,
  alignItems,
  PositionProps,
  DisplayProps,
  ColorProps,
  SpaceProps,
  FlexProps,
  JustifyContentProps,
  LayoutProps,
  GridProps,
  TypographyProps,
  AlignItemsProps,
} from 'styled-system';

type BoxProps = ColorProps &
  SpaceProps &
  DisplayProps &
  FlexProps &
  JustifyContentProps &
  LayoutProps &
  GridProps &
  TypographyProps &
  PositionProps &
  AlignItemsProps;

export const Box = styled.div<BoxProps>(
  typography,
  color,
  space,
  layout,
  flexbox,
  grid,
  position,
  justifyContent,
  alignItems,
);
