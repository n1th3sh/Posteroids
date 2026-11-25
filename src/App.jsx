import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import WallPosters from './WallPosters';
import Polaroids from './Polaroids';
import AddtoCart from './AddtoCart';
import ViewCard from './ViewCard';
import SearchResults from './SearchResults';
import Header from './Header';
import { AuthProvider } from './auth/AuthContext';
import { LoginPage, OAuthCallbackPage, RegisterPage, VerifyEmailPage } from './auth/AuthPages';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/WallPosters" element={<WallPosters />} />
          <Route path="/Polaroids" element={<Polaroids />} />
          <Route path="/ViewCard/:category/:id" element={<ViewCard />} />
          <Route path="/AddtoCart" element={<AddtoCart />} />
          <Route path="/Search" element={<SearchResults />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />
          <Route path="/auth/callback" element={<OAuthCallbackPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
