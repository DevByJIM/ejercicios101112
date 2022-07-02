import { useState } from 'react'

const Cuadrado = () => {

    let initialBackground = { background: 'rgb(5,5,5)' }

    const [fondo, setFondo] = useState(initialBackground);
    const [intervaler, setIntervaler] = useState(null);
    const [showColor, setShowColor] = useState('');

    const enterMouse = (e) => {
        const Painter = setInterval(() => {

            let Red = parseInt(Math.random() * 254);
            let Green = parseInt(Math.random() * 254);
            let Blue = parseInt(Math.random() * 254);

            setShowColor(`rgb(${Red},${Green},${Blue})`)

            setFondo({ background: `rgb(${Red},${Green},${Blue})` })
        }, 200);

        setIntervaler(Painter);
    }

    const leaveMouse = (e) => {
        if (intervaler) {
            clearInterval(intervaler);
        }
        setIntervaler(null);
    }

    const dblClicMouse = () => {
        if (intervaler) {
            clearInterval(intervaler);
        }
        setIntervaler(null);

    }


    return (
        <>
            <h2>
                EJERCICIOS 10,11,12
            </h2>
            <div className='mybox' style={fondo}
                onMouseEnter={() => enterMouse()}
                onMouseLeave={() => leaveMouse()}
                onDoubleClick={() => dblClicMouse()}
            >
            </div>
            <h3>
                Background: {showColor}
            </h3>
        </>
    )
}

export default Cuadrado
