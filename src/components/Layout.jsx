import Header from './Header';
import Content from './Content';
import Owner from './Owner';
import User from './User';
import Admin from './Admin';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Layout = () => {
  const [userData, setUserData] = useState([
    { id: 1, name: 'เอโดงาวะ', lastname: 'โคนัน', position: 'เป็นนักสืบ' },
    { id: 2, name: 'โมริ', lastname: 'โคโกโร่', position: 'ยอดนักสืบ' },
  ]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/user" element={<User userData={userData} />} />
        <Route
          path="/admin"
          element={<Admin userData={userData} setUserData={setUserData} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
