import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import OpenLayersSearchMap from './OpenLayersSearchMap';

describe('<OpenLayersSearchMap />', () => {
  it('renders without crashing', () => {
    expect(shallow(<OpenLayersSearchMap />).length).toEqual(1);
  });
});
