/* eslint no-undef: 0 */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import ArticlePanier from '../components/ArticlePanier';

configure({ adapter: new Adapter() });

test('ArticlePanier', () => {
  const article = {
    name: 'Bananes',
    unitPrice: 1.50,
    qty: 2,
  };
  const wrapper = shallow(<ArticlePanier article={article} />);
  expect(wrapper.find('.row').length).toEqual(3);
  expect(wrapper.find('.row').at(0).text()).toEqual('Désignation : Bananes');
  expect(wrapper.find('.row').at(1).text()).toEqual('Quantité : 2');
  expect(wrapper.find('.row').at(2).text()).toEqual('Total : 3.00€');
});
