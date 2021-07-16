// Type aliases and interfaces are very similar, and in many cases you can choose between them freely.
// Almost all features of an interface are available in type,
// the key distinction is that a type cannot be re-opened to add new properties
// vs an interface which is always extendable.

interface MyInterface {
  title: string;
}
interface MyInterface {
  body: string;
}
const interfaceProperties: MyInterface = { body: '', title: '' };

// ------------------
type MyType = {
  title: string;
};
type MyType2 = {
  // haal de 2 weg
  body: string;
};

const typeProperties: MyType & MyType2 = { body: '', title: '' };

console.log(interfaceProperties, typeProperties);
