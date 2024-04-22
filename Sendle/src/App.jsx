import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import './App.css'
import Game from './Game.jsx';
function App() {

  return (
    <Container maxWidth="sm">
      <Box sx={{fontSize: '4em',textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center',}}>
        Sendle
      </Box>
      <Box>
        <Game />
      </Box>
    </Container>
  )
}
export default App
