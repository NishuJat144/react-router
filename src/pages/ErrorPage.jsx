import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {

    // * react router hook useRouteError to handle errors
    const error = useRouteError();
    console.log(error);
    
    // * Error Validation 
    if(error.status === 404){
        return (
            <section className="error-section">
                <div id="error-text">
                    <figure>
                        <img 
                        src="https://img.freepik.com/free-vector/404-error-design-with-construction-concept_23-2147733654.jpg" 
                        alt="error" 
                        />
                    </figure>
                    <div className="text-center">
                        <p className="p-a">
                            .The page you were looking for could not found
                        </p>
                        <p className="p-b">... Back to previous page</p>
                    </div>
                     <NavLink to ="/" className="btn">Go to Home Page</NavLink>
                </div>
               

            </section>
        );
    }
      
    return <h1>The page you are looking does not exist</h1>
};