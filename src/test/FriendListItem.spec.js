import React from 'react';
import FriendListItem from '../components/FriendListItem';

describe('<FriendListItem />', () => {
  const wrapper = shallow(<FriendListItem/>);

  it('The returned parent element should be an li', () => {
    expect(wrapper.type()).to.eql('li');
  });

  it('Given a name as a props it renders the proper value', () => {
    wrapper.setProps({ name: 'Xavi' });
    expect(wrapper.find('#name').text()).to.equal('Xavi');
  });

});