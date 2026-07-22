// * Function to fetch API Data
export const getMoviesDetails = async({params}) => {

    console.log(params);
    const id = params.moviesID ;
    
    console.log(
  `http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
);

    try{
      const res = await fetch(
            // & OMDBAPI 
            `http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
        );

      const data = await res.json();
    //   console.log(data);
      return data ;

    }
    catch(error){
        console.log(error);
        
    }

}