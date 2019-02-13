import DropDownAddressSelector from '@/components/DropDownAddressSelector/DropDownAddressSelector.vue';
import { shallowMount } from '@vue/test-utils';
import { Tooling } from '@@/helpers';
import Vue from 'vue';

describe('DropDownAddressSelector.vue', () => {
  let localVue, i18n, wrapper, store;

  beforeAll(() => {
    const baseSetup = Tooling.createLocalVueInstance();
    localVue = baseSetup.localVue;
    i18n = baseSetup.i18n;
    store = baseSetup.store;
    Vue.config.warnHandler = () => {};
    Vue.config.errorHandler = () => {};
  });

  beforeEach(() => {
    wrapper = shallowMount(DropDownAddressSelector, {
      localVue,
      i18n,
      store,
      attachToDocument: true
    });
  });

  it('render correct addresses', () => {
    // const wrapper = shallowMount(DropDownAddressSelector);
    const dropdownOpen = wrapper.find('.dropdown-open-button');
    dropdownOpen.trigger('click');
    expect(wrapper.vm.$data.dropdownOpen).toBe(true);
    const addressElements = wrapper.vm.$el.querySelectorAll(
      '.dropdown-list-box .listed-address'
    );
    for (let i = 0; i < addressElements.length; i++) {
      const addressElement = addressElements[i];

      const address = wrapper.vm.$data.addresses[i];

      const front = address.slice(0, 15);
      const end = address.slice(-4);

      expect(addressElement.textContent.trim()).toEqual(front + '...' + end);
    }
  });

  describe('DropDownAddressSelector.vue Methods', () => {
    it('validate address when dropdown is selected', () => {
      // const wrapper = shallowMount(DropDownAddressSelector);
      const dropdownOpen = wrapper.find('.dropdown-open-button');
      dropdownOpen.trigger('click');
      expect(wrapper.vm.$data.validAddress).toBe(false);
      expect(wrapper.vm.$data.dropdownOpen).toBe(true);
      const dropdown = wrapper.find('li');
      dropdown.trigger('click');
      expect(
        wrapper.vm.$el.querySelector('div div input').value.trim()
      ).toEqual('0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D');
      expect(wrapper.vm.$data.dropdownOpen).toBe(false);
      expect(wrapper.vm.$data.validAddress).toBe(true);
    });
  });
});
