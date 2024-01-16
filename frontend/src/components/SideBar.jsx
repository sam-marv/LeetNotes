import { useContext } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './styles/sideBar.css';
import CurrentUserContext from '../contexts/current-user-context';
import SideBarLinks from './SideBarLinks';

const drawerWidth = 240;

export default function Sidebar({ children }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography variant="h6" padding="5px" textAlign="center">
          {currentUser ? `Welcome back ${currentUser.username}!` : 'Log In'}
        </Typography>
        <Divider />
        <SideBarLinks />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        {children}
      </Box>
    </Box>
  );
}
