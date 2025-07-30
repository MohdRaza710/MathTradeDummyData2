import { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { AccountCircle } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { MoreVert } from '@mui/icons-material';
import { bgColor } from '../../Utils/constants'; // Ensure this path is correct

// Import useNavigate from react-router-dom
import { useNavigate } from 'react-router-dom';
// Assuming allPaths is defined in a utility file, adjust path if needed
import allPaths from '../../Config/paths.jsx'; // Adjust this path if your paths file is elsewhere

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '1em',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    '& .css-1kcggdq-MuiInputBase-root .MuiInputBase-input': { 
        width: '20em' 
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '25ch',
        },
    },
}));

const HeaderAppBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    // Initialize useNavigate hook
    const navigate = useNavigate();

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    // Function to handle navigation
    const handleNavigation = (path) => {
        navigate(path);
        handleMenuClose(); // Close the menu after navigation
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={() => handleNavigation(allPaths.PORTFOLIO)}>Portfolio</MenuItem>
            <MenuItem onClick={() => handleNavigation(allPaths.ALGORITHM_INFO)}>Algorithm Info</MenuItem>
            {/* Assuming you have an ALGO_MART path or use a direct string */}
            <MenuItem onClick={() => handleNavigation(allPaths.ALGO_MART || '/algo-mart')}>Algo Mart</MenuItem> 
            <MenuItem onClick={() => handleNavigation(allPaths.CONTACT)}>Contact Us</MenuItem>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem> {/* Keep existing profile link */}
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {/* Add navigation items to mobile menu as well if desired */}
            <MenuItem onClick={() => handleNavigation(allPaths.PORTFOLIO)}>Portfolio</MenuItem>
            <MenuItem onClick={() => handleNavigation(allPaths.ALGORITHM_INFO)}>Algorithm Info</MenuItem>
            <MenuItem onClick={() => handleNavigation(allPaths.ALGO_MART || '/algo-mart')}>Algo Mart</MenuItem>
            <MenuItem onClick={() => handleNavigation(allPaths.CONTACT)}>Contact Us</MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <AccountCircle />
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ background: bgColor }}>
                <Toolbar>
                    <Typography className='mui-size logoHeading' onClick={() => handleNavigation(allPaths.HOME)} variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
                        MATHTRADE
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search ticker name' }} />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex', gap: '1em' } }}>
                        {/* Add main navigation links directly here for desktop view */}
                        <MenuItem  style={{fontSize: 15}} onClick={() => handleNavigation(allPaths.FUNDMANAGEMENT)}>Funds</MenuItem>
                        <MenuItem style={{fontSize: 15}} onClick={() => handleNavigation(allPaths.PORTFOLIO)}>Portfolio</MenuItem>
                        {/* <MenuItem style={{fontSize: 15}} onClick={() => handleNavigation(allPaths.ALGORITHM_INFO)}>Algorithm Info</MenuItem> */}
                        <MenuItem style={{fontSize: 15}} onClick={() => handleNavigation(allPaths.GEO_FOCUS)}>Mart</MenuItem>
                        <MenuItem style={{fontSize: 15}} onClick={() => handleNavigation(allPaths.CONTACT)}>Contact Us</MenuItem>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <MenuItem onClick={handleMobileMenuOpen}>
                            <MoreVert />
                        </MenuItem>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
};

export default HeaderAppBar;
