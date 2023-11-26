"use client";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Container as Cont } from "../layouts/Container";
import logoImg from "@/public/images/logo.png";
import logolargeImg from "@/public/images/logolarge.png";
import Image from "next/image";

const pages = ["Home", "Team", "Contact", "Careers"];

function CustomNavbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Cont className="2xl:!pt-4 !pt-0 !px-0">
      <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Image src={logoImg} alt="logo" className="flex md:hidden" />
            <Image
              src={logolargeImg}
              alt="logo"
              className="hidden md:flex ml-10"
            />
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", gap: "1.5rem" },
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "#242331", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                flexGrow: 0,
                justifyContent: "flex-end",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                sx={{ border: "2px solid #0C5BC6" }}
                className="text-darkblue mr-10 font-medium text-lg capitalize"
              >
                Sign In
              </Button>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon className="text-[#0B0757]" fontSize="large" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none", width: "100%" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    sx={{
                      paddingLeft: "40px",
                      paddingRight: "140px",
                      marginBlock: "10px",
                    }}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  sx={{ border: "2px solid #0C5BC6" }}
                  className="text-darkblue ml-10 my-3 font-medium text-base capitalize"
                >
                  Sign In
                </Button>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Cont>
  );
}
export default CustomNavbar;
