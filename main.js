function test() {
    try {
        let inputNumber = getNumberInput('numberInput');
        console.log(inputNumber);
    } catch(e) {
        handleError(e);
    }
}
