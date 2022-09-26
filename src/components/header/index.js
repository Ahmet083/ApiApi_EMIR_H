const Header = () => {
  return (
    <div className="container py-3">
      <header>
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
          <a
            href="#/"
            className="d-flex align-items-center text-dark text-decoration-none"
          >
            <span className="fs-4">API TUTORIOL</span>
          </a>
          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <a className="btn btn-primary me-3 py-2 " href="#/login">
              Login
            </a>
            <a
              className="btn btn-primary me-3 py-2  text-decoration-none"
              href="#/register"
            >
              Register
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
