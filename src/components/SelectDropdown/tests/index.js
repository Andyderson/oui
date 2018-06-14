import React from 'react';
import { mount } from 'enzyme';

import SelectDropdown from '../index';

describe('components/SelectDropdown', function() {
  let component;
  let onChange;
  const items = [
    {
      label: 'label 1',
      value: 'value 1',
      description: 'description 1',
    },
    {
      label: 'label 2',
      value: 'value 2',
      description: 'description 2',
    },
  ];

  beforeEach(function() {
    onChange = jest.fn();
  });

  describe('without a filter', function() {
    beforeEach(function() {
      component = mount(<SelectDropdown isFilterable={ false } items={ items } value={ 'value 2' } onChange={ onChange } />);
    })

    it('should render all items in dropdown', function() {
      const activator = component.find('Button');
      activator.simulate('click');
      const listItems = component.find('SelectOption');
      expect(listItems).toHaveLength(2);

      const item1 = listItems.at(0);
      expect(item1.text()).toContain('label 1');
      expect(item1.text()).toContain('description 1');
      expect(item1.props().isSelected).toEqual(false);

      const item2 = listItems.at(1);
      expect(item2.text()).toContain('label 2');
      expect(item2.text()).toContain('description 2');
      expect(item2.props().isSelected).toEqual(true);
    });

    it('should call onChange when another item is selected', function() {
      const activator = component.find('Button');
      activator.simulate('click');
      const listItems = component.find('DropdownBlockLink');
      const item1 = listItems.at(0).find('[data-test-section="dropdown-block-link-value 1"]');
      item1.simulate('click');
      expect(onChange).toHaveBeenCalled();
      expect(onChange).toHaveBeenCalledWith('value 1');
    });

    it('should not add an input if isFilterable is false', function() {
      const activator = component.find('Button');
      activator.simulate('click');
      const input = component.find('Input');
      expect(input).toHaveLength(0);
    })
  })

  describe('with a filter', function() {
    beforeEach(function() {
      component = mount(<SelectDropdown isFilterable={ true } items={ items } value={ 'value 2' } onChange={ onChange } />);
    })
    it('should filter items in dropdown', function() {
      const activator = component.find('Button');
      activator.simulate('click');
      const input = component.find('Input');
      input.simulate('change', {target: {value: '1'}});

      const listItems = component.find('SelectOption');
      expect(listItems).toHaveLength(1);

      const item1 = listItems.at(0);
      expect(item1.text()).toContain('label 1');
      expect(item1.text()).toContain('description 1');

      input.simulate('change', {target: {value: 'INVALID_VALUE'}});
      expect(component.find('SelectOption')).toHaveLength(0);
    });
  })
});
