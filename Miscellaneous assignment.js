
function textParser(input) {
    
    const lowerCaseString = input.toLowerCase();

    const noSpacesString = lowerCaseString.split(' ').join('');

    const containsJavaScript = noSpacesString.indexOf('javascript') 

    const countA = lowerCaseString.split('a').length - 1;

    const replacedEString = lowerCaseString.replace(/e/g,'X');

    return {
        lowerCaseString,
        noSpacesString,
        containsJavaScript,
        countA,
        replacedEString
    };
}
const inputString = "Javascript is an excellent programming language.";
const result = textParser(inputString);
console.log(result);