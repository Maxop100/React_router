import { NavLink } from "react-router-dom";

import "./Card.css";


export const Card = ({ curMovie }) => {
    const { Title, Year, Poster } = curMovie;
    return (
        <li className="hero-container">
            <div className="main-container">
                <div className="poster-container ">
                    <img src={Poster} className="Poster" alt={Title}/>
                </div>
                <div className="ticket-container">
                    <div className="ticket__content">
                       <NavLink to={`/movie/${curMovie.imdbID}`} className="ticket__link">
                            <button className="ticket__buy-btn " >Watch Now</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </li>
    );
};
