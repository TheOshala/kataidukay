import React from 'react';
import {shallow} from 'enzyme';
import Kata from '../Kata';

describe('Kata', () => {
  let component;
  let props;
  let instance;

  const render = () => {
    component = shallow(<Kata {...props} />);
    instance = component.instance();
  };
  
  beforeEach(() => {
    render();
  });
  
  describe('on instance', () => {
    it('should defined default states and props', () => {
      instance.generateArray(4, 3);

      expect(instance.state.printerArray).toEqual([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10, 11, 12]
      ]);
    });
  });
});

