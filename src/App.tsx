import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './features/users/components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Users from './features/users/Users';
import Home from './features/users/Home';
import HomeLayout from './features/users/HomeLayout';
import UserDetails from './features/users/UserDetails';
import Footer from './features/users/components/Footer';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="/users/:userId" element={<UserDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
