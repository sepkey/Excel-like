// import React from "react";
// import clsx from "clsx";
// import { makeStyles, useTheme } from "@mui/styles";
// import Drawer from "@mui/material/Drawer";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// // import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Box from "@mui/material/Box";

// import MenuIcon from "@mui/icons-material/Menu";
// import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import InboxIcon from "@mui/icons-material/Inbox";
// import MailIcon from "@mui/icons-material/Mail";
// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   // root: {
//   //   display: "flex",
//   // },

//   menuButton: {
//     marginRight: 36,
//   },
//   hide: {
//     display: "none",
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: "nowrap",
//   },
//   drawerOpen: {
//     width: drawerWidth,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   drawerClose: {
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     overflowX: "hidden",
//     width: theme.spacing(7) + 1,
//     [theme.breakpoints.up("sm")]: {
//       width: theme.spacing(9) + 1,
//     },
//   },
//   toolbar: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
// }));

// export default function MiniDrawer() {
//   const classes = useStyles();
//   const theme = useTheme();

//   return (
//       {/* <CssBaseline /> */}

//       <Drawer
//         variant="permanent"
//         className={clsx(classes.drawer, {
//           [classes.drawerOpen]: open,
//           [classes.drawerClose]: !open,
//         })}
//         classes={{
//           paper: clsx({
//             [classes.drawerOpen]: open,
//             [classes.drawerClose]: !open,
//           }),
//         }}
//       >
//         <div className={classes.toolbar}>
//           <IconButton>
//             {theme.direction === "rtl" ? (
//               <ChevronRightIcon />
//             ) : (
//               <ChevronLeftIcon />
//             )}
//           </IconButton>
//         </div>
//         <Divider />
//         <List>
//           {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {["All mail", "Trash", "Spam"].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <main className={classes.content}>
//         <div className={classes.toolbar} />
//         nnnnnnnnnnnn
//       </main>
//     </div>
//   );
// }

// // appBarShift: {
// //   marginLeft: drawerWidth,
// //   width: `calc(100% - ${drawerWidth}px)`,
// //   transition: theme.transitions.create(["width", "margin"], {
// //     easing: theme.transitions.easing.sharp,
// //     duration: theme.transitions.duration.enteringScreen
// //   })
// // },

///////////////////////////////////////////////////////////////////////////

// import {
//   AppBar,
//   Divider,
//   Drawer,
//   IconButton,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemIcon,
//   CssBaseline,
// } from "@mui/material";
// import React from "react";
// import { Toolbar } from "@mui/material";
// import bgImg from "./assets/HeaderTexture.png";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import MenuIcon from "@mui/icons-material/Menu";
// import { Typography } from "@mui/material";
// import { Box } from "@mui/system";
// import logo from "./assets/pasargad.png";
// import { theme } from "./theme";
// import AddCardIcon from "@mui/icons-material/AddCard";
// import CreditScoreIcon from "@mui/icons-material/CreditScore";
// import { Theme } from "@mui/material";
// const drawerWidth = 240;
// const MiniDrawer = () => {
//   const [open, setOpen] = React.useState(false);
//   const toggleDrawer = () => setOpen((o) => !o);
//   return (
//     <div style={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           backgroundImage: `url(${bgImg})`,
//           backgroundColor: "colorHeader.main",
//           backgroundSize: "auto 100%",
//           backgroundRepeat: "no-repeat",

//           zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
//           transition: (theme: Theme) =>
//             theme.transitions.create(["width", "margin"], {
//               easing: theme.transitions.easing.sharp,
//               duration: theme.transitions.duration.leavingScreen,
//             }),
//         }}
//         elevation={0}
//       >
//         <Toolbar>
//           <Typography sx={{ marginLeft: "auto" }} variant="h6" noWrap>
//             <Box display="flex" flexDirection="row" alignItems="center">
//               <Typography variant="title">
//                 کنترل کرکره های بانک پاسارگاد
//               </Typography>
//               <Box>
//                 {/* <LiveTvOutlinedIcon color="secondary" fontSize="large" /> */}
//                 <img src={logo} height={"40rem"} alt="Pasargad logo" />
//               </Box>
//             </Box>
//           </Typography>
//           <IconButton
//             color="colorLogo"
//             aria-label="open drawer"
//             onClick={toggleDrawer}
//             edge="start"
//             disableRipple
//             sx={{ marginLeft: "auto" }}
//           >
//             {open ? <ChevronLeftIcon /> : <MenuIcon />}
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         anchor="right"
//         variant="permanent"
//         sx={
//           open
//             ? {
//                 width: drawerWidth,
//                 flexShrink: 0,
//                 whiteSpace: "nowrap",
//                 transition: (theme: Theme) =>
//                   theme.transitions.create("width", {
//                     easing: theme.transitions.easing.sharp,
//                     duration: theme.transitions.duration.enteringScreen,
//                   }),
//               }
//             : {
//                 flexShrink: 0,
//                 whiteSpace: "nowrap",
//                 transition: (theme: Theme) =>
//                   theme.transitions.create("width", {
//                     easing: theme.transitions.easing.sharp,
//                     duration: theme.transitions.duration.leavingScreen,
//                   }),
//                 overflowX: "hidden",
//                 width: (theme: Theme) => theme.spacing(7) + 1,
//                 // [theme.breakpoints.up("sm")]: {
//                 //   width: theme.spacing(9) + 1,
//                 // },
//               }
//         }
//       >
//         <div
//           styles={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "flex-end",
//             padding: (theme: Theme) => theme.spacing(0, 1),

//             // ...theme.mixins.toolbar,
//           }}
//         >
//           <IconButton disableRipple>
//             {theme.direction === "rtl" ? (
//               <ChevronRightIcon />
//             ) : (
//               <ChevronLeftIcon />
//             )}
//           </IconButton>
//         </div>
//         <Divider />
//         <List>
//           {["Create", "Trash"].map((text, index) => (
//             <ListItem button key={text} disableRipple>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <AddCardIcon /> : <CreditScoreIcon />}
//                 {/* <MailIcon /> */}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <main>
//         <div
//           styles={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "flex-end",
//             // padding: theme.spacing(0, 1),
//             // ...theme.mixins.toolbar,
//           }}
//         />
//         nnnnnnnnnnnnnnn
//       </main>
//     </div>
//   );
// };

// export default MiniDrawer;

//////////////////////////////////////////////////////////////////

///////////////
////////////////
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import bgImg from "./assets/HeaderTexture.png";
import AddCardIcon from "@mui/icons-material/AddCard";
import CreditScoreIcon from "@mui/icons-material/CreditScore";

const drawerWidth = 180;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          backgroundImage: `url(${bgImg})`,
          backgroundColor: "colorHeader.main",
          backgroundSize: "auto 100%",
          backgroundRepeat: "no-repeat",
        }}
        position="fixed"
        elevation={0}
        open={open}
      >
        <Toolbar>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton> */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginLeft: "auto",
            }}
          >
            <Typography variant="h6" noWrap component="div">
              کنترل کرکره های شعب بانک پاسارگاد
            </Typography>
            <IconButton
              disableRipple
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              edge="start"
            >
              {open ? (
                <ChevronLeftIcon color="colorLogo" />
              ) : (
                <MenuIcon color="colorLogo" />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* {open ? (
        <IconButton
          aria-label="open drawer"
          component="label"
          edge="start"
          onClick={handleDrawerClose}
          style={{
            position: "absolute",
            top: "3.2rem",
            zIndex: 9999,
            right: `${drawerWidth - 15}px`,
            background: "#fafafa",
            // background: "#2f4858",
            border: "1px solid #ffb82a",
          }}
        >
          <ChevronLeftIcon color="colorLogo" />
        </IconButton>
      ) : (
        <IconButton
          onClick={handleDrawerOpen}
          color="primary"
          aria-label="open drawer"
          component="label"
          edge="start"
          style={{
            position: "absolute",
            top: "3.2rem",
            right: "48px",
            zIndex: 9999,
            background: "#2f4858",
          }}
        >
          <ChevronRightIcon color="colorLogo" />
        </IconButton>
      )} */}
      <Drawer anchor="right" variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["New branch", "Edit branch"].map((text, index) => (
            <ListItemButton
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {index % 2 === 0 ? <CreditScoreIcon /> : <AddCardIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph></Typography>
      </Box>
    </Box>
  );
}
