import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductAddButton,
  ProductAmount,
  ProductAmountText,
  ProductAddButtonText,
  ProductContainer,
} from './styles';

// import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import json from '../../../server.json';

import Header from '../../components/Header';

class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    try {
      const response = json.products;

      const data = response.map((product) => ({
        ...product,
        // priceFormatted: formatPrice(product.price),
      }));

      this.setState({ products: data });
      console.tron.log(products);
    } catch (err) {
      console.tron.log(err);
    }
  };

  handleAddProduct = (product) => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  renderProduct = ({ item }) => {
    return (
      <Product key={item.id}>
        <ProductImage
          resizeMode="contain"
          source={{
            uri: item.image,
          }}
        />
        <ProductContainer>
          <ProductTitle>{item.title}</ProductTitle>
          <ProductPrice>{item.price}</ProductPrice>
          <ProductAddButton onPress={() => this.handleAddProduct(item)}>
            <ProductAmount>
              <ProductAmountText>2</ProductAmountText>
            </ProductAmount>
            <ProductAddButtonText>ADICIONAR</ProductAddButtonText>
          </ProductAddButton>
        </ProductContainer>
      </Product>
    );
  };

  render() {
    const { navigation } = this.props;
    const { products } = this.state;
    return (
      <>
        <Header navigation={navigation} />
        <Container>
          <FlatList
            style={{ paddingStart: 30 }}
            horizontal
            data={products}
            keyExtractor={(item) => String(item.id)}
            renderItem={this.renderProduct}
          />
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
