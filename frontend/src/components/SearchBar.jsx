import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchBar({ changeHandler }) {
  return (
    <Box
      sx={{
        maxWidth: '70%',
        margin: '60px auto',
        border: 'black 1px solid',
        borderRadius: '9px',
      }}
    >
      <TextField
        fullWidth
        onChange={changeHandler}
        sx={{
          border: '1px solid #fda116',
          borderRadius: '3px',
          color: 'aliceblue',
        }}
        InputProps={{
          style: {
            color: 'aliceblue',
            fontSize: '1rem',
          },
        }}
        color="warning"
      />
    </Box>
  );
}
