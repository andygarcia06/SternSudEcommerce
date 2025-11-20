import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import Header from './components/feature/Header';
import Footer from './components/feature/Footer';

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
