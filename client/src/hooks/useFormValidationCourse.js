import { useState, useCallback, useEffect } from 'react'


const useFormValidationCourse = (stateSchema, validationSchema = {}, disableSchema) => {
    const [ state, setState ] = useState(stateSchema);
    const [ disable, setDisable ] = useState(disableSchema);
    const [ isDirty, setIsDirty ] = useState(false);

    const validation = useCallback(() => {
       const hasErrorInSate = Object.keys(validationSchema).some( (key) => {
           const isRequiredFiel = validationSchema[key].required;
           const stateValue = state[key].value;
           const stateError = state[key].error;

           return ( isRequiredFiel && !stateValue) || stateError
       })

       return hasErrorInSate;
    },[state, validationSchema])

    useEffect(() => {
        setDisable(() => ({
            ...disableSchema,
            status: true
        }))
    },[disableSchema])

    useEffect(() => {
        if (isDirty) {
            setDisable(()=> ({
                ...disableSchema,
                status: validation()
            }))
        }

        if (validation()) {
            setDisable(() => ({
                ...disableSchema,
                error: 'Todos los campos son obligatorios!'
            }))
        }
    },[ disableSchema, isDirty, validation ]);

    const handleOnChange = useCallback(
        (e) => {
            setIsDirty(true);
            const value = e.target.value;
            const name = e.target.name;
            let error = '';


            if (validationSchema[name].required) {
                if (!value) {
                    error = 'Campo obligatorio.'
                }
            }

            if ( validationSchema[name].validator !== null && typeof validationSchema[name].validator === 'object' ) {
                if (value && !validationSchema[name].validator.regEx.test(value)) {
                    error = validationSchema[name].validator.error;
                }
            }

            setState((prevState) => ({
                ...prevState,
                [name]: { value, error}
            }))
        },
        [validationSchema]
    )

    return [state, disable, handleOnChange]
}

export default useFormValidationCourse;