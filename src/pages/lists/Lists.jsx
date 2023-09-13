import React from "react";
import { Table } from "../../components/table/Table";
import { listsData, listsHeader } from "../../data/listData";

export const Lists = () => {
  return <Table headersMap={listsHeader} data={listsData} />;
};
