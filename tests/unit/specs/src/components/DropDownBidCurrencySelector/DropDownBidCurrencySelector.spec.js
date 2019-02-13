import DropDownBidCurrencySelector from '@/components/DropDownBidCurrencySelector/DropDownBidCurrencySelector.vue';
import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import { Tooling } from '@@/helpers';

describe('DropDownBidCurrencySelector.vue', () => {
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
    wrapper = shallowMount(DropDownBidCurrencySelector, {
      localVue,
      i18n,
      store,
      attachToDocument: true
    });
  });

  it('should render correct options data', () => {
    const options = {
      title: 'options'
    };
    wrapper.setProps({ options });
    expect(
      wrapper.vm.$el
        .querySelector(
          '.drop-down-bid-currency-selector .form-title-container .title'
        )
        .textContent.trim()
    ).toEqual(options.title);
  });

  describe('DropDownBidCurrencySelector.vue methods', () => {
    it('should render correct openDropdownFocustToSearchInput', () => {
      wrapper.vm.openDropdownFocustToSearchInput();
      expect(wrapper.vm.$data.dropdownOpen).toBe(true);
      wrapper.vm.openDropdownFocustToSearchInput();
      expect(wrapper.vm.$data.dropdownOpen).toBe(false);
    });

    xit('should trigger openDropdownFocustToSearchInput method when button clicked', () => {
      wrapper.find('.dropdown-input-box').trigger('click');
      expect(wrapper.vm.$data.dropdownOpen).toBe(true);
      wrapper.find('.dropdown-input-box').trigger('click');
      expect(wrapper.vm.$data.dropdownOpen).toBe(false);
    });
  });
});
