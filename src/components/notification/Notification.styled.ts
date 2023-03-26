import styled from 'styled-components';
export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.backdropNotificationColor};
  z-index: 4;
`;
export const ContainerNotificatio = styled.div`
  padding: ${({ theme }) => theme.space[3]}px;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  z-index: 5;
  position: absolute;
  top: 60px;
  left: 5%;
  background: ${({ theme }) => theme.colors.modal};
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 7px rgb(0 0 0 / 30%);
  border-radius: 4px;
  overflow: hidden;
`;
export const TextMessage = styled.p`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.secondaryText};
`;
export const NotificationButton = styled.button`
  display: flex;
  text-align: center;
  border: none;
  border-radius: 4px;
  padding: ${({ theme }) => theme.space[2]}px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-family: inherit;
  color: ${({ theme }) => theme.colors.lightText};
  background: ${({ theme }) => theme.colors.accent};
  margin-top: ${({ theme }) => theme.space[3]}px;
  text-transform: uppercase;
  :hover {
    background: ${({ theme }) => theme.colors.accentBackgroundColor};
  }

  cursor: pointer;
  :not(:last-child) {
    margin-right: ${({ theme }) => theme.space[2]}px;
  }
`;
