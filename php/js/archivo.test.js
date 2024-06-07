import { validarCampo } from './register.js';

describe('Pruebas para funciones de validación y envío de formulario', () => {
    test('validarCampo debe retornar true para una matrícula válida', () => {
        const resultado = validarCampo(/^\d{3}z\d{4}$/, '123z5678', ''); // Asegúrate de pasar el valor de mensaje también
        expect(resultado).toBe(true);
    });
});
