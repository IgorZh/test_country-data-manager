import { useState } from "react";
import TimerMessage from "./TimerMessage";

export default function Countries({ countries, deleteCountry }) {
    const [query, setQuery] = useState("");
    const [message, setMessage] = useState("");

    const filteredCountries = countries.filter(({ name }) =>
        name.toLowerCase().startsWith(query)
    );

    function handleDelete(code) {
        deleteCountry(code);
        setMessage("deleted");
    }

    function handleSearchChange(event) {
        setQuery(event.target.value.toLowerCase());
    }

    return (
        <>
            <div>
                Search: <input value={query} onChange={handleSearchChange} />
                <TimerMessage onTimeout={() => setMessage("")}>
                    {message}
                </TimerMessage>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Currency</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCountries.map(
                        ({ code, name, currency, phone }) => (
                            <tr key={code}>
                                <td>{code}</td>
                                <td>{name}</td>
                                <td>{currency}</td>
                                <td>{phone}</td>
                                <td onClick={() => handleDelete(code)}>
                                    {phone}
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
            <div>Total: {countries.length}</div>
        </>
    );
}
