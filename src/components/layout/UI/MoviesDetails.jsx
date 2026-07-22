import { NavLink, useLoaderData } from "react-router-dom";

export const MoviesDetails = () => {
//    const params =  useParams();
//    console.log(params);
   const movieData = useLoaderData();
   console.log(movieData);

   
    // & Destructing api data 
    const {Title , Actors ,Poster , Type,Year,Plot, BoxOffice, imdbID} = movieData;

       return (
        <li>
            <div>
              <img src={Poster} alt={Title} />
            </div>
            <div>
                <div>
                    <h4></h4>
                    <p></p>
                    <p></p>
                    <button></button>
                </div>
            </div>
        </li>
       )

}