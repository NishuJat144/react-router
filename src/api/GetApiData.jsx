// * Function to fetch API Data
export const getMoviesData = async() => {
    try{
      const res = await fetch(
            // & OMDBAPI 
            `http://www.omdbapi.com/?s=titanic&apikey=${import.meta.env.VITE_API_KEY}`
        );

      const data = await res.json();
    //   console.log(data);
      return data ;

    }
    catch(error){
        console.log(error);
        
    }

}