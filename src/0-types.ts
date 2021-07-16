/**
 * Handige Links;
 * https://www.typescriptlang.org/docs/handbook/intro.html
 * https://www.typescriptlang.org/docs
 * https://www.typescriptlang.org/play
 */

/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-inferrable-types


//Explicit variables
const myExplicitString: string = 'true';
const myImplicitString = 1234;

//Explicit array values
const x: Array<number> = [];
const myTypedArray: Array<string | number | boolean> = ['a', 'b', 'c', 1, 2, 3, true, false];

//Implicit array values
const myUntypedArray = ['a', 'b', 'c', 1, 2, 3, true, false, new Date()];
myUntypedArray.push(new Date());

//Read only arrays
const myUntypedArrayAsConst = ['a', 'b', 'c', 1, 2, 3, true, false] as const;
myUntypedArrayAsConst.push();

//Typing keys/values
const myTypedObjectOldSchool: { [key: string]: any } = {};
myTypedObjectOldSchool.something = true;

//Using Record
const myTypedObject: Record<string, any> = {};
myTypedObject.something = true;

//Implicit object typing 
const myUntypedObject = {};
myUntypedObject.somethingElse = true;

//Interface example
interface myInterface {
  property1: string;
  property2: number;
  property3: boolean;
}
const myTypedObjectWithInterface: myInterface = { property1: '', property2: 123, property3: true };

//Type example
type myType = Record<string, any>;
const myTypedObjectWithType: myType = { testProperty: 'sure, this is valid!' };

//Class readonly example
class Test {
  readonly propertyA: number;

  constructor() {
    this.propertyA = 12;
  }

  doStuff() {
    this.propertyA = 234;
  }
}
