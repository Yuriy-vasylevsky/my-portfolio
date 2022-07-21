import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store, persistor } from './redux/store';
import App from './App';
// import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import ContextNav from './context/contextNav';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

export default function Index() {
  const [showNav, setShowNav] = useState(false);

  return (
    <BrowserRouter>
      <ContextNav.Provider value={{ showNav, setShowNav }}>
        <App />
      </ContextNav.Provider>
    </BrowserRouter>
  );
}

root.render(
  <StrictMode>
    {/* <Provider store={store}> */}
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <Index />
    {/* </PersistGate> */}
    {/* </Provider> */}
  </StrictMode>,
);
