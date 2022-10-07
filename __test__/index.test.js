// const validateEmail = require("../index.js");

import { validateEmail } from "../index";

describe("should be format email", function(){
    test("should validate an empty text", function(){
        // Arrange
        let inputText = "";
        let resultExpect = false;

        // Act
        let isValidInput = validateEmail(inputText);

        //Assert
        expect(isValidInput).toBe(resultExpect);
    })

    test("should validate correct format email", function(){
        // Arrange
        let inputText = "ale@alealrom.co";
        let resultExpect = true;

        // Act
        let isValidInput = validateEmail(inputText);

        // Assert
        expect(isValidInput).toBe(resultExpect);
    })

    test("should validate incorrect format email", function(){
        // Arrange
        let inputText = "ale@@alealrom.co";
        let resultExpect = false;

        // Act
        let isValidInput = validateEmail(inputText);

        // Assert
        expect(isValidInput).toBe(resultExpect);
    })
})