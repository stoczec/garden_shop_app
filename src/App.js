import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import { fetchProducts } from './store/slice/productSlice';
import { ProductContainer } from './components/ProductContainer/ProductContainer';
import { CategoryContaner } from './components/CategoryContaner/CategoryContaner';

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  // console.log(products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      <Routes>
        {routes.map(({ path, element }, idx) => {
          return <Route key={idx} path={path} Component={element} />;
        })}
      </Routes>
      <CategoryContaner />
      <ProductContainer />
    </div>
  );
}

export default App;
