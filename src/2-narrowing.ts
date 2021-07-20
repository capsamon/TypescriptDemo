export function example(x: string | number, y: string | boolean) {
  // If they match, they're the same in value and type..
  // Because the params are typed, it narrows down all the possibilities
  if (typeof y === "string" && typeof x === "number") {
    
    
    // What type are x and y when they are in here?


    console.log(x, y);
    y.charAt(2);
  } else{
    console.log(x, y);
    
    //Will this work?
    // y.charAt(2);
  }
}
