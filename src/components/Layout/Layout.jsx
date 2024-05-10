import AppBar from '../AppBar/AppBar';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <AppBar />
            <main>{children}</main>  
        </div>
    );
};

export default Layout;
