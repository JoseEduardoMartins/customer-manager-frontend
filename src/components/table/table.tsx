export type TableType = {
  columns: Array<string>;
  rows: Array<object>;
};

export const Table = ({ columns, rows }: TableType) => {
  return (
    <table className="w-full bg-white pt-8 pb-10 px-6 md:px-10 shadow-md rounded-lg text-black">
      <thead>
        <tr className="border-b">
          {columns?.map((column, index) => (
            <th className="p-2 text-center" key={index}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {!rows.length && (
          <tr>
            <td>
              <h3>Nenhum contato existente</h3>
            </td>
          </tr>
        )}

        {rows?.map((row, index1) => {
          const values = Object.values(row);

          return (
            <tr key={index1}>
              {values?.map((value, index2) => (
                <td className="p-2 text-center" key={index2}>
                  {value}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
