import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  height: 65px;
  background-color: #141419;
  padding: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image``;

export const CartButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
`;

export const Badge = styled.View`
  width: 20px;
  height: 20px;
  background: #7159c1;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

export const BadgeText = styled.Text`
  color: #fff;
`;
