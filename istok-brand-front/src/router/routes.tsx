import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes_elements';

const RoutesComponent: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {Object.entries(ROUTES).map(([path, element]) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;