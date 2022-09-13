// money conversion to pounds
function UStoPounds(dollarsUSP){
    let conversionRatePoundsUSP = 0.87;
    let changeUSP = dollarsUSP * conversionRatePoundsUSP;
    return changeUSP
}
console.log(toPounds(10.20))
function PoundstoUS(poundsUs){
    let conversionrateUSP = 1.15;
    let changePUS = poundsUs * conversionrateUSP;
    return changePUS
}
console.log(PoundstoUS(20.10))
