import { useContext, useState } from 'react';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import CurrentUserContext from '../contexts/current-user-context';
import { createUser } from '../adapters/user-adapter';
import LogSignForm from '../components/LogSignForm';
import Alert from '@mui/joy/Alert';

// Controlling the sign up form is a good idea because we want to add (eventually)
// more validation and provide real time feedback to the user about usernames and passwords
export default function SignUpPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // We could also use a single state variable for the form data:
  // const [formData, setFormData] = useState({ username: '', password: '' });
  // What would be the pros and cons of that?

  if (currentUser) return <Navigate to="/" />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    if (!username || !password) {
      setErrorText('Missing username or password');
      setTimeout(() => {
        setErrorText('');
      }, 5000);
      return;
    }

    const [user, error] = await createUser({ username, password });
    if (error) {
      setErrorText(error.message);
      setTimeout(() => {
        setErrorText('');
      }, 5000);
      return;
    }

    setCurrentUser(user);
    navigate('/');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  };

  return (
    <>
      <LogSignForm
        handleSubmit={handleSubmit}
        link={'/login'}
        type={'Sign Up'}
        condition={'Already have an account? Log in!'}
        onChange={handleChange}
      />
      {/* In reality, we'd want a LOT more validation on signup, so add more things if you have time
        <label htmlFor="password-confirm">Password Confirm</label>
        <input autoComplete="off" type="password" id="password-confirm" name="passwordConfirm" />
      */}

      {!!errorText && (
        <Alert variant="solid" color="danger">
          {errorText}
        </Alert>
      )}
    </>
  );
}
