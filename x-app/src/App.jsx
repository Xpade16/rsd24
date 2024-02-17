import AppDrawer from "./components/AppDrawer";
import Header from "./components/Header";
import { useUIState } from "./providers/UIStateProvider";
import { CssBaseline } from "@mui/material";

export default function App() {

  const { openDrawer, setOpenDrawer } = useUIState();
  return <>
    <AppDrawer />
    <Header/>
    <CssBaseline/>
  </>
}