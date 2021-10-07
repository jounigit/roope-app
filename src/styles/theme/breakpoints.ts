export const size = {
  xs: '320px',
  sm: '768px',
  lg: '1024px',
  xl: '1200px',
};
export const device = {
  mobile: `(min-width: ${size.xs})`,
  tablet: `(min-width: ${size.sm})`,
  labtop: `(min-width: ${size.lg})`,
  desktop: `(min-width: ${size.xl})`,
};
export default { size, device };
