import { ThemeProvider } from "@material-ui/core/styles";
import { useEffect, useState, useCallback } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useTheme from "./hooks/useTheme";
import useSegmentAnalytics from "./hooks/useSegmentAnalytics";
import { shouldTriggerSafetyCheck } from "./helpers";
import { loadAppDetails } from "./slices/AppSlice";
import { loadAccountDetails } from "./slices/AccountSlice";
import { info } from "./slices/MessagesSlice";
import { TreasuryDashboard, Account, Calculator } from "./views";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import TopBar from "./components/TopBar/TopBar.jsx";
import NavDrawer from "./components/Sidebar/NavDrawer.jsx";
import Messages from "./components/Messages/Messages";
import NotFound from "./views/404/NotFound";
import { dark as darkTheme } from "./themes/dark.js";
import "./style.css";
import { useGoogleAnalytics } from "./hooks/useGoogleAnalytics";
import { useAppSelector } from "./hooks";
import LoadingSplash from "./components/Loading/LoadingSplash";

const drawerWidth = 280;
const transitionDuration = 969;

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: transitionDuration,
    }),
    height: "100%",
    overflow: "auto",
    marginLeft: drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: transitionDuration,
    }),
    marginLeft: 0,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
}));

function App() {
  useSegmentAnalytics();
  useGoogleAnalytics();
  const location = useLocation();
  const dispatch = useDispatch();
  const [theme] = useTheme();
  const classes = useStyles();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isSmallerScreen = useMediaQuery("(max-width: 980px)");
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const [address, setAddress] = useState(null);
  const [connected, setConnected] = useState(false);
  const [walletChecked, setWalletChecked] = useState(false);

  const isAppLoading = useAppSelector(state => state.app.loading);

 const initTronWeb = async () => {
  if (window.tronWeb && window.tronWeb.ready) {
    setConnected(true);
    console.log("Connected to TronLink, address:", window.tronWeb.defaultAddress.base58);
  } else {
    console.error("TronLink is not installed or connected.");
    alert("Please install TronLink to use this DApp.");
  }
};


  async function loadDetails(whichDetails: string) {

  }

  useEffect(() => {
    if (!walletChecked) {
      initTronWeb();
      setWalletChecked(true);
    }
  }, [walletChecked]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarExpanded(false);
  };

  const themeMode = darkTheme;

  useEffect(() => {
    if (isSidebarExpanded) handleSidebarClose();
  }, [location]);

  return (
    <ThemeProvider theme={themeMode}>
      <CssBaseline />
      {isAppLoading && <LoadingSplash />}
      <TopBar handleDrawerToggle={handleDrawerToggle} />
      <div className={`app ${isSmallerScreen && "tablet"} ${isSmallScreen && "mobile"} ${theme}`}>
        <Messages />
        <nav className={classes.drawer}>
          {isSmallerScreen ? (
            <NavDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
          ) : (
            <Sidebar />
          )}
        </nav>

        <div className={`${classes.content} ${isSmallerScreen && classes.contentShift}`} style={{ paddingTop: 64 }}>
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
