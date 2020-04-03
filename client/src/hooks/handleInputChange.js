export const stateSchema = {
    firstname: { value:'', error: ''},
    lastname: { value: '', error: ''},
    username: { value: '', error: ''},
    email: { value: '', error: ''},
    enrollment: { value: '', error: ''},
    password: { value: '', error: ''},
    confirmpassword: { value: '', error: ''},
    gender: { value: '', error: ''}
}

export const validationSchema = {
    firstname: {
        required: true,
        validator: {
            regEx: /^[A-ZÁÉÍÓÚñáéíóúÑ]+[A-Za-zÁÉÍÓÚñáéíóúÑ\'.\s]*[A-Za-zÁÉÍÓÚñáéíóúÑ.]$/,
            error: 'No debe contener espacios al principio/final, caracteres especiales, numeros.'
        }
    },
    lastname: {
        required: true,
        validator: {
            regEx: /^[A-ZÁÉÍÓÚñáéíóúÑ]+[A-Za-zÁÉÍÓÚñáéíóúÑ\'.\s]*[A-Za-zÁÉÍÓÚñáéíóúÑ.]$/,
            error: 'No debe contener espacios al final, caracteres especiales, numeros.'
        }
    },
    username: {
        required: true,
        validator: {
            regEx: /^[a-zA-Z0-9]{1}[\w-]{2,18}[a-zA-Z0-9]{1}$/,
            error: 'Maximo 20 digitos. No debe contener espacios, caracteres especiales.'
        }
    },
    enrollment: {
        required: true,
        validator: {
            regEx:/^[0-9]{7,7}[A-Z]{1}$/,
            error: 'Debe contener 8 digitos.'
        }
    },
    gender: {
        required: true,
        validator: {
            regEx: /^[A-Z]+$/,
            error: 'Elige una opcion.'
        }
    },
    email: {
        required: true
    },
    password: {
        required: true,
        validator: {
            regEx: /^[\w.-]{6,}$/,
            error: 'Minimo 6 digitos, sin caracteres especiales.'
        }
    },
    confirmpassword: {
        required: true,
        validator: {
            regEx: /^[\w]{6,}$/,
            error: 'Minimo 6 digitos, sin caracteres especiales.'
        }
    }
}