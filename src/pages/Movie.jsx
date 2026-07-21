import { useLoaderData } from "react-router-dom"
import { Card } from "../components/layout/UI/Card";

export const Movie = () => {

    // & useLoaderData Hook :-> This hook provides the value returned from your route loader.
    const moviesData = useLoaderData();
    // console.log(moviesData);
    

    return (
    <ul className="movie-grid">
    {moviesData && 
    moviesData.Search.map((currMovies)=> {
        return <Card key = {currMovies.imdbID} currMovies = {currMovies} /> 
    })}
    </ul>
 );
}