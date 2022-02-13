import React from 'react';
import renderer from 'react-test-renderer';
import Banner from './Banner.component';

const defaultProps = {
  title: 'Title',
  subtitle: 'Subtitle'
};

describe('<Banner />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Banner {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without subtitle', () => {
    const tree = renderer.create(<Banner title={defaultProps.title} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
