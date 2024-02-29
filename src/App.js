import React from "react";
import NavBar from "./Components/NavBar";
import { Romance,Horror,comdey,trending,Actions,orginals} from './url'
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={orginals} title='Netflix Orginals'/>
     <RowPost url={trending} title='Trending' isSmall/>
     <RowPost  url={Actions} title='Actions' isSmall/>
     <RowPost  url={comdey} title=' Comdey' isSmall/>
     <RowPost  url={Horror} title=' Horror' isSmall/>
     <RowPost  url={Romance} title=' Romance' isSmall/>







    </div>
  );
}

export default App;
