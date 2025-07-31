import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import allPaths from '../../Config/paths.jsx';
import { MoreVert } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { bgColor } from '../../Utils/constants'; // Import bgColor for consistency

export default function SideMenu() {
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setOpen(false); // Close drawer after navigation
  };

  // Effect to prevent body scrolling when the drawer is open
  // This useEffect is now less critical for the padding issue, but good for general scroll lock
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Clean up the style when the component unmounts or drawer closes
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const DrawerList = (
    // Updated Tailwind class for background color to match the new drawer color
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} className="bg-slate-700 h-full">
      <List>
        <ListItem onClick={() => handleNavigation(allPaths.FUNDMANAGEMENT)} className="rounded-md">
          <Typography sx={{ fontSize: 12 }} variant="body2" className="text-white text-base font-medium hover:text-blue-300">Funds</Typography>
        </ListItem>
        <ListItem onClick={() => handleNavigation(allPaths.PORTFOLIO)} className="rounded-md">
          <Typography sx={{ fontSize: 12 }} variant="body2" className="text-white text-base font-medium hover:text-blue-300">Portfolio</Typography>
        </ListItem>
        <ListItem onClick={() => handleNavigation(allPaths.GEO_FOCUS)} className="rounded-md">
          <Typography sx={{ fontSize: 12 }} variant="body2" className="text-white text-base font-medium hover:text-blue-300">Mart</Typography>
        </ListItem>
        <ListItem onClick={() => handleNavigation(allPaths.CONTACT)} className="rounded-md">
          <Typography sx={{ fontSize: 12 }} variant="body2" className="text-white text-base font-medium hover:text-blue-300">Contact Us</Typography>
        </ListItem>
        <ListItem className="rounded-md">
          {/* Corrected onClick handler for the close button */}
          <Button sx={{ fontSize: 12 }} className="text-white text-base font-medium hover:text-blue-300" onClick={toggleDrawer(false)}>Close</Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} className="text-white"><MoreVert /></Button> {/* Added text-white to button */}
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        variant="temporary" // Explicitly set variant to temporary
        disableScrollLock={true} // <--- ADDED THIS PROP to prevent body padding
        PaperProps={{
          sx: {
            backgroundColor: '#334155', // Changed to a darker shade of grey (slate-700 equivalent)
            boxShadow: '0px 8px 10px -5px rgba(0,0,0,0.2), 0px 16px 24px 2px rgba(0,0,0,0.14), 0px 6px 30px 5px rgba(0,0,0,0.12)', // Add a shadow
          }
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
