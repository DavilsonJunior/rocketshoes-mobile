import React from 'react';
import { connect } from 'react-redux';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Container, Logo, CartButton, Badge, BadgeText } from './styles';

const Header = ({ cart }) => {
  const navigation = useNavigation();
  const items = cart.length;
  return (
    <Container>
      <RectButton onPress={() => navigation.goBack()}>
        <Logo source={require('../../assets/images/Logo.png')} />
      </RectButton>

      <CartButton onPress={() => navigation.navigate('Cart')}>
        {items > 0 && (
          <Badge>
            <BadgeText>{items}</BadgeText>
          </Badge>
        )}

        <Icon name="shopping-cart" size={26} color="#ffffff" />
      </CartButton>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

export default connect(mapStateToProps)(Header);
