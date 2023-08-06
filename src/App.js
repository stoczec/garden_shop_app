import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import Layout from './components/Layout/Layout';
import React from 'react';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map(({ path, element }, idx) => {
            if (idx === 0) {
              return <Route key={idx} index Component={element} />;
            }
            return <Route key={idx} path={path} Component={element} />;
          })}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
