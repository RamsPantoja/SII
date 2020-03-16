import { useState } from 'react';

export const useHandleInputChange = () => {
    const [input, setInput] = useState({});

    //Capturador de los valores de los inputs
    const handleInputChange = (e) => setInput({
        user: {
            ...input,
            [e.currentTarget.name]: e.currentTarget.value
        }
    });
    
    return [input, handleInputChange ];

}