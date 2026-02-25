export default function Table({ data }) {
  if (!data || data.length === 0) return <p>No data </p>;

  const headers = Object.keys(data[0]);

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          {headers.map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map((key) => (
              <td key={key}>{row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}