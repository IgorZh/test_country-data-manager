import { useLazyQuery, gql } from "@apollo/client";
import { useState } from "react";
import TimerMessage from "./TimerMessage";

const GET_COUNTRY = gql`
    query Country($code: ID!) {
        country(code: $code) {
            code
            name
            currency
            phone
        }
    }
`;

export default function AddCountry({ addCountry, addedCountryCodes }) {
    const [getCountry, { loading }] = useLazyQuery(GET_COUNTRY);
    const [value, setValue] = useState("");
    const [status, setStatus] = useState();

    const addDisabled = loading || addedCountryCodes.includes(value) || !value;

    async function handleAdd(event) {
        event.preventDefault();

        const { data, error } = await getCountry({
            variables: { code: value },
        });

        if (error) {
            setStatus("error, please retry");
            return;
        }

        if (data?.country) {
            addCountry(data?.country);
            setValue("");
            return;
        }

        setStatus("not found");
    }

    function handleChange(event) {
        setValue(event.target.value.toUpperCase());
    }

    return (
        <form onSubmit={handleAdd}>
            <input value={value} onChange={handleChange} />
            <button type="submit" disabled={addDisabled}>
                Add
            </button>
            <TimerMessage onTimeout={() => setStatus('')}>{status}</TimerMessage>
        </form>
    );
}
