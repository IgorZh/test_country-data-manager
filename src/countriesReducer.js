export const CountriesActionTypes = {
    add: "add",
    delete: "delete",
};

export function countriesReducer(state, action) {
    switch (action.type) {
        case CountriesActionTypes.add:
            return [...state, action.payload].sort((lhs, rhs) =>
                sortAlphabetical(lhs.code, rhs.code)
            );
        case CountriesActionTypes.delete:
            return state.filter(({ code }) => code !== action.payload);
        default:
            throw new Error("unknown action");
    }
}

function sortAlphabetical(lhs, rhs) {
    if (lhs < rhs) {
        return -1;
    }
    if (lhs > rhs) {
        return 1;
    }

    return 0;
}
