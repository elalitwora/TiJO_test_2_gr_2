describe('app', function ()
{
    'use strict';

    var answers = window.app;

    describe('returnOnlyLetter', function () {
        it('should return only letter', function () {
            expect(answers.returnOnlyLetter('a4l1f5a')).toBe('alfa');
            expect(answers.returnOnlyLetter('ela1234ela')).toBe('elaela');
        });
        it('should return empty string', function () {
            expect(answers.returnOnlyLetter('45345')).toBe('');
            expect(answers.returnOnlyLetter('222222')).toBe('');
        });
        it('number should return false', function () {
            expect(answers.returnOnlyLetter(45345)).toEqual(false);
            expect(answers.returnOnlyLetter(1994)).toEqual(false);
        });
    });

    describe('alphabetOrder', function () {
        it('should return letters in alphabetical order', function () {
            expect(answers.alphabetOrder('alfa')).toBe('aafl');
            expect(answers.alphabetOrder('kreski')).toBe('eikkrs');
        });
        it('should return lower case letters in alphabetical order', function () {
            expect(answers.alphabetOrder('AlfA')).toBe('aafl');
            expect(answers.alphabetOrder('ELA')).toBe('ael');
        });
        it('should return only letters in alphabetical order', function () {
            expect(answers.alphabetOrder('A1l2f3a')).toBe('aafl');
            expect(answers.alphabetOrder('kreski1234')).toBe('eikkrs');
        });
     });
});
