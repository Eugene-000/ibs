import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Catalog } from '../../pages/Catalog/Catalog';
import { Detailed } from '../../pages/Detailed/Detailed';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Catalog />} />
          <Route path='/:id' element={<Detailed/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
