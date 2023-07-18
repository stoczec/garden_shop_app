import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import { ProductContainer } from './components/ProductContainer/ProductContainer';
import { CategoryContaner } from './components/CategoryContaner/CategoryContaner';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        {routes.map(({ path, element }, idx) => {
          return <Route key={idx} path={path} Component={element} />;
        })}
      </Routes>
      {/* <CategoryContaner />
      <ProductContainer /> */}
      <Footer />
    </div>
  );
}

export default App;
