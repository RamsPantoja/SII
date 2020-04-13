export const stateSchemaStudent = {
    firstname: { value:'', error: ''},
    lastname: { value: '', error: ''},
    email: { value: '', error: ''},
    enrollment: { value: '', error: ''},
    password: { value: '', error: ''},
    confirmpassword: { value: '', error: ''},
    gender: { value: '', error: ''}
}

export const stateSchemaTeacher = {
    firstname: { value: '', error: ''},
    lastname: { value: '', error: ''},
    password: { value: '', error: ''},
    email: { value: '', error: ''},
    gender: { value: '', error: ''},
    confirmpassword: { value: '', error: ''}
}

export const disableSchema = {
    status: true,
    error: '',
}
export const validationSchemaStudent = {
    firstname: {
        required: true,
        validator: {
            regEx: /^[a-zA-ZÁÉÍÓÚñáéíóúÑ]+[A-Za-zÁÉÍÓÚñáéíóúÑ\'.\s]*[A-Za-zÁÉÍÓÚñáéíóúÑ.]$/,
            error: 'No debe contener espacios al principio/final, caracteres especiales, numeros.'
        }
    },
    lastname: {
        required: true,
        validator: {
            regEx: /^[a-zA-ZÁÉÍÓÚñáéíóúÑ]+[A-Za-zÁÉÍÓÚñáéíóúÑ\'.\s]*[A-Za-zÁÉÍÓÚñáéíóúÑ.]$/,
            error: 'No debe contener espacios al principio/final, caracteres especiales, numeros.'
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
            regEx: /^[\w.-\s]{6,}$/,
            error: 'Minimo 6 digitos, sin caracteres especiales.'
        }
    },
    confirmpassword: {
        required: true
    }
}

export const validationSchemaTeacher = {
    firstname: {
        required: true,
        validator: {
            regEx: /^[a-zA-ZÁÉÍÓÚñáéíóúÑ]+[A-Za-zÁÉÍÓÚñáéíóúÑ\'.\s]*[A-Za-zÁÉÍÓÚñáéíóúÑ.]$/,
            error: 'No debe contener espacios al principio/final, caracteres especiales, numeros.'
        }
    },
    lastname: {
        required: true,
        validator: {
            regEx: /^[a-zA-ZÁÉÍÓÚñáéíóúÑ]+[A-Za-zÁÉÍÓÚñáéíóúÑ\'.\s]*[A-Za-zÁÉÍÓÚñáéíóúÑ.]$/,
            error: 'No debe contener espacios al principio/final, caracteres especiales, numeros.'
        }
    },
    password: {
        required:true,
        validator: {
            regEx: /^[\w.-\s]{6,}$/,
            error: 'Minimo 6 digitos, sin caracteres especiales.'
        }
    },
    email: {
        required: true
    },
    confirmpassword: {
        required: true
    },
    gender: {
        required: true
    }
}