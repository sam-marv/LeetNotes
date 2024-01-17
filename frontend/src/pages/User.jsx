import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CurrentUserContext from '../contexts/current-user-context';
import { getUser } from '../adapters/user-adapter';
import { getAllPages } from '../adapters/page-adapter';
import UpdateUsernameForm from '../components/UpdateUsernameForm';
import Editor from '../components/Editor';

export default function UserPage() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const [isEditorInitialized, setIsEditorInitialized] = useState(false);
  const [isNeedRerender, setIsNeedRerendered] = useState(false);
  const [prevNotes, setPrevNotes] = useState([])

  const handleEditorButtonClick = () => {
    if (!isEditorInitialized) {
      setIsEditorInitialized(true);
    }
    // setIsEditorVisible(!isEditorVisible);
  };

  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);

  useEffect(() => {
    const loadUser = async () => {
      const [user, error] = await getUser(id);
      if (error) return setErrorText(error.message);
      setUserProfile(user);
    };

    loadUser();
  }, [id]);

  useEffect(() => {
    const setNotes = async () => {
      const bar = await getAllPages(id);
      setPrevNotes(bar);
      console.log(bar)
    }
    setNotes()

  }, []);

  

  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  // What parts of state would change if we altered our currentUser context?
  // Ideally, this would update if we mutated it
  // But we also have to consider that we may NOT be on the current users page
  const profileUsername = isCurrentUserProfile
    ? currentUser.username
    : userProfile.username;

  return (
    <>
      <h1>{profileUsername}</h1>
      <p>If the user had any data, here it would be</p>
      <p>Fake Bio or something</p>
      <p>yeh</p>
      <p>Thats that</p>

      <button onClick={handleEditorButtonClick}>
        {true ? 'init editor' : 'Show Editor'}
      </button>

      {isEditorInitialized && <Editor />}

      {/* {!!isCurrentUserProfile && (
        <UpdateUsernameForm
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )} */}
    </>
  );
}
