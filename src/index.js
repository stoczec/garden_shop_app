import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
// IMP ========== STYLES ========== //
import GlobalStyle from './assets/styles/GlobalStyle';
import { ThemeProvider, styled } from 'styled-components';
import { theme } from './assets/styles/theme';
// IMP ========== COMPONENTS ========== //
import App from './App';

const Wrapper = styled.div`
  ${theme.mixins.wrapper}
`;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Wrapper>
    {/* Контейнер для всего приложения */}
    <ThemeProvider theme={theme}>
      {/* Доступ к глобальным стилям */}
      <Provider store={store}>
        <GlobalStyle /> {/* Применение глобальных стилей для тэгов */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </Wrapper>
);
