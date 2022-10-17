import { useEffect, useReducer } from "react";
import AddCountry from "./AddCountry";
import "./App.css";
import Countries from "./Counties";
import { CountriesActionTypes, countriesReducer } from "./countriesReducer";
import { getFromLocalStorage, saveToLocalStorage } from "./persist.utils";

const STORAGE_KEY = "__COUNTRIES_MANAGER_STORE__";

export default function App() {
    const [countries, dispatch] = useReducer(
        countriesReducer,
        [],
        (initialValue) => getFromLocalStorage(STORAGE_KEY, initialValue)
    );

    useEffect(() => {
        saveToLocalStorage(STORAGE_KEY, countries);
    }, [countries]);

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
