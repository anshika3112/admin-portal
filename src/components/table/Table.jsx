import React from "react";
import "./table.css";

export const Table = ({ headersMap = [], data = [] }) => {
  return (
    <table className="table">
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
  return data.map((item, idx) => {
    return (
      <tr key={idx}>
        {Object.entries(headersMap).map(([key, value]) => {
          return <td key={key}>{item[key]}</td>;
        })}
      </tr>
    );
  });
}
