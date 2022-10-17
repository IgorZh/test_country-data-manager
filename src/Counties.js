import { useState } from "react";

export default function Countries({ countries, deleteCountry }) {
    const [query, setQuery] = useState("");

    function handleSearchChange(event) {
        setQuery(event.target.value.toLowerCase());
    }

    const filteredCountries = countries.filter(({ name }) =>
        name.toLowerCase().startsWith(query)
    );

    return (
        <>
            <div>Search: <input value={query} onChange={handleSearchChange} /></div>
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
                                <td onClick={() => deleteCountry(code)}>
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
