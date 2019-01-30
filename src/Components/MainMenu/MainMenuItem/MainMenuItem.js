import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './MainMenuItem.scss';

const MainMenuItem = (
  {
    isActive,
    isSelected,
    item,
    onClick
  }
) => {
  const itemClasses = classNames('main-menu-item-container', {
    selected: isSelected,
    active: isActive
  });

  return (
    <li className={itemClasses}>
      {item.subItems && item.subItems.length ? (
        <>
          <button type="button" className="main-menu-item" onClick={onClick}>
            <div>{item.label}</div>
            <div className="main-menu-item-collapse">{isSelected || isActive ? 'open' : 'closed'}</div>
          </button>
          <ul className="sub-menu-items">
            {
              item.subItems.map((subItem, i) => (
                <li key={`subItem-${subItem.label}-${i}`}>
                  <a href={subItem.href} className="sub-menu-item" key={i}>{subItem.label}</a>
                </li>
              ))
            }
          </ul>
        </>
      ) : (
        <a href={item.href} className="main-menu-item">
          <div>{item.label}</div>
        </a>
      )}
    </li>
  );
};

MainMenuItem.defaultProps = {
  isActive: false,
  isSelected: false,
};

MainMenuItem.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired,
};

export default MainMenuItem;
