import { useState, useCallback } from 'react';

const useAuthValidation = (stateSchema) => {
    const [state, setState] = useState(stateSchema);

    const handleInputChange = useCallback(
        (e) => {
            const name = e.target.name;
            const value = e.target.value;

            setState((prevState) => ({
                ...prevState,
                [name]: { value }
            }));
        }
    );

    return [state, handleInputChange];
}

export default useAuthValidation;