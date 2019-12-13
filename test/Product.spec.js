import { mount } from '@vue/test-utils';
import Products from '../src/Components/AddProducts/Products.vue';

const wrapper = mount(Products);

describe('Products test', () => {
  it('Component name mount', () => {
    console.log(wrapper.vm.$data);    
    const input = wrapper.find('input');
    input.element.value = 'Test';
    input.trigger('input');
    
    expect(wrapper.vm.$data.product.empresa).toBe('Test');   
  })
});