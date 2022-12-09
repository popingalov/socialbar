import React, { useId, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
const Global = createGlobalStyle`
* {
       margin:0;
       padding:0;
       box-sizing:border-box;
       }`;

function App() {
  return (
    <>
      <Global />
      <Suspense fallback={<p>Крутий спінер</p>}>
        <Routes>
          <Route path="/" element={<h1>Welcome</h1>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
