export function functionWithAny(a: any) {
  a.b(); //This will accept 'everything'
}
export function functionWithUnknown(a: unknown) {
  a.b(); //This will accept 'nothing'
}

// Example when to use unknown
function parseJsonString(json: string): unknown {
  return JSON.parse(json);
}
const json = parseJsonString("{a: 'json string'}");
// Json is unknown. We have to check if it is valid first!
if (!checkJson(json)) {
  throw new Error('Not the JSON we expect!');
}
// Now it is properly typed!
console.log(json.a);

function checkJson(json: unknown): json is { a: string } {
  return (json as any)?.a;
}
