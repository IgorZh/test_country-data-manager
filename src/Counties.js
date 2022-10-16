export default function Countries({ countries }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Currency</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {countries.map(({ code, name, currency, phone }) => (
                    <tr>
                        <td>{code}</td>
                        <td>{name}</td>
                        <td>{currency}</td>
                        <td>{phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
