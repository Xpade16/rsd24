import { Outlet } from "react-router-dom";
import AppDrawer from "./components/AppDrawer";
import Header from "./components/Header";
import { Alert, Box, Container, Snackbar, Fab } from "@mui/material";
import { useUIState } from "./providers/UIStateProvider";

export default function Layout(){
    const { openFeedback, setOpenFeedback, feedbackMessage } = useUIState();
    return(
        <Box>
            <AppDrawer/>
            <Header/>
            <Container maxWidth="sm" sx={{mt:5}}>
                <Outlet/>
            </Container>
            <Snackbar
				open={openFeedback}
				autoHideDuration={4000}
				onClose={() => {
					setOpenFeedback(false);
				}}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}>
				<Alert
					severity="info"
					variant="filled"
					sx={{ width: "100%" }}>
					{feedbackMessage}
				</Alert>
			</Snackbar>
        </Box>
    );
}