export type TableType = {
  columns: Array<string>;
  rows: Array<object>;
};

export const Table = ({ columns, rows }: TableType) => {
  return (
    <>
      <table className="w-full pt-8 pb-10 px-6 md:px-10 shadow-md rounded-lg">
        <thead>
          <tr className="border-b border-neutral-600">
            {columns?.map((column, index) => (
              <th className="p-2 text-center" key={index}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        {!!rows.length && (
          <tbody>
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
        )}
      </table>
      <div className="w-full flex justify-center items-center p-4 text-white">
        {!rows.length && <h2>Nenhum cliente foi encontrado</h2>}
      </div>
    </>
  );
};
