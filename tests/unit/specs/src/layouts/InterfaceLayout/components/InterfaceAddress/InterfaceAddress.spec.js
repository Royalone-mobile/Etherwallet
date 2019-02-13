import { shallowMount } from '@vue/test-utils';
import InterfaceAddress from '@/layouts/InterfaceLayout/components/InterfaceAddress/InterfaceAddress.vue';
import { Tooling } from '@@/helpers';

describe('InterfaceAddress.vue', () => {
  let localVue, i18n, wrapper, store;
  const address = 'InterfaceAddress address';
  beforeAll(() => {
    const baseSetup = Tooling.createLocalVueInstance();
    localVue = baseSetup.localVue;
    i18n = baseSetup.i18n;
    store = baseSetup.store;
  });

  beforeEach(() => {
    wrapper = shallowMount(InterfaceAddress, {
      localVue,
      i18n,
      store,
      attachToDocument: true,
      propsData: {
        address: address
      }
    });
  });

  it('should render correct address props', () => {
    expect(
      wrapper.vm.$el
        .querySelector('.information-container p.address')
        .textContent.trim()
    ).toEqual(address);
  });

  it('should render correct hasMultipleAddr data', () => {
    expect(wrapper.vm.$data.hasMultipleAddr).toBe(true);
  });

  describe('InterfaceAddress.vue Methods', () => {});
});
