export const stateSchemaStudent = {
    firstname: { value:'', error: '', errorfield: 'input-register'},
    lastname: { value: '', error: '', errorfield: 'input-register'},
    email: { value: '', error: '', errorfield: 'input-register'},
    enrollment: { value: '', error: '', errorfield: 'input-register'},
    password: { value: '', error: '', errorfield: 'input-register'},
    confirmpassword: { value: '', error: '', errorfield: 'input-register'},
    gender: { value: '', error: '', errorfield: 'input-select-gender'}
}

export const stateSchemaTeacher = {
    firstname: { value: '', error: '', errorfield: 'input-register'},
    lastname: { value: '', error: '', errorfield: 'input-register'},
    password: { value: '', error: '', errorfield: 'input-register'},
    email: { value: '', error: '', errorfield: 'input-register'},
    gender: { value: '', error: '', errorfield: 'input-select-gender'},
    confirmpassword: { value: '', error: '', errorfield: 'input-register'}
}

export const stateSchemaLogin = {
    email: { value: ''},
    password: { value: ''}
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