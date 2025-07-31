import { MenuItem } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SideMenu from '../SideMenu/SideMenu.jsx'
import { bgColor } from '../../Utils/constants';
import allPaths from '../../Config/paths.jsx';

import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    // Adjusted flexGrow for better spacing on smaller screens
    flexGrow: 0.5, // Further reduced to give more space to MATHTRADE on xs screens
    marginRight: theme.spacing(2),
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
        flexGrow: 0.5,
    },
    [theme.breakpoints.up('md')]: {
        flexGrow: 0.3,
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
    width: '100%',
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
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        // Assuming handleMenuClose is defined elsewhere or not strictly needed here
        // handleMenuClose();
    };


    return (
        <Box sx={{ flexGrow: 1 }} className="w-full">
            <AppBar sx={{ background: bgColor }} position="static" className="bg-slate-900 rounded-b-lg shadow-lg">
                <Toolbar className="flex justify-between items-center px-4 py-2 sm:px-6">
                    <Typography
                        className='text-white text-xl font-bold cursor-pointer mr-4 flex-shrink-0 logoHeading '
                        onClick={() => handleNavigation(allPaths.HOME)}
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            display: { xs: 'flex', sm: 'block' },
                            cursor: 'pointer',
                            minWidth: '120px', // Ensures MATHTRADE has enough minimum width
                            fontSize: '1.5rem',
                        }}
                    >
                        MATHTRADE
                    </Typography>

                    <Search className="flex-grow max-w-xs sm:max-w-sm md:max-w-md">
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search Ticker Name..."
                            inputProps={{ 'aria-label': 'search ticker name' }}
                            className="w-full"
                        />
                    </Search>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '1rem' }} className="items-center">
                        <MenuItem onClick={() => handleNavigation(allPaths.FUNDMANAGEMENT)} className="rounded-md">
                            <Typography variant="body2" className="text-white text-base font-medium hover:text-blue-300">Funds</Typography>
                        </MenuItem>
                        <MenuItem onClick={() => handleNavigation(allPaths.PORTFOLIO)} className="rounded-md">
                            <Typography variant="body2" className="text-white text-base font-medium hover:text-blue-300">Portfolio</Typography>
                        </MenuItem>
                        <MenuItem onClick={() => handleNavigation(allPaths.GEO_FOCUS)} className="rounded-md">
                            <Typography variant="body2" className="text-white text-base font-medium hover:text-blue-300">Mart</Typography>
                        </MenuItem>
                        <MenuItem onClick={() => handleNavigation(allPaths.CONTACT)} className="rounded-md">
                            <Typography variant="body2" className="text-white text-base font-medium hover:text-blue-300">Contact Us</Typography>
                        </MenuItem>
                    </Box>

                    <Box sx={{ display: { xs: 'flex', md: 'none' } }} className="flex-shrink-0">
                        <SideMenu />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default HeaderAppBar;
