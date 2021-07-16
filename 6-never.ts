export function doSomething(value: string | number) {
  if (typeof value === 'string') {
    // do something
    value.includes('string');
  } else if (typeof value === 'number') {
    // do something else
    value.toExponential(2);
  } else {
    value; // has type 'never'!
    // This should 'never' happen!
  }
}
