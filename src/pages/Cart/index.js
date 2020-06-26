import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconCircle from 'react-native-vector-icons/Feather';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import {
  Container,
  Product,
  ProductItem,
  ProductItemShow,
  ProductImage,
  ProductDescription,
  ProductTitle,
  ProductPrice,
  ProductTotal,
  ProductAmount,
  ProductAmountText,
  ProductTotalText,
  Total,
  TotalTitle,
  TotalPrice,
  DoneButton,
  DoneButtonText,
  IconButton,
} from './styles';

import Header from '../../components/Header';

function Cart({ cart, total, removeFromCart, updateAmount }) {
  function handleRemoveItem(id) {
    removeFromCart(id);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  return (
    <Container>
      <Header />
      <Product>
        {cart.map((product) => (
          <ProductItem key={String(product.id)}>
            <ProductItemShow>
              <ProductImage
                resizeMode="contain"
                source={{
                  uri: product.image,
                }}
              />
              <ProductDescription>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.priceFormatted}</ProductPrice>
              </ProductDescription>
            </ProductItemShow>
            <ProductTotal>
              <IconButton onPress={() => handleRemoveItem(product.id)}>
                <Icon name="trash" size={20} color="#1c1c1c" />
              </IconButton>
              <IconButton onPress={() => decrement(product)}>
                <IconCircle name="minus-circle" size={20} color="#1c1c1c" />
              </IconButton>
              <ProductAmount>
                <ProductAmountText>{product.amount}</ProductAmountText>
              </ProductAmount>
              <IconButton onPress={() => increment(product)}>
                <IconCircle name="plus-circle" size={20} color="#1c1c1c" />
              </IconButton>
              <ProductTotalText>{product.subtotal}</ProductTotalText>
            </ProductTotal>
          </ProductItem>
        ))}

        <Total>
          <TotalTitle>TOTAL</TotalTitle>
          <TotalPrice>{total}</TotalPrice>
        </Total>
        <DoneButton>
          <DoneButtonText>FINALIZAR PEDIDO</DoneButtonText>
        </DoneButton>
      </Product>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
