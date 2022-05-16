import React, {useState, useEffect} from "react";
export default function BMI({height, weight, setHeight, setWeight}){

    const handleWeightInput = e => setWeight(value => e.target.value)
    const handleHeightInput = e => setHeight(value => e.target.value)
    const [result, setResult ] = useState()
    const [bmiMessage, setBmiMessage] = useState('')

    const checkBmiResult = () =>{


        if (result< 16 ){
            setBmiMessage(message=> message = "Twoje BMI wskazuje na wygłodzenie")
        }
        else if(result<17){
            setBmiMessage(message=> message = "Twoje BMI wskazuje na wychudzenie")
        }
        else if (result<18.5){
            setBmiMessage(message=> message = "Twoje BMI wskazuje na niedowagę")
        }
        else if (result<25){
            setBmiMessage(message=> message = "Twoje BMI jest prawidłowe")
        }
        else if (result<30){
            setBmiMessage(message=> message = "Masz nadwaagę")
        }
        else if (result<35){
            setBmiMessage(message=> message = "Masz pierwszy stopień otyłości")
        }
        else if (result<40){
            setBmiMessage(message=> message = "Masz drugi stopień otyłości")
        }
        else if (result > 40){
            setBmiMessage(message=> message = "Twoje BMI wskazuje na skrajną otyłość")
        }
    }


    const handleFormSubmit= e =>{
        e.preventDefault()
        if (!weight || !height){
            return alert("Nie wypełniłeś formularza")
        }
        setResult(res => res = (Number(weight)/ Math.pow((Number(height)/100),2)).toFixed(2))

    }
    useEffect(() => {
        checkBmiResult()
    }, [result])

    return(
        <form onSubmit={handleFormSubmit}>


            <input type="number" value={weight} onChange={handleWeightInput} placeholder="Wpisz swoją wagę w kilogramach"/>
            <input type="number" value={height} onChange={handleHeightInput} placeholder="Wpisz swój wzrost w centymetrach"/>

            <button>Oblicz BMI</button>
            <p className="result">{result  && `Twoje bmi to ${result}`}</p>
            <p className="bmi-message">{bmiMessage}</p>
        </form>

    )
}