import { useLazyQuery, gql } from "@apollo/client";
import { useRef } from "react";

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

export default function AddCountry() {
    const [getCountry, { loading, error, data }] = useLazyQuery(GET_COUNTRY);
    const inputRef = useRef();

    return (
        <div>
            <input ref={inputRef} />
            <button
                onClick={() =>
                    getCountry({ variables: { code: inputRef.current.value } })
                }
            >
                Add
            </button>
            {data?.country?.name}
        </div>
    );
}
