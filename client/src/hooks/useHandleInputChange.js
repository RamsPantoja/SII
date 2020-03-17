import { useState } from 'react';

export const useHandleInputChange = () => {
    const [input, setInput] = useState({
        firstname: '',
        lastname: '',
        password: '',
        email: '',
        matricula: '',
        username: '',
        gender: ''
    });

    //Capturador de los valores de los inputs
    const handleInputChange = (e) => setInput({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value
    });
    
    const [err, setErr] = useState(false);

    return [input, handleInputChange ];

}