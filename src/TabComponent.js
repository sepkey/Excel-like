import React from "react";
import { Tabs, Tab } from "@mui/material";
import { useState } from "react";

const TabComponent = () => {
  const [page, setPage] = useState(0);
  return (
    <>
      <Tabs
        indicatorColor="secondary"
        textColor="inherit"
        value={page}
        onChange={(e, val) => setPage(val)}
      >
        <Tab label="react " />
        <Tab label="vue " />
        <Tab label="angular " />
      </Tabs>
    </>
  );
};

export default TabComponent;
