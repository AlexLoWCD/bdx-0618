/* eslint no-undef: 0 */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Article from '../components/Article';

configure({ adapter: new Adapter() });

test('Article with stock', () => {
  const article = {
    img: 'images/bananes.png',
    name: 'Bananes',
    price: 1.50,
    qty: 3,
  };
  const wrapper = shallow(<Article article={article} ajoutArticle={() => { }} />);
  expect(wrapper.find('.info').length).toEqual(2);
  expect(wrapper.find('.info').at(0).text()).toEqual('Bananes');
  expect(wrapper.find('.info').at(1).text()).toEqual('1.5€');
  expect(wrapper.find('.btn.btn-add').text()).toEqual('Ajouter');
});

test('Article without stock', () => {
  const article = {
    img: 'images/bananes.png',
    name: 'Pommes',
    price: 2,
    qty: 2,
  };
  const wrapper = shallow(<Article article={article} ajoutArticle={() => { }} outOfStock />);
  expect(wrapper.find('.info').length).toEqual(2);
  expect(wrapper.find('.info').at(0).text()).toEqual('Pommes');
  expect(wrapper.find('.info').at(1).text()).toEqual('2€');
  expect(wrapper.find('.btn').text()).toEqual('No stock');
});

test('Article on click send article', () => {
  const article = {
    img: 'images/bananes.png',
    name: 'Pommes',
    price: 2,
    qty: 2,
  };
  const ajoutArticle = jest.fn();
  const wrapper = shallow(<Article article={article} ajoutArticle={ajoutArticle} />);
  const buttonAdd = wrapper.find('.btn');
  expect(buttonAdd.text()).toEqual('Ajouter');
  buttonAdd.simulate('click');
  expect(ajoutArticle.mock.calls.length).toBe(1);
  expect(ajoutArticle.mock.calls[0][0]).toEqual(article);
});
