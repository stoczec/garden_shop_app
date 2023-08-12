import {
  MainPage,
  AllProductsPage,
  AllSalesPage,
  CategoriesPage,
  ProductsByCategoriesPage,
  ProductPage,
  CartPage,
  NotFoundPage,
} from './pages/index';

export const routes = [
  { path: 'index', name: 'MainPage', element: MainPage },
  { path: 'products', name: 'AllProductsPage', element: AllProductsPage },
  { path: 'products/:id', name: 'ProductPage', element: ProductPage },
  { path: 'sales', name: 'AllSalesPage', element: AllSalesPage },
  { path: 'categories', name: 'CategoriesPage', element: CategoriesPage },
  {
    path: '/categories/:id',
    name: 'ProductsByCategoriesPage',
    element: ProductsByCategoriesPage,
  },
  { path: '/cart', name: 'CartPage', element: CartPage },
  { path: '/*', name: 'NotFoundPage', element: NotFoundPage },
];
