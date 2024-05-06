
import AppBar from '../AppBar/AppBar';
// import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <AppBar />
            <main>{children}</main>  
        </div>
    );
};

export default Layout;
