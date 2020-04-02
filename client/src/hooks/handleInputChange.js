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
            regEx: /^[A-Z]([a-zA-Z\.\s][^\d]{2,})+[a-zA-Z]$/,
            error: 'Invalid first name format'
        }
    },
    lastname: {
        required: true,
        validator: {
            regEx: /^[A-Z]([a-zA-Z\.\s][^\d]{2,})+[a-zA-Z]$/,
            error: 'Invalid last name format'
        }
    },
    username: {
        required: true,
        validator: {
            regEx: /^[a-zA-Z0-9]{1}[\w-]{2,18}[a-zA-Z0-9]{1}$/,
            error: 'Invalid user name format'
        }
    },
    enrollment: {
        required: true,
        validator: {
            regEx:/^[0-9]{7,7}[A-Z]{1}$/,
            error: 'Invalid student enrollment format'
        }
    },
    gender: {
        required: true,
        validator: {
            regEx: /^[A-Z]+$/,
            error: 'Invalid value for gender'
        }
    },
    email: {
        required: true
    },
    password: {
        required: true,
        validator: {
            regEx: /^[\w*]{6,}$/,
            error: 'Invalid Password'
        }
    },
    confirmpassword: {
        required: true,
        validator: {
            regEx: /^[\w*]{6,}$/,
            error: 'Invalid Password'
        }
    }
}