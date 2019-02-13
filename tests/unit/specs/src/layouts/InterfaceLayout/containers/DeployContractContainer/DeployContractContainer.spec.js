import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import DeployContractContainer from '@/layouts/InterfaceLayout/containers/DeployContractContainer/DeployContractContainer.vue';
import PopOver from '@/components/PopOver/PopOver.vue';
import BackButton from '@/layouts/InterfaceLayout/components/BackButton/BackButton.vue';

import { Tooling } from '@@/helpers';

describe('DeployContractContainer.vue', () => {
  let localVue, i18n, wrapper, store;
  const resetView = jest.fn();

  beforeAll(() => {
    const baseSetup = Tooling.createLocalVueInstance();
    localVue = baseSetup.localVue;
    i18n = baseSetup.i18n;
    store = baseSetup.store;
    Vue.config.warnHandler = () => {};
    Vue.config.errorHandler = () => {};
  });

  beforeEach(() => {
    wrapper = shallowMount(DeployContractContainer, {
      localVue,
      i18n,
      store,
      attachToDocument: true,
      stubs: {
        'back-button': BackButton,
        popover: PopOver
      },
      propsData: {
        resetView: resetView
      }
    });
  });

  it('should render correct abi data', () => {
    console.log(wrapper.vm.$data);
  });
});
