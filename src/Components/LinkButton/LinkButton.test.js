import React from 'react';
import { shallow } from 'enzyme';
import LinkButton from './LinkButton';

import Link from '../Link/Link';

describe('LinkButton', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<LinkButton href="#">hello</LinkButton>);
    }).not.toThrow();
  });

  it('renders child elements', () => {
    const children = <span>Hello, World!</span>;
    const linkButton = shallow(
      <LinkButton href="#">{children}</LinkButton>,
    );
    expect(linkButton.contains(children)).toBeTruthy();
  });

  it('id is passed into button', () => {
    const id = 'myId';
    const linkButton = shallow(
      <LinkButton href="#" id={id}>
        foo
      </LinkButton>,
    );
    expect(linkButton.find(Link).prop('id')).toBe(id);
  });

  it('disable renders <a> without a href', () => {
    const linkButton = shallow(
      <LinkButton href="#" disabled>
        test
      </LinkButton>,
    );
    expect(linkButton.find('a').prop('href')).toBeFalsy();
  });

  it('passes in class name', () => {
    const linkButton = shallow(
      <LinkButton href="#" className="my-class">
        foo
      </LinkButton>,
    );
    expect(linkButton.find(Link).prop('className')).toContain('btn');
    expect(linkButton.find(Link).prop('className')).toContain(
      'my-class',
    );
  });

  it('sets an aria-label on the button', () => {
    const label = 'This a label';
    const linkButton = shallow(
      <LinkButton href="#" accessibilityLabel={label}>
        foo
      </LinkButton>,
    );
    expect(linkButton.find(Link).prop('aria-label')).toBe(label);
  });

  describe('icon', () => {
    it('sets the correct icon', () => {
      const button = shallow(
        <LinkButton href="#" icon="add-circle">
          link button
        </LinkButton>,
      );
      expect(button.find('Icon').prop('name')).toBe('add-circle');
    });
    it('sets the correct icon size', () => {
      const button = shallow(
        <LinkButton href="#" icon="add-circle" size="large">
          link button
        </LinkButton>,
      );
      expect(button.find('Icon').prop('size')).toBe(20);
    });
    it('it places icon to left of button text by default', () => {
      const button = shallow(
        <LinkButton href="#" icon="add-circle">
          link button
        </LinkButton>,
      );
      expect(
        button
          .find('.btn-content')
          .children()
          .first()
          .prop('className'),
      ).toContain('btn-icon');
    });
    it('positions the icon on the right side', () => {
      const button = shallow(
        <LinkButton href="#" icon="add-circle" iconAfterText>
          link button
        </LinkButton>,
      );
      expect(
        button
          .find('.btn-content')
          .children()
          .last()
          .prop('className'),
      ).toContain('btn-icon');
    });
  });
});
