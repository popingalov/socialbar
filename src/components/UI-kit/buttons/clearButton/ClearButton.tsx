import { forwardRef } from 'react';
import { Wrapper } from './ClearButton.styled';

interface IProps {
  children: JSX.Element;
  type?: 'button' | 'submit' | 'reset';
  onClick: any;
}

export type Ref = HTMLButtonElement;

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

// export const PopUp = forwardRef<Ref, IProps>(({ children }, ref) => {
//   console.log('ref', ref);
//   return (
//     <Overlay modalType="popUp">
//       <Modal key="popUp" {...popUpMenuAnimation} transition={{ duration: 0.2 }}>
//         {children}
//       </Modal>
//     </Overlay>
//   );
// });

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
