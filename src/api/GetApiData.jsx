// * Function to fetch API Data
export const getMoviesData = async() => {
    try{
      const res = await fetch(
            // & OMDBAPI 
            "http://www.omdbapi.com/?s=titanic&apikey=3f56fcf9"
        );

      const data = await res.json();
    //   console.log(data);
      return data ;

    }
    catch(error){
        console.log(error);
        
    }

}