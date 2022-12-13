import styled from 'styled-components';
import {
  typography,
  color,
  space,
  layout,
  flexbox,
  grid,
  border,
  shadow,
  position,
  ColorProps,
  SpaceProps,
  FlexboxProps,
  LayoutProps,
  GridProps,
  TypographyProps,
  BorderProps,
  ShadowProps,
  PositionProps,
} from 'styled-system';

// type BoxProps = ColorProps &
//   SpaceProps &
//   DisplayProps &
//   FlexProps &
//   JustifyContentProps &
//   LayoutProps &
//   GridProps &
//   TypographyProps &
//   PositionProps &
//   AlignItemsProps;

interface BoxProps
  extends SpaceProps,
    TypographyProps,
    ColorProps,
    LayoutProps,
    ShadowProps,
    BorderProps,
    FlexboxProps,
    GridProps,
    PositionProps {}

export const Box = styled.div<BoxProps>(
  typography,
  color,
  space,
  layout,
  flexbox,
  grid,
  position,
  border,
  shadow,
);
