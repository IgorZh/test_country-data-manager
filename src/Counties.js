import { useState } from "react";
import TimerMessage from "./TimerMessage";
import { ReactComponent as TrashIcon } from "./trash.svg";
import "./Countries.css";

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
        <div className="countries">
            <div className="countries__search-box">
                <input
                    placeholder="search"
                    value={query}
                    onChange={handleSearchChange}
                />
                <TimerMessage
                    className="countries__message"
                    onTimeout={() => setMessage("")}
                >
                    {message}
                </TimerMessage>
            </div>
            <div className="scroll-container">
                <table className="countries__table">
                    <thead>
                        <tr>
                            <th className="countries__column">Code</th>
                            <th className="countries__column">Name</th>
                            <th className="countries__column">Currency</th>
                            <th className="countries__column">Phone</th>
                            <th className="countries__column"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCountries.map(
                            ({ code, name, currency, phone }) => (
                                <tr key={code} className="countries__row">
                                    <td className="countries__column">
                                        {code}
                                    </td>
                                    <td className="countries__column">
                                        {name}
                                    </td>
                                    <td className="countries__column">
                                        {currency}
                                    </td>
                                    <td className="countries__column">
                                        {phone}
                                    </td>
                                    <td
                                        className="countries__column countries__column_click"
                                        onClick={() => handleDelete(code)}
                                    >
                                        <TrashIcon className="countries__delete" />
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
            <div className="countries__total">Total: {countries.length}</div>
        </div>
    );
}
