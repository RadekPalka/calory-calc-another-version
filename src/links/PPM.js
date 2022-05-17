import React, {useState} from "react";

export default function PPM(props){
    const {height, weight, setHeight, setWeight, age, setAge, sex, setSex} = props
    const handleWeightInput = e => setWeight(value => e.target.value)
    const handleHeightInput = e => setHeight(value => e.target.value)
    const handleAgeInput = e => setAge(value => e.target.value)
    const  handleSelectOption = e => setSex(value => e.target.value)
    const [result, setResult ] = useState()
    const handleFormSubmit= e =>{
        // PPM (kobiety) = SWE (spoczynkowy wydatek energetyczny kcal) = 655,1 + (9,563 x masa ciała [kg]) + (1,85 x wzrost [cm]) – (4,676 x [wiek])
        // PPM (mężczyźni) = SWE (spoczynkowy wydatek energetyczny kcal) = 66,5 + (13,75 x masa ciała [kg]) + (5,003 x wzrost [cm]) – (6,775 x [wiek])
        e.preventDefault()
        if (!weight || !height || !age || !sex){
            return alert("Nie wypełniłeś formularza")
        }
        if (sex ==="woman"){
            setResult(res => res = (655.1 + (9.563 * Number(weight))+ (1.85 * Number(height))- (4.676* Number(age))).toFixed(2))
        }
        else if (sex === "man"){
            setResult(res => res = (66.5 + (13.75 * Number(weight))+ (5.003 * Number(height))- (6.775* Number(age))).toFixed(2))
        }


    }
    return(
        <div>
            <h2>PPM - Podstawowa przemiana materii</h2>
            <form onSubmit={handleFormSubmit}>

                <p>Wpisz swoją wagę w kilogramach</p>
                <input type="number" value={weight} onChange={handleWeightInput} />
                <p>Wpisz swój wzrost w centymetrach</p>
                <input type="number" value={height} onChange={handleHeightInput} />
                <p>Wpisz swój wiek w latach</p>
                <input type="number" value={age} onChange={handleAgeInput} />
                <p>Podaj swoją płeć</p>
                <select name="sex" onChange={handleSelectOption} value={sex}>
                    <option value="">--Wybierz opcję--</option>
                    <option value="woman">Kobieta</option>
                    <option value="man">Mężczyzna</option>

                </select>


                <button>Oblicz PPM</button>
                {result && <p className="result">Twoje PPM wynosi {result} kcal</p>}

            </form>
        </div>
    )
}