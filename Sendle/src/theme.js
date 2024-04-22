import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import Box from '@mui/system/Box';

// Create a theme instance.
const darkTheme = createTheme({
    palette:  {
        mode: 'dark',
    },
});

export default darkTheme;