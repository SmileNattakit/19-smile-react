import Header from './Header';
import Content from './Content';
import Owner from './Owner';
import User from './User';
import Admin from './Admin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
