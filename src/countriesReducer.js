export const CountriesActionTypes = {
    add: "add",
    delete: "delete",
};

export function countriesReducer(state, action) {
    switch (action.type) {
        case CountriesActionTypes.add:
            return [...state, action.payload];
        case CountriesActionTypes.delete:
            return state.filter((country) => country.code === action.payload);
        default:
            throw new Error("unknown action");
    }
}
