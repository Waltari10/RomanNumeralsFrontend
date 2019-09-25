import { romanToArabic } from '../helpers.js'



describe('Numeral conversion', () => {

    
    it('Greater values should not follow lesser values', () => {
        
        const res = romanToArabic('MXM');
        expect(res).toEqual('Greater values should not follow lesser values')
    })

    it('Should fail when converting roman numeral aaaa', () => {
        
        const res = romanToArabic('aaaa');
        expect(res).toEqual('Has illegal combination: a')
    })

    it('Should fail when converting roman numeral CsdfD', () => {
        
        const res = romanToArabic('CsdfD');
        expect(res).toEqual('Has illegal combination: d')
    })

    
    it('Should fail when converting roman numeral CCCCD', () => {
        
        const res = romanToArabic('CCCCD');
        expect(res).toEqual("Has illegal combination: CCCC")
    })

    it('Should fail when converting roman numeral CCD', () => {
        /* TODO: Validation for CCD or IIV type of cases has not yet been implemented */
        
        const res = romanToArabic('CCD');
        expect(res).toEqual('Greater values should not follow lesser values')
    })

    
    it('Should not crash with obj', () => {
        
        const res = romanToArabic({});
        expect(res).toEqual('Given value is not a string')
    })

    
    it('Should not crash with number', () => {
        
        const res = romanToArabic(432);
        expect(res).toEqual('Given value is not a string')
    })

    it('Should convert roman numeral clxxviii', () => {
        
        const res = romanToArabic('clxxviii');
        expect(res).toEqual(178)
    })

    it('Should convert roman numeral CLXXVIII', () => {
        
        const res = romanToArabic('CLXXVIII');
        expect(res).toEqual(178)
    })


    it('Should convert roman numeral MCMXLIII', () => {
        
        const res = romanToArabic('MCMXLIII');
        expect(res).toEqual(1943)
    })


    it('Should convert roman numeral MMDCCC', () => {
        
        const res = romanToArabic('MMDCCC');
        expect(res).toEqual(2800)
    })

    it('Should convert roman numeral MCMVIII', () => {
        
        const res = romanToArabic('MCMVIII');
        expect(res).toEqual(1908)
    })

    
    it('Should convert roman numeral DM', () => {

        const res = romanToArabic('DM');
        expect(res).toEqual('Greater values should not follow lesser values')

    })

    
    it('Should convert roman numeral MD', () => {

        const res = romanToArabic('MD');
        expect(res).toEqual(1500)

    })

    it('Should convert roman numeral M', () => {

        const res = romanToArabic('M');
        expect(res).toEqual(1000)

    })

    it('Should convert roman numeral D', () => {

        const res = romanToArabic('D');
        expect(res).toEqual(500)

    })

    it('Should convert roman numeral C', () => {

        const res = romanToArabic('C');
        expect(res).toEqual(100)

    })

    
    it('Should convert roman numeral L', () => {

        const res = romanToArabic('L');
        expect(res).toEqual(50)

    })

    
    it('Should convert roman numeral X', () => {

        const res = romanToArabic('X');
        expect(res).toEqual(10)

    })

    
    it('Should convert roman numeral V', () => {

        const res = romanToArabic('V');
        expect(res).toEqual(5)

    })

    
    it('Should convert roman numeral I', () => {

        const res = romanToArabic('I');
        expect(res).toEqual(1)

    })
})