import {movies}
import

function App()
    return 
        <div className="app-container">
        {
          movies.results.map((item) => {
            return (
              <Movie />
            )
          })
        }
      </div>
       