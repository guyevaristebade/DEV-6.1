import { useState } from "react";
import './ExerciceTwo.scss'


function ExerciseOne() {
    const [colorInput, setColorInput] = useState({
        r: '',
        g: '',
        b: ''
    });

    const handlerChange = (e) => {
        const { name, value } = e.target;
        setColorInput(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const RandomColor = () => {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);

        setColorInput({ r: randomR, g: randomG, b: randomB });

        if( randomR === randomB === randomG )
            alert("Les valeur sont égale")
    }




    return (
        <>
            <div className="input-container">
                <input name="r"  value={colorInput.r} type="number" min={0} max={255} id="color" placeholder="enter your color" onChange={handlerChange}/>
                <input name="g" value={colorInput.g} type="number" min={0} max={255} id="color" placeholder="enter your color" onChange={handlerChange}/>
                <input name="b" value={colorInput.b}  type="number" min={0} max={255} id="color" placeholder="enter your color" onChange={handlerChange}/>


                <button onClick={RandomColor}>Random Color</button>
            </div>
            <div className="target" style={{backgroundColor: `rgb(${colorInput.r},${colorInput.g}, ${colorInput.b})`}}></div>
        </>
    );
}

export default ExerciseOne;
