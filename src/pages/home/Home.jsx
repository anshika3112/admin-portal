import React from "react";
import { Table } from "../../components/table/Table";
import { homePageHeaders, homepageData } from "../../data/homePageData";

export const Home = () => {
  return <Table headersMap={homePageHeaders} data={homepageData} />;
};
