import React from 'react';
import PropTypes from 'prop-types';

const copyToClipboard = (str) => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

const ColorSwatch = ({
  name,
  value,
  width = 200,
  height = 100
}) => (
  <div style={{
    display: 'inline-block',
    marginBottom: '32px'
  }}
  >
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: value,
        display: 'inline-block'
      }}
    />
    <div title="click to copy" onClick={() => { copyToClipboard(name); }} style={{ fontWeight: 600 }}>{name}</div>
    <div title="click to copy" onClick={() => { copyToClipboard(value); }}>{value}</div>
  </div>
);

ColorSwatch.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
};

export default ColorSwatch;
