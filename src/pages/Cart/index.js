import React, { Component } from 'react';
import { connect } from 'react-redux';

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
} from './styles';

import Header from '../../components/Header';

class Cart extends Component {
  state = {
    teste: [],
  };

  render() {
    const { cart } = this.props;
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
                  <ProductPrice>{product.price}</ProductPrice>
                </ProductDescription>
              </ProductItemShow>
              <ProductTotal>
                <ProductAmount>
                  <ProductAmountText>{product.amount}</ProductAmountText>
                </ProductAmount>
                <ProductTotalText>R${product.total}</ProductTotalText>
              </ProductTotal>
            </ProductItem>
          ))}

          <Total>
            <TotalTitle>TOTAL</TotalTitle>
            <TotalPrice>R$1619,10</TotalPrice>
          </Total>
          <DoneButton>
            <DoneButtonText>FINALIZAR PEDIDO</DoneButtonText>
          </DoneButton>
        </Product>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

export default connect(mapStateToProps)(Cart);
