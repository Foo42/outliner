export function cursorStyling(isSelected) {
  const style = {};
  if (isSelected) {
    style.borderLeft = '1px solid blue';
  }
  return style;
}
