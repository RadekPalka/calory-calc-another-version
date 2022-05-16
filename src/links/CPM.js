import React, {useState} from "react";

export default function CPM(props){
    const {height, weight, setHeight, setWeight, age, setAge, sex, setSex} = props
    const handleWeightInput = e => setWeight(value => e.target.value)
    const handleHeightInput = e => setHeight(value => e.target.value)
    const handleAgeInput = e => setAge(value => e.target.value)
    const  handleSelectOption = e => setSex(value => e.target.value)
    const  handleSelectPalOption = e => setPal(value => e.target.value)
    const [result, setResult ] = useState()
    const [pal, setPal] = useState()
    const handleFormSubmit= e =>{
        // PPM (kobiety) = SWE (spoczynkowy wydatek energetyczny kcal) = 655,1 + (9,563 x masa ciała [kg]) + (1,85 x wzrost [cm]) – (4,676 x [wiek])
        // PPM (mężczyźni) = SWE (spoczynkowy wydatek energetyczny kcal) = 66,5 + (13,75 x masa ciała [kg]) + (5,003 x wzrost [cm]) – (6,775 x [wiek])
        e.preventDefault()
        if (!weight || !height || !age || !sex || !pal){
            return alert("Nie wypełniłeś formularza")
        }
        if (sex ==="woman"){
            setResult(res => res = ((655.1 + (9.563 * Number(weight))+ (1.85 * Number(height))- (4.676* Number(age)))*Number(pal)).toFixed(2))
        }
        else if (sex === "man"){
            setResult(res => res = ((66.5 + (13.75 * Number(weight))+ (5.003 * Number(height))- (6.775* Number(age)))*Number(pal)).toFixed(2))
        }


    }
    return(
        <form onSubmit={handleFormSubmit}>


            <input type="number" value={weight} onChange={handleWeightInput} placeholder="Wpisz swoją wagę w kilogramach"/>
            <input type="number" value={height} onChange={handleHeightInput} placeholder="Wpisz swój wzrost w centymetrach"/>
            <input type="number" value={age} onChange={handleAgeInput} placeholder="Wpisz swój wiek w latach"/>
            <p>Podaj swoją płeć</p>
            <select name="sex" onChange={handleSelectOption} >
                <option value="">--Wybierz opcję--</option>
                <option value="woman">Kobieta</option>
                <option value="man">Mężczyzna</option>

            </select>

            <select onChange={handleSelectPalOption} >
                {/*Osoby o siedzącym trybie życia, nie uprawiający dodatkowych ćwiczeń fizycznych: 1,21 – 1,27;*/}
                {/*Osoby wykonujące dodatkową niezbyt intensywną aktywność fizyczną: 1,4-1,5,*/}
                {/*Osoby wykonujące pracę wymagającą dodatkowej aktywności fizycznej: 1,6-1,7,*/}
                {/*Osoby wykonujące pracę stojącą: 1,8-1,9,*/}
                {/*Osoby wykonywujące ciężką pracę fizyczną: 2,0-2,4,*/}
                {/*W przypadku wykonywania intensywnych ćwiczeń przez przynajmniej 5 dni w tygodniu od 30 do 60 minut wymagane jest zwiększenie założonego współczynnika PAL o 0,3.*/}
                <option value={0}>Wybierz opcję</option>
                <option value={1.2}>Osoby o siedzącym trybie życia, nie uprawiający dodatkowych ćwiczeń fizycznych</option>
                <option value={1.45}>Osoby wykonujące dodatkową niezbyt intensywną aktywność fizyczną</option>
                <option value={1.65}>Osoby wykonujące pracę wymagającą dodatkowej aktywności fizycznej</option>
                <option value={1.85}>Osoby wykonujące pracę stojącą</option>
                <option value={2.2}>Osoby wykonywujące ciężką pracę fizyczną</option>


            </select>


            <button>Oblicz CPM</button>
            {result && <p>Twoje CPM wynosi {result} kcal</p>}

        </form>
    )
}