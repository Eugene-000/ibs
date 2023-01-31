import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Catalog } from '../../pages/Catalog/Catalog';
import { Detailed } from '../../pages/Detailed/Detailed';
import { PATH_INDEX } from '../../constants';
import { PATH_DETAILED } from '../../constants';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={PATH_INDEX} element={<Catalog />} />
          <Route path={PATH_DETAILED} element={<Detailed/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
