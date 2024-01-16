import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUp';
import LoginPage from './pages/Login';
import NotFoundPage from './pages/NotFound';
import UserContext from './contexts/current-user-context';
import { checkForLoggedInUser } from './adapters/auth-adapter';
import UsersPage from './pages/Users';
import UserPage from './pages/User';
import SideBar from './components/SideBar';
import LeetCodes from './pages/LeetCodes';

export default function App() {
  const { setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);

  return (
    <SideBar>
      <main>
        <Routes>
          <Route path="/" element={<LeetCodes />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </SideBar>
  );
}
