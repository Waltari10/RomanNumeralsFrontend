/* eslint-disable no-loop-func */


const romanNumeralValues = {
    I: 1,
    IV: 4,
    V: 5,
    X: 10,
    IX: 9,
    XL: 40,
    L: 50,
    C: 100,
    XC: 90,
    CM: 900,
    CD: 400,
    D: 500,
    M: 1000,
}



/**
 * 
 *  - Check that two same abbreviations do not follow each other.
 *  - Check that two D, V or L do not follow each other
 *  - Check that four I, X or C do not follow each other
 *  - Should not accept IIV or CCD etc.
 *  - Greater values should not follow lesser values
 * 
 * @param {string} romanNumeral 
 */
const isValidRoman = (romanNumeral) => {
    
    if (!romanNumeral) {
        return { isValid: false, error: 'Falsy value given'}
    }

    if (typeof romanNumeral !== 'string') {
        return { isValid: false, error: 'Given value is not a string'}
    }


    const illegalCombinations = [
        'DD',
        'VV',
        'LL',
        'IIII',
        'XXXX',
        'CCCC',
        'a',
        'b',
        'd'
        /* TODO: Add all illegal characters. Regexp would be best. Or maybe allowed characters? */
    ]

    const illegalCombination = illegalCombinations.find(combination => romanNumeral.indexOf(combination) !== -1)
    
    if (illegalCombination) {
        return { isValid: false, error: 'Has illegal combination: ' + illegalCombination }
    }


    /* i is here just in case to prevent infinite loops... Looks a bit stinky, I admit.  */
    let i = 0;
    let isValid = true

    let romanNumeralTemp = romanNumeral;

    while (romanNumeral.length > 0 && i < 100 && isValid){
        i++;

        const firstRoman = getNextRomanNumeral(romanNumeralTemp);

        romanNumeralTemp = romanNumeralTemp.substring(firstRoman.length, romanNumeralTemp.length);
        
        const followingRoman = getNextRomanNumeral(romanNumeralTemp);

        if (romanNumeralValues[firstRoman] < romanNumeralValues[followingRoman]) {
            return { isValid: false, error: 'Greater values should not follow lesser values' }
        } 

        
        if (firstRoman === followingRoman && firstRoman.length === 2 && followingRoman.length === 2) {
            return { isValid: false, error: 'Has two same roman abbreviations following each other: ' + firstRoman }
        }
    }



    return { isValid: true }
}

const getNextRomanNumeral = (romanNumeral) => {
    return Object.keys(romanNumeralValues).reduce((prev, key) => {


        // We can always use the latter match.
        if (romanNumeral.toUpperCase().indexOf(key) === 0) {
          return key
        }

        return prev;
      
      
      }, '');
}


export const romanToArabic = (romanNumeral) => {

    const { error, isValid } = isValidRoman(romanNumeral)

    if (!isValid) {
        return error;
    }


    let arabicValAccumulator = 0;

    let romanNumeralTemp = romanNumeral;

    /* i is here just in case to prevent infinite loops... Looks a bit stinky, I admit.  */
    let i = 0;

    while (romanNumeralTemp.length > 0 && i < 100){
        i++;

        const firstRoman = getNextRomanNumeral(romanNumeralTemp);

        romanNumeralTemp = romanNumeralTemp.substring(firstRoman.length, romanNumeralTemp.length);
        
        const followingRoman = getNextRomanNumeral(romanNumeralTemp);

        // If roman numeral is smaller than the following numeral then reduce, otherwise add.


        const arabicValueTemp = romanNumeralValues[firstRoman] || 0;

        if (romanNumeralValues[firstRoman] < romanNumeralValues[followingRoman]) {
            arabicValAccumulator = arabicValAccumulator - arabicValueTemp; 
        } else {
            arabicValAccumulator = arabicValAccumulator + arabicValueTemp; 
        }
    }

    return arabicValAccumulator;
} 