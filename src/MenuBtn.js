import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import { Button, MenuItem } from "@mui/material";
import styled from "@emotion/styled";
const CostomizedMenu = styled(Menu)`
  color: #e84f14;
  :hover {
    color: #3928fe;
  }
`;

const MenuBtn = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Menu
      </Button>
      <Button variant="outlined" onClick={handleOpen}>
        Open Menu
      </Button>
      <CostomizedMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </CostomizedMenu>
    </>
  );
};

export default MenuBtn;
