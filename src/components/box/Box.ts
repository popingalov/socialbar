import styled from 'styled-components';
import {
  typography,
  color,
  space,
  layout,
  shadow,
  border,
  flexbox,
  grid,
  DisplayProps,
  ColorProps,
  SpaceProps,
  FlexProps,
  JustifyContentProps,
  LayoutProps,
  ShadowProps,
  GridProps,
  TypographyProps,
  BorderProps,
} from 'styled-system';

type BoxProps = ColorProps &
  SpaceProps &
  DisplayProps &
  FlexProps &
  JustifyContentProps &
  LayoutProps &
  ShadowProps &
  GridProps &
  TypographyProps &
  BorderProps;

export const Box = styled.div<BoxProps>(
  typography,
  color,
  space,
  layout,
  shadow,
  border,
  flexbox,
  grid,
);
