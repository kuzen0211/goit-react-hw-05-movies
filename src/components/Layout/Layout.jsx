import { AppBar } from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <nav>
      <AppBar />
      <Outlet />
    </nav>
  );
};

export default Layout;
