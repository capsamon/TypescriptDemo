enum SupportedScopesBadly {
  AlgemeenLezen,
  // More scopes here..
}

function checkScopeBadly(scope: SupportedScopesBadly) {
  if (!Object.values(SupportedScopesBadly).includes(scope)) {
    return false;
  }
  //Actual check
  return true;
}

//https://www.typescriptlang.org/play
console.log(SupportedScopesBadly.AlgemeenLezen); // What will the console output?
checkScopeBadly(SupportedScopesBadly.AlgemeenLezen);

// -------------------------------------

const supportedScopes = ['AlgemeenLezen'] as const;

type SupportedScopes = typeof supportedScopes[number];
function checkScopeGood(scope: SupportedScopes) {
  if (!supportedScopes.includes(scope)) {
    return false;
  }
  //Actual check
  return true;
}

//During debugging, it will show the correct value
checkScopeGood('AlgemeenLezen');
