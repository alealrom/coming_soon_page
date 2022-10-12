export function validateEmail(inputText) {
    let userInput = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
    return userInput.test(inputText)
}