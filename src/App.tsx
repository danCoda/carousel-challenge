import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import { theme } from "./styles/theme";
import { Layout } from "./components/Layout/Layout";
import { Carousel } from "./components/Carousel";
import { Program } from "./components/Program/Program";
import { ProgramProvider } from "./context/ProgramContext";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ProgramProvider>
          <GlobalStyle />
          <Layout>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <h1>Movie & TV Show Collection</h1>
                    <Carousel />
                  </>
                }
              />
              <Route path="/program/:id" element={<Program />} />
            </Routes>
          </Layout>
        </ProgramProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
