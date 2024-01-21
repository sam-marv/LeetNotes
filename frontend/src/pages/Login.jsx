import { useContext, useState } from 'react';
import Alert from '@mui/joy/Alert';
import { useNavigate, Navigate } from 'react-router-dom';
import { logUserIn } from '../adapters/auth-adapter';
import CurrentUserContext from '../contexts/current-user-context';
import './styles/login.css';
import LogSignForm from '../components/LogSignForm';

export default function LoginPage() {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState('');
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    const formData = new FormData(event.target);
    const [user, error] = await logUserIn(Object.fromEntries(formData));
    if (error) {
      setErrorText("User doesn't exist");
      setTimeout(() => {
        setErrorText('');
      }, 5000);
      return;
    }
    setCurrentUser(user);
    navigate(`/users/${user.id}`);
  };

  if (currentUser) return <Navigate to="/" />;

  return (
    <>
      <LogSignForm
        handleSubmit={handleSubmit}
        link={'/sign-up'}
        type={'Log In'}
        condition={"Don't Have an Account? Sign Up!"}
      />

      <br></br>
      <br></br>

      {!!errorText && (
        <Alert variant="solid" color="danger">
          {errorText}
        </Alert>
      )}
    </>
  );
}
