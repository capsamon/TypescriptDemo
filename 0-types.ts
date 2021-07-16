/**
 * Handige Links;
 * https://www.typescriptlang.org/docs/handbook/intro.html
 * https://www.typescriptlang.org/docs
 * https://www.typescriptlang.org/play
 */

/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const myExplicitString: string = 'true';

const myImplicitString = 1234;

const x: Array<number> = [];
const myTypedArray: Array<string | number | boolean> = ['a', 'b', 'c', 1, 2, 3, true, false];

const myUntypedArray = ['a', 'b', 'c', 1, 2, 3, true, false, new Date()];
myUntypedArray.push(new Date());

const myUntypedArrayAsConst = ['a', 'b', 'c', 1, 2, 3, true, false] as const;
myUntypedArrayAsConst.push();

const myTypedObjectOldSchool: { [key: string]: any } = {};
myTypedObjectOldSchool.something = true;

const myTypedObject: Record<string, any> = {};
myTypedObject.something = true;

const myUntypedObject = {};
myUntypedObject.somethingElse = true;

interface myInterface {
  property1: string;
  property2: number;
  property3: boolean;
}
const myTypedObjectWithInterface: myInterface = { property1: '', property2: 123, property3: true };

type myType = Record<string, any>;
const myTypedObjectWithType: myType = { testProperty: 'sure, this is valid!' };

class Test {
  readonly propertyA: number;

  constructor() {
    this.propertyA = 12;
  }

  doStuff() {
    this.propertyA = 234;
  }
}
