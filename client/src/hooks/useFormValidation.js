import { useState, useEffect, useCallback } from 'react';

const useFormValidation = (stateSchema, validationSchema = {}, callback) => {
    const [state, setState] = useState(stateSchema);
    const [disable, setDisable] = useState(true);
    const [isDirty, setIsDirty] = useState(false);

    useEffect(() => {
        setDisable(true);
    }, []);

    useEffect(() => {
        if(isDirty) {
            setDisable(validateState());
        }
    }, [state, isDirty]);

    const validateState = useCallback(() => {
        const hasErrorInState = Object.keys(validationSchema).some( key => {
            const isInputFielRequired = validationSchema[key].required;
            const stateValue = state[key].value;
            const stateError = state[key].error;
            const password = state.password.value;
            const confirmPassword = state.confirmpassword.value;

            return ( isInputFielRequired && !stateValue ) || ( password !== confirmPassword ) || stateError;
        });

        return hasErrorInState;
    }, [state, validationSchema ]);

    const handleOnChange = useCallback(
        (e) => {
            setIsDirty(true);
            const name = e.target.name;
            const value = e.target.value;
            let error = '';

            if (validationSchema[name].required) {
                if (!value) {
                    error = 'Campo obligatorio.'
                }
            }

            if (
                validationSchema[name].validator !== null &&
                typeof validationSchema[name].validator  === 'object'
                ) {
                    if (value && !validationSchema[name].validator.regEx.test(value)) {
                        error = validationSchema[name].validator.error;
                    }
            }

            setState((prevState) => ({
                ...prevState,
                [name]: { value, error}
            }));
        },
        [validationSchema]
    );

    return [ state, disable, handleOnChange ];
}

export default useFormValidation;
