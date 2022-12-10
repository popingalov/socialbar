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
} from 'styled-system';

type BoxProps = ColorProps &
  SpaceProps &
  DisplayProps &
  FlexProps &
  JustifyContentProps;

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
