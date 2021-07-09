export function functionWithAny(a: any) {
  a.b(); // OK
}
export function functionWithUnknown(a: unknown) {
  a.b();
}

// voorbeeld wanneer unknown handig kan zijn;
function parseJsonString(json: string): unknown {
  return JSON.parse(json);
}
const json = parseJsonString("{a: 'json string'}");
// json is unknown. We have to check if it is valid first!
if (!checkJson(json)) {
  throw new Error('Not the JSON we expect!');
}
// not it is properly typed!
console.log(json.a);

function checkJson(json: unknown): json is { a: string } {
  return (json as any)?.a;
}
