import { use } from "react";
import { useLoaderData ,NavLink} from "react-router-dom";

export const MovieDetails = ()=>{
   const MovieData = useLoaderData();
   console.log(MovieData);
   const { Title, Poster } = MovieData;
 
    return(
        <>
        <li className="hero-container hero-movie-container">
            <div className="main-container">
                    <div className="poster-container">
                    <NavLink to="#">
                            <img src={Poster} className="poster" alt={Title} />
                    </NavLink>

            </div>

            <div className="ticket-container">
<div className="ticket_content">

<h4 className="ticket_movie-title">{MovieData.Title}</h4>
<p className="ticket_current-price">Type: {MovieData.Type}</p>
<button className="ticket_buy-btn">Watch now</button>
</div>
</div>

</div>
</li>
</>
)
}