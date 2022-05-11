import React, {useState, useEffect} from "react";
export default function BMI({height, weight, setHeight, setWeight}){

    const handleWeightInput = e => setWeight(value => e.target.value)
    const handleHeightInput = e => setHeight(value => e.target.value)
    const [result, setResult ] = useState(0)
    const [bmiMessage, setBmiMessage] = useState('')

    const checkBmiResult = bmi =>{
        console.log(result)
        if (!bmi){

        }
        else if (bmi< 16 ){
            setBmiMessage(message=> message = "Twoje BMI wskazuje na wygłodzenie")
        }
        else if(bmi<17){
            setBmiMessage(message=> message = "Twoje BMI wskazuje na wychudzenie")
        }
        else if (bmi<18.5){
            setBmiMessage(message=> message = "Twoje BMI wskazuje na niedowagę")
        }
        else if (bmi<25){
            setBmiMessage(message=> message = "Twoje BMI jest prawidłowe")
        }
        else if (bmi<30){
            setBmiMessage(message=> message = "Masz nadwaagę")
        }
        else if (bmi<35){
            setBmiMessage(message=> message = "Masz pierwszy stopień otyłości")
        }
        else if (bmi<40){
            setBmiMessage(message=> message = "Masz drugi stopień otyłości")
        }
        else if (bmi > 40){
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
        checkBmiResult(result)
    }, [result])

    return(
        <form onSubmit={handleFormSubmit}>


            <input type="number" value={weight} onChange={handleWeightInput} placeholder="Wpisz swoją wagę w kilogramach"/>
            <input type="number" value={height} onChange={handleHeightInput} placeholder="Wpisz swój wzrost w centymetrach"/>

            <button>Oblicz BMI</button>
            <p className="result">{result !==0 && `Twoje bmi to ${result}`}</p>
            <p className="bmi-message">{bmiMessage}</p>
        </form>

    )
}