import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMuck from '../../__mocks__/providerMuck';
import ProductMock from '../../__mocks__/productMock';
import Product from '../../components/Product';

describe('<Product />', () => {
  test('Render del componente Product', () => {
    const product = shallow(
      <ProviderMuck>
        <Product />
      </ProviderMuck>,
    );
    expect(product.length).toEqual(1);
  });
  test('Comprobar el boton de comprar', () => {
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProviderMuck>
        <Product
          product={ProductMock}
          handleAddToCart={handleAddToCart}
        />
      </ProviderMuck>,
    );
    wrapper.find('button').simulate('click');

    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
