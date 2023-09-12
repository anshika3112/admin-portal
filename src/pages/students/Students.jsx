import React from "react";
import { Table } from "../../components/table/Table";
import { studentsData, studentsHeader } from "../../data/studentsPageData";

export const Students = () => {
  return <Table headersMap={studentsHeader} data={studentsData} />;
};
