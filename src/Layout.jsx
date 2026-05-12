import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    List,
    ListItemButton,
    ListItemText
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Layout() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const goTo = (path) => {
        navigate(path);
        setOpen(false);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" sx={{ ml: 2 }}>
                        Monday Mail
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer open={open} onClose={() => setOpen(false)}>
                <List sx={{ width: 200 }}>
                    <ListItemButton onClick={() => goTo("/")}>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                    <ListItemButton onClick={() => goTo("/about")}>
                        <ListItemText primary="About" />
                    </ListItemButton>
                    <ListItemButton onClick={() => goTo("/contact")}>
                        <ListItemText primary="Contact" />
                    </ListItemButton>
                </List>
            </Drawer>

            <Outlet />
        </>
    );
}