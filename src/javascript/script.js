document.getElementById('calculate').addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || num1 === 0) {
        document.getElementById('result').textContent = 'Inválido';
        return;
    }

    let result = (num3 * num2) / num1;

    if (Number.isInteger(result)) {
        document.getElementById('result').textContent = result;
    } else {
        document.getElementById('result').textContent = result.toFixed(2).replace('.', ',');
    }
});