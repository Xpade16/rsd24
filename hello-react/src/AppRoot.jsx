import Header from "./pages/Header";
import { Container, Box, CircularProgress } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function AppRoot({ list, clear, isLoading }) {

  return <div role='main'>
    <Header
      count={list.filter(item => !item.done).length}
      clear={clear}
    />
    <Container maxWidth='sm' sx={{ mt: 4 }}>
      {isLoading ? <Box sx={{ display: 'flex', height: 200, alignItems: "center", justifyContent: "center" }}><CircularProgress></CircularProgress></Box> : <Outlet />}
    </Container>
  </div>
}