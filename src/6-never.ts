export function doSomething(value: string | number) {
  if (typeof value === 'string') {
    //Do something
    value.includes('string');
  } else if (typeof value === 'number') {
    //Do something else
    value.toExponential(2);
  } else {
    value; //Has type 'never'!
    //This should 'never' happen!
  }
}