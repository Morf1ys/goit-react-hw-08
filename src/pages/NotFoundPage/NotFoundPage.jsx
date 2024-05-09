
import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';
import defaultImage from '../../assets/404.png';


const NotFoundPage = () => (
  <div className={css['not-fon-page-cont']}>
    <img className={css.imegfound} src={defaultImage} alt="not found" />
    <h1>404 - Page not found</h1>
    <p>{`Sorry, the page you are looking for does not exist.`}</p>
    <Link to="/">Turn to the front side</Link>
  </div>
);

export default NotFoundPage;
