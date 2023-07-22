import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="container">
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
