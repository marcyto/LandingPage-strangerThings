
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/auth';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
