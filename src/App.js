import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import HomePage from './Pages/HomePage/HomePage';
const Layouts = lazy(() => import('./Components/Layouts/Layouts'));

export default function App() {
  return (
    <>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route
              path="/"
              index
              // element={<PrivateRout component={Contact} />}
              element={<HomePage />}
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
