import React, { useId, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import NavigationBar from './Components/NavigationBar';

function App() {
  return (
    <>
      <NavigationBar />
      <Suspense fallback={<p>Крутий спінер</p>}>
        <Routes>
          <Route path="/" element={<h1>Welcome</h1>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;