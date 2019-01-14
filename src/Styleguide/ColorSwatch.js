import React from 'react';
import PropTypes from 'prop-types';

export default class ColorSwatch extends React.PureComponent {
  render() {
    const {
      name,
      value,
      width,
      height
    } = this.props;
    return (
      <div style={{ display: 'inline-block' }}>
        <div
          style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: value,
            display: 'inline-block'
          }}
        />
        <div>{name}</div>
        <div>{value}</div>
      </div>
    );
  }
}

ColorSwatch.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

ColorSwatch.defaultProps = {
  width: 200,
  height: 100
};
