import List from '@mui/material/List';
import { NavLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import LoginIcon from '@mui/icons-material/Login';
import AddIcon from '@mui/icons-material/Add';
import ListItemText from '@mui/material/ListItemText';

export default function LogSign() {
  return (
    <List className="log">
      {['Log In', 'Sign In'].map((text, index) => (
        <NavLink to={index % 2 === 0 ? '/login' : '/sign-up'} key={text}>
          <ListItem key={text}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <LoginIcon /> : <AddIcon />}
              </ListItemIcon>

              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        </NavLink>
      ))}
    </List>
  );
}
