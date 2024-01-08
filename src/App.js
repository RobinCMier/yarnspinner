//tool imports//
import {Route, Routes} from "react-router-dom";

//component imports//
import {Dashboard} from "./pages"
import {Cottage, Pasture} from "./views"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard/>}>
          <Route path="aCozyCottage" element={<Cottage/>}/>
          <Route path="aFreshPasture" element={<Pasture/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
