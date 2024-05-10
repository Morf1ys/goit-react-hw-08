import BackgroundImageHomePage from '../../components/BackgroundImageHomePage/BackgroundImageHomePage';
import css from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={css['cont-dev']}>
            <BackgroundImageHomePage />
            <div className={css['cont-txt']}>
                <h1 className={css['maine-title']}>Welcome to the Contact Book App</h1>
                <p className={css['txt-txt']}>This is the best place to manage your contacts safely and efficiently.</p>
            </div>
            <div >
                <p className={css.fot}>© 2024 Developed with by <span><a href="https://github.com/Morf1ys" target="_blank" rel="noopener noreferrer" title="Github profile" aria-label="Link to Github profile" className={css['link-dev']}><span>Dobrota</span></a></span></p>

            </div>
        </div>
    );
};

export default HomePage;
