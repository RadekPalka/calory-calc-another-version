import React, {useState} from "react";
export default function BMI({height, weight, setHeight, setWeight}){

    const handleWeightInput = e => setWeight(value => e.target.value)
    const handleHeightInput = e => setHeight(value => e.target.value)
    const [result, setResult ] = useState(0)

    const handleFormSubmit= e =>{
        e.preventDefault()
        if (!weight || !height){
            return alert("Nie wypełniłeś formularza")
        }
        setResult(res => res = (Number(weight)/ Math.pow((Number(height)/100),2)).toFixed(2))

    }

    return(
        <form onSubmit={handleFormSubmit}>


            <input type="number" value={weight} onChange={handleWeightInput} placeholder="Wpisz swoją wagę w kilogramach"/>
            <input type="number" value={height} onChange={handleHeightInput} placeholder="Wpisz swój wzrost w centymetrach"/>

            <button>Oblicz BMI</button>
            <p className="result">{result !==0 && `Twoje bmi to ${result}`}</p>
        </form>

    )
}