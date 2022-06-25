import { Routes ,Route,Navigate } from "react-router-dom";
import Header from "./components/Header";
import Planet from "./components/Planet";



function App() {
  return (
    <div className="font-body min-h-screen bg-[#070625] bg-background-stars">
      <Header/>
      
      <Routes>
        <Route path="/" element={<Navigate to={"/planets/Mercury"} />} />
        <Route path="planets/:planet_name" element={<Planet />} />
        
      </Routes>
      
    </div>
  );
}

export default App;
