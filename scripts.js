const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const id = button.id;
        const text = button.innerText;

        if (id === 'ac') {
            // Limpiar pantalla
            display.value = '';
        } 
        else if (id === 'de') {
            // Borrar último carácter (DEL)
            display.value = display.value.slice(0, -1);
        } 
        else if (id === '=') {
            // Calcular resultado
            try {
                // Reemplazamos símbolos visuales por operadores reales si es necesario
                let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
                if (expression !== '') {
                    display.value = eval(expression);
                }
            } catch (error) {
                display.value = 'Error ✨';
                setTimeout(() => display.value = '', 1500);
            }
        } 
        else {
            // Agregar número o símbolo a la pantalla
            display.value += (id === '*' ? '*' : id === '/' ? '/' : text);
        }
    });
});
