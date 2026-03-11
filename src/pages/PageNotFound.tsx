import Footer from '../components/Footer.tsx';
import Logo from '../components/Logo.tsx';

function PageNotFound() {
  return (
    <div className="page page--favorites-empty">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--favorites-empty">
        <section className="container">
          <h1>404. Page not found</h1>
          <a href="/">Вернуться на главную</a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default PageNotFound;
