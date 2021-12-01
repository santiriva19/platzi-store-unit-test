import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMuck from '../../__mocks__/providerMuck';
import Header from '../../components/Header';

describe('<Header />', () => {
  test('Render del componente Header', () => {
    const header = shallow(
      <ProviderMuck>
        <Header />
      </ProviderMuck>,
    );
    expect(header.length).toEqual(1);
  });
  test('Render del título', () => {
    const header = mount(
      <ProviderMuck>
        <Header />
      </ProviderMuck>,
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});
describe('Header Snapshot', () => {
  test('Comprobar la UI del componente Header', () => {
    const header = create(
      <ProviderMuck>
        <Header />
      </ProviderMuck>,
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
