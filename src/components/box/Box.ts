import styled from 'styled-components';
import {
  typography,
  color,
  space,
  layout,
  flexbox,
  grid,
  DisplayProps,
  ColorProps,
  SpaceProps,
  FlexProps,
  JustifyContentProps,
  LayoutProps,
  GridProps,
  TypographyProps,
} from 'styled-system';

type BoxProps = ColorProps &
  SpaceProps &
  DisplayProps &
  FlexProps &
  JustifyContentProps &
  LayoutProps &
  GridProps &
  TypographyProps;

export const Box = styled.div<BoxProps>(
  typography,
  color,
  space,
  layout,
  flexbox,
  grid,
);
