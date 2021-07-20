function padLeft(value: string, padding: any) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${typeof padding}'.`);
}

//Returns "    Hello world"
padLeft("Hello world", 4);

//Returns "Hello world test"
padLeft2("Hello world", " test");

//Throws an error at runtime! But TS is okay with it..
padLeft("Hello world", true);


//Better would be to use a union type
function padLeft2(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${typeof padding}'.`);
}

padLeft2("Hello world", 4);
padLeft2("Hello world", " test");
// padLeft2("Hello world", true);