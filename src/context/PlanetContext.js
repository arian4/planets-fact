import React,{useState} from "react";
import JsonData from '../data/data.json'
export const PlanetContext = React.createContext()

export function PlanetContextProvider({children}){
    const [planets,SetPlanets] = useState(JsonData)
    
    const FilterPlanetsByName = (planet_name) => {
        return planets.filter(p => p.name === planet_name)

    }

   
    

    return(
        <PlanetContext.Provider 
        value={{
            planets,
            SetPlanets,
            FilterPlanetsByName
            
            }}
        >
            {children}
        </PlanetContext.Provider>
    )
}