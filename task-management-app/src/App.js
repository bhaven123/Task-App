import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Tasks from "./components/Tasks";

const App = () => {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#8892b0",
      },
      secondary: {
        main: "#ccd6f6",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Tasks />
    </ThemeProvider>
  );
};

export default App;
