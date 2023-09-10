import React from "react";

export const Table = ({ headersMap = [], data = [] }) => {
  return (
    <table>
      <tbody>
        <tr>
          <TableHeader headersMap={headersMap} />
        </tr>
        <TableData headersMap={headersMap} data={data} />
      </tbody>
    </table>
  );
};

export function TableHeader({ headersMap = {} }) {
  return Object.entries(headersMap).map(([key, value]) => {
    return <th key={key}>{value}</th>;
  });
}

export function TableData({ headersMap = {}, data = [] }) {
  return data.map((item) => {
    return (
      <tr key={item.id}>
        {Object.entries(headersMap).map(([key, value]) => {
          return <td key={key}>{item[key]}</td>;
        })}
      </tr>
    );
  });
}
