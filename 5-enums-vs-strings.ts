enum SupportedScopesBadly {
  AlgemeenLezen,
  // meer scopes hier..
}

function checkScopeBadly(scope: SupportedScopesBadly) {
  if (!Object.values(SupportedScopesBadly).includes(scope)) {
    return false;
  }
  // actual check
  return true;
}

console.log(SupportedScopesBadly.AlgemeenLezen); // CHECK this console output :(
checkScopeBadly(SupportedScopesBadly.AlgemeenLezen);

// -------------------------------------

const supportedScopes = ['AlgemeenLezen'] as const; // Mark the as const keyword

type SupportedScopes = typeof supportedScopes[number];
function checkScopeGood(scope: SupportedScopes) {
  if (!supportedScopes.includes(scope)) {
    return false;
  }
  // actual check
  return true;
}

checkScopeGood('AlgemeenLezen');

// Toon gecomipileerde versies op playground
