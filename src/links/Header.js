import { Link } from "react-router-dom"

export default function Header(props){
    return(
        <header>
            <h1>Kalkulator kalorii</h1>
            <nav>
                <ul>
                    {props.links.map((el, index)=> <li key ={`${index}-${el.title}`}>
                        <Link to={el.link}>{el.title.toUpperCase()}</Link>
                        </li>

                    )}
                </ul>
            </nav>
        </header>
    )
}