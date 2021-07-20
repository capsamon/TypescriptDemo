interface myInterface {
  property1: string;
  property2: number;
  property3: boolean;
}

export function readInformationBadly(properties: myInterface): void { //Why is this bad?
  console.log(properties.property1); 
}

export function readInformationWithInlineType(property1: string): void {
  console.log(property1);
}

export function readInformationAndCallBackToGivenFunction(
  properties: myInterface,
  callback: (value: string) => void,
): void {
  callback(properties.property1); // What if I change this to property2?
}
