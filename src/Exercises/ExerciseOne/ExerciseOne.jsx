import Star from '../../Component/Star/Star'
import { useState } from "react";

function ExerciseOne() {
    const [inputValue, setInputValue ] = useState(0)
    const [borne, setBorne] = useState(5)
    const handlerChange = (e)=>{
        setInputValue(parseInt(e.target.value))
    }

    const handlerChangeBorne = (e) =>{
        setBorne(parseInt(e.target.value))
    }


    const displayStart = ()=>{
        let stars = []

        if (inputValue === 0) {
            return <p>Aucune note</p>;
        }

        for(let i = 1; i <= borne; i++){
            let color = ""
            if (i <= inputValue) {
                if (inputValue <= 2) {
                    color = "red";
                } else if (inputValue === 3) {
                    color = "orange";
                } else {
                    color = "green";
                }
            }else{
                color = "black";
            }
            stars.push(<Star key={i} color={color} />);
        }
        return stars
    }

    console.log(displayStart())


    return (
        <>
            <div className="head">
                <h1>RATING</h1>
                <div className="inputs">
                    <input type="number" min={0} max={borne} id="note" value={inputValue} onChange={handlerChange}/>
                    <input type="number" min={1} max={50} id="note" value={borne} onChange={handlerChangeBorne}/>
                </div>
            </div>
            <div className="star-container">
                {displayStart()}
            </div>
        </>
    );
}

export default ExerciseOne;
