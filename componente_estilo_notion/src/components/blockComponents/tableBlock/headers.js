export default function headers({columns}){

return <tr>
                    {columns.map((head) => (
                        <th key={crypto.randomUUID()}>{head}</th>
                    ))}
                </tr>
}
