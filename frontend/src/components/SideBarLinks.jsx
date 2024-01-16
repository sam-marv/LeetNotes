import { useContext } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import AddIcon from '@mui/icons-material/Add';
import ListItemText from '@mui/material/ListItemText';
import { NavLink, useNavigate } from 'react-router-dom';

import List from '@mui/material/List';
import LoginIcon from '@mui/icons-material/Login';
import { logUserOut } from '../adapters/auth-adapter';
import CurrentUserContext from '../contexts/current-user-context';

export default function SidebarLinks() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const handleClick = async () => {
    logUserOut();
    setCurrentUser(null);
    navigate('/');
  };

  return (
    <List>
      <NavLink to="/">
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>

            <ListItemText primary={'LeetCode Problems'} />
          </ListItemButton>
        </ListItem>
      </NavLink>

      {currentUser ? (
        <>
          <NavLink to={`/users/${currentUser.id}`}>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>

                <ListItemText primary={'Saved Problems'} />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <button onClick={handleClick}>Log Out</button>
        </>
      ) : (
        <List>
          {['Log In', 'Sign Up'].map((text, index) => (
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
      )}
    </List>
  );
}
