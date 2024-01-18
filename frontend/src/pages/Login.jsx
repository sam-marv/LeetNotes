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
    if (error) return setErrorText("User doesn't exist");
    setCurrentUser(user);
    navigate(`/users/${user.id}`);
  };

  if (currentUser) return <Navigate to="/" />;

  return (
    <>
      <LogSignForm
        handleSubmit={handleSubmit}
        link={'/sign-up'}
        type={'Log'}
        condition={'Dont Have an Account? Sign Up!'}
      />

      {!!errorText && <Alert color="danger">{errorText}</Alert>}
    </>
  );
}
