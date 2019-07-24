export default borderStyle => {
  let styles = {};
  const borderWidth = borderStyle.width || '1px';
  const style = borderStyle.style || 'solid';
  const side =
    typeof borderStyle === 'string'
      ? borderStyle
      : borderStyle.side || 'all';

  if (
    side === 'top' ||
    side === 'bottom' ||
    side === 'left' ||
    side === 'right'
  ) {
    const cssSide = side.charAt(0).toUpperCase() + side.slice(1);
    styles = {
      [`border${cssSide}Width`]: borderWidth,
      [`border${cssSide}Style`]: style,
    };
  } else if (side === 'vertical') {
    styles = {
      borderLeftWidth: borderWidth,
      borderLeftStyle: style,
      borderRightWidth: borderWidth,
      borderRightStyle: style,
    };
  } else if (side === 'horizontal') {
    styles = {
      borderTopWidth: borderWidth,
      borderTopStyle: style,
      borderBottomWidth: borderWidth,
      borderBottomStyle: style,
    };
  } else {
    styles = {
      borderStyle: style,
      borderWidth,
    };
  }
  return styles;
};
