import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import GlobalStyle from './assets/styles/GlobalStyle';
import { ThemeProvider, styled } from 'styled-components';
import { theme } from './assets/styles/theme';

// SCC ========== VARIABLES STYLED COMPONENTS ========== //
// SCC ========== STYLED COMPONENTS ========== //
const Wrapper = styled.div`
  ${theme.mixins.wrapper}
`;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Wrapper>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </Wrapper>
);
