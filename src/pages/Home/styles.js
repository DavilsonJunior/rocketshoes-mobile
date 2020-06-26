import styled from 'styled-components/native';
import { darken } from 'polished';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.dark};
  flex-direction: row;
  padding: 20px 0px;
`;

export const Product = styled.View`
  width: 220px;
  height: 358px;
  background: #fff;
  border-radius: 6px;
  padding: 15px;
  margin-right: 20px;
`;
export const ProductImage = styled.Image`
  width: 100%;
  height: 180px;
`;
export const ProductTitle = styled.Text`
  margin-top: 20px;
  color: #333;
  font-size: 16px;
  line-height: 18px;
`;
export const ProductPrice = styled.Text`
  color: #333;
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0px;
`;
export const ProductAddButton = styled(RectButton)`
  width: 100%;
  height: 42px;
  flex-direction: row;
  align-items: center;
  background: ${colors.primary};
  border-radius: 8px;
`;

export const ProductAmount = styled.View`
  flex: 1;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background: ${darken(0.1, colors.primary)};
`;

export const ProductAmountText = styled.Text`
  font-size: 14px;
  color: #fff;
  padding: 10px;
`;

export const ProductAddButtonText = styled.Text`
  flex: 3;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export const ProductContainer = styled.View`
  margin-top: auto;
`;
