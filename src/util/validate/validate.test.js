import {validate} from './validate';

describe("validate - Test", () => {

    it("validate() is returning false when wrong values is entered", () => {
        expect(validate({required: true}, "")).toBeFalsy();
        expect(validate({required: true}, null)).toBeFalsy();
        expect(validate({required: true}, undefined)).toBeFalsy();
        expect(validate({required: true, minLenght: 10}, "Hej")).toBeFalsy();
        expect(validate({required: true, maxLenght: 10}, "his is more than 10 characters")).toBeFalsy();
    });

    it("validate() is returning true when right values is entered", () => {
        expect(validate({required: true}, "Quiz")).toBeTruthy();
        expect(validate({required: true, minLenght: 10}, "Medicin quiz med 10 spørgsmål")).toBeTruthy();
    });

});