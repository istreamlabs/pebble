// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'str' implicitly has an 'any' type.
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
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        backgroundColor: value,
        display: 'inline-block'
      }}
    />
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    <div title="click to copy" onClick={() => { copyToClipboard(name); }} style={{ fontWeight: 600 }}>{name}</div>
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    <div title="click to copy" onClick={() => { copyToClipboard(value); }}>{value}</div>
  </div>
);

ColorSwatch.propTypes = {
  name: PropTypes.string,
  // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  value: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
};

export default ColorSwatch;
