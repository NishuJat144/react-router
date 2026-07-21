export const Card = ({ currMovies }) => {
    const {Poster , imdbID} = currMovies ;
    // console.log(currMovies.Title);
    // console.log(currMovies.Poster);
    return (
        <>
        <li className="cards-list">
            <div className="cards-container">
                <div className="cards-img">
                    <img src={Poster} alt={imdbID} />
                </div>
                <div>
                    <div>
                        <button className="cards-btn">
                            WatchNow
                        </button>
                    </div>
                </div>
            </div>
        </li>
        </>
    );
};