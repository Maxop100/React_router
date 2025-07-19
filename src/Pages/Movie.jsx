import { useLoaderData } from "react-router-dom";

import { Card } from "../components/UI/Card";

export const Movie =()=>{
    const moviesData = useLoaderData();
    console.log(moviesData);
    return <>
    <ul className=" grid-cols-4 gap-8 grid ">
        {moviesData &&moviesData.Search.map((curMovie) => {
            return <Card key={curMovie.imdbID} curMovie={curMovie} />
        })}
    </ul>

    </>
}