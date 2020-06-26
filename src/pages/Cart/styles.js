import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.dark};
`;

export const Product = styled.View`
  margin: 20px;
  border-radius: 6px;
  background: ${colors.backgroundItem};
  padding: 20px;
`;

export const ProductItem = styled.View``;
export const ProductItemShow = styled.View`
  flex-direction: row;
`;
export const ProductImage = styled.Image`
  flex: 1;
  width: 120px;
  height: 120px;
  margin-right: 20px;
`;
export const ProductDescription = styled.View`
  flex: 2;
  justify-content: center;
`;
export const ProductTitle = styled.Text`
  color: #333;
  font-size: 14px;
  width: 160px;
`;
export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
export const ProductTotal = styled.View`
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  background: #eee;
  align-items: center;
  border-radius: 6px;
  padding: 20px;
`;
export const ProductAmount = styled.View`
  flex-direction: row;
  width: 51px;
  height: 26px;
  background: #fff;
  justify-content: flex-start;
  align-items: center;
  padding: 3px 10px;
  border-radius: 4px;
`;
export const ProductAmountText = styled.Text`
  font-size: 14px;
`;
export const ProductTotalText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
export const Total = styled.View`
  margin: 20px auto;
`;
export const TotalTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #999;
  text-align: center;
`;
export const TotalPrice = styled.Text`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;
export const DoneButton = styled(RectButton)`
  height: 42px;
  background: ${colors.primary};
  justify-content: center;
  align-items: center;
`;
export const DoneButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

export const IconButton = styled(RectButton)`
  width: 22px;
  height: 22px;
`;
