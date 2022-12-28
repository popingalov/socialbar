import { forwardRef } from 'react';
import { Wrapper } from './ClearButton.styled';

interface IProps {
  children: JSX.Element;
  type?: 'button' | 'submit' | 'reset';
  onClick: any;
}

type Ref = HTMLButtonElement;

const ClearButton = forwardRef<Ref, IProps>(
  ({ children, onClick, type = 'button', ...allyProps }, ref) => {
    return (
      <Wrapper ref={ref} type={type} onClick={onClick} {...allyProps}>
        {children}
      </Wrapper>
    );
  },
);

export default ClearButton;

// const ClearButton: React.FC<IProps> = ({
//   children,
//   onClick,
//   type = 'button',
//   ref,
//   ...allyProps
// }) => (
// <Wrapper ref={ref} type={type} onClick={onClick} {...allyProps}>
//   {children}
// </Wrapper>
// );
