import { Route, Routes } from "react-router-dom";
import Main from "./Main";

export default function Section(props){
    return(
        <section>
            <Routes>
                <Route path="/" element={<Main/>} />
                {props.links.map((el, index)=> <Route key={`${index}-${el.title}`} path={el.link}  weight={props.weight} setWeight={props.setWeight} element={el.component} />)}

            </Routes>

        </section>
    )
}