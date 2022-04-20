import React, { useRef, useState } from 'react';

const Square = () => {

    const square = useRef(null);
    const [color, setColor] = useState('#000000');

    
    function randomNumber(min, max) {
        const num = Math.floor(Math.random() * (max - min + 1 ) + min);
        return num;
    }

    const red = randomNumber(0, 255);
    const blue = randomNumber(0, 255);
    const green = randomNumber(0, 255);


    function changeColor() {
        setColor(square.current.style.backgroundColor = `rgb(${red},${green},${blue})`)
        console.log('Cambiando color')
    }

    function backOriginalColor() {
        square.current.style.backgroundColor = ''
    }

    function stopRandomColor() {
        square.current.style.backgroundColor = ''
    }


    return (
        <div>
            <div onMouseEnter={changeColor} onMouseLeave={backOriginalColor} onDoubleClick={stopRandomColor} className='square' ref={square}></div>
        </div>
    );
}

export default Square;
