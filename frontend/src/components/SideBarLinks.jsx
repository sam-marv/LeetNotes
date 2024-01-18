import { useContext, useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import CodeIcon from '@mui/icons-material/Code';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import ListItemText from '@mui/material/ListItemText';
import { NavLink, useNavigate } from 'react-router-dom';

import List from '@mui/material/List';
import LoginIcon from '@mui/icons-material/Login';
import { logUserOut } from '../adapters/auth-adapter';
import CurrentUserContext from '../contexts/current-user-context';
import './styles/sideBar.css';

export default function SidebarLinks() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = (index) => {
    setSelected(index === selected ? null : index);
  };

  const probIndex = 6;

  const savedIndex = 8;

  const handleClick = async () => {
    logUserOut();
    setCurrentUser(null);
    navigate('/');
  };

  // if (currentUser) {
  //   setSelected(savedIndex);
  // }

  return (
    <List>
      <NavLink to="/">
        <ListItem>
          <ListItemButton
            sx={{
              borderRadius: '12px',
              backgroundColor:
                selected === probIndex
                  ? 'rgba(17, 150, 206, 0.3)'
                  : 'rgba(17, 150, 206, 0.8)',
              ':hover': {
                backgroundColor: 'lightblue',
              },
              '&:active': {
                backgroundColor: 'rgba(17, 150, 206, 0.3)',
              },
            }}
            onClick={() => handleItemClick(probIndex)}
          >
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary={'LeetCode Problems'} />
          </ListItemButton>
        </ListItem>
      </NavLink>

      {currentUser ? (
        <>
          <NavLink to={`/users/${currentUser.id}`}>
            <ListItem>
              <ListItemButton
                sx={{
                  borderRadius: '12px',
                  backgroundColor:
                    selected === savedIndex
                      ? 'rgba(17, 150, 206, 0.3)'
                      : 'rgba(17, 150, 206, 0.8)',
                  ':hover': {
                    backgroundColor: 'lightblue',
                  },
                  '&:active': {
                    backgroundColor: 'rgba(17, 150, 206, 0.3)',
                  },
                }}
                onClick={() => handleItemClick(savedIndex)}
              >
                <ListItemIcon>
                  <TextSnippetIcon />
                </ListItemIcon>

                <ListItemText primary={'Saved Problems'} />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <ListItemButton
            sx={{
              borderRadius: '12px',
              width: '70%',
              margin: '20px auto',
              textAlign: 'center',
              backgroundColor: 'rgba(17, 150, 206, 0.8)',
              ':hover': {
                backgroundColor: 'rgba(17, 150, 206, 0.3)',
              },
            }}
            onClick={handleClick}
          >
            <p style={{ margin: '0 auto' }}>Log Out</p>
          </ListItemButton>
        </>
      ) : (
        <List>
          {['Log In', 'Sign Up'].map((text, index) => (
            <NavLink to={index % 2 === 0 ? '/login' : '/sign-up'} key={text}>
              <ListItem key={text}>
                <ListItemButton
                  sx={{
                    borderRadius: '12px',
                    backgroundColor:
                      selected === index
                        ? 'rgba(17, 150, 206, 0.3)'
                        : 'rgba(17, 150, 206, 0.8)',
                    ':hover': {
                      backgroundColor: 'lightblue',
                    },
                    '&:active': {
                      backgroundColor: 'rgba(17, 150, 206, 0.3)',
                    },
                  }}
                  onClick={() => handleItemClick(index)}
                >
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
