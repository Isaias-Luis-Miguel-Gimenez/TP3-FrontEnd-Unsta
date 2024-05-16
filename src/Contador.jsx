import { useState } from "react"

export const Contador = ({ value }) => {

    const [contador, setContador] = useState(0);

    const handleClick = () => {
        setContador(contador + 1);
    };

    return (
        <>
            <h1>Contador</h1>
            <p>{contador}</p>
            <button onClick={handleClick}>
                Toca para iniciar el contador
            </button>
        </>
    );
};
