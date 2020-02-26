export type Direction =
  | 'nne'
  | 'ne'
  | 'ene'
  | 'e'
  | 'ese'
  | 'se'
  | 'sse'
  | 's'
  | 'ssw'
  | 'sw'
  | 'wsw'
  | 'w'
  | 'wnw'
  | 'nw'
  | 'nnw'
  | 'n';

const windDirection = (deg: number = 0): Direction => {
  if (deg > 11.25 && deg < 33.75) {
    return 'nne';
  }
  if (deg > 33.75 && deg < 56.25) {
    return 'ne';
  }
  if (deg > 56.25 && deg < 78.75) {
    return 'ene';
  }
  if (deg > 78.75 && deg < 101.25) {
    return 'e';
  }
  if (deg > 101.25 && deg < 123.75) {
    return 'ese';
  }
  if (deg > 123.75 && deg < 146.25) {
    return 'se';
  }
  if (deg > 146.25 && deg < 168.75) {
    return 'sse';
  }
  if (deg > 168.75 && deg < 191.25) {
    return 's';
  }
  if (deg > 191.25 && deg < 213.75) {
    return 'ssw';
  }
  if (deg > 213.75 && deg < 236.25) {
    return 'sw';
  }
  if (deg > 236.25 && deg < 258.75) {
    return 'wsw';
  }
  if (deg > 258.75 && deg < 281.25) {
    return 'w';
  }
  if (deg > 281.25 && deg < 303.75) {
    return 'wnw';
  }
  if (deg > 303.75 && deg < 326.25) {
    return 'nw';
  }
  if (deg > 326.25 && deg < 348.75) {
    return 'nnw';
  }
  return 'n';
};

export default windDirection;
