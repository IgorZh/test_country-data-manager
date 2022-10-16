import { useReducer } from "react";
import AddCountry from "./AddCountry";
import "./App.css";
import Countries from "./Counties";
import { CountriesActionTypes, countriesReducer } from "./countriesReducer";

export default function App() {
    const [countries, dispatch] = useReducer(countriesReducer, []);

    function addCountry(country) {
        dispatch({ type: CountriesActionTypes.add, payload: country });
    }

    function deleteCountry(countryCode) {
        dispatch({ type: CountriesActionTypes.delete, payload: countryCode });
    }

    return (
        <div className="manager">
            <AddCountry
                addCountry={addCountry}
                addedCountryCodes={countries.map(({ code }) => code)}
            />
            <Countries countries={countries} deleteCountry={deleteCountry} />
        </div>
    );
}
