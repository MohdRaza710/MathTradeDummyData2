import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { Home as HomeIcon, People as PeopleIcon, ExpandLess, ExpandMore } from '@mui/icons-material';

const SideMenu = () => {
  const [open, setOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleSubMenuClick = () => {
    setOpenSubMenu(!openSubMenu);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
      }}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={handleSubMenuClick}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
          {openSubMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Active Users" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Inactive Users" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default SideMenu;
