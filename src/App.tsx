import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './assets/routes';
import CodeSandbox from './components/CodeSandbox';
import Home from './components/Home';
import Layout from './components/Layout';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          {routes.map(({ items, path }) => (
            <Route key={path} path={path}>
              {items.map((item) => (
                <Route
                  key={item.path}
                  path={item.path}
                  element={<CodeSandbox key={item.url} src={item.url} />}
                />
              ))}
            </Route>
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
