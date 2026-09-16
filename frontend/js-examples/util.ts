export function sum(a: number, ...b: number[]): number {
  let sum = a;
  b.forEach((item) => (sum = sum + item));
  return sum;
}
export function sub(a: number, b: number): number {
  return a - b;
}
function div(a: number, b: number): number {
  return a / b;
}
export default div;
// in hello.ts -> import div, {sum, sub} [or] import test {sum,sub}
