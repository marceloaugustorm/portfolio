export const Footer = () => {
  return (
    <div>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
              aria-label="Bootstrap"
            >
              <svg className="bi" width="30" height="24" aria-hidden="true">
                <use xlinkHref="#bootstrap" />
              </svg>
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">
              © 2025 Todos os Direitos Reservados, Inc
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
                <a href="https://www.instagram.com/_livitt?utm_source=ig_web_button_share_sheet&igsh=ZzVnc2Vxd3FtOHl5">
              <i className="bi bi-instagram" style={{ fontSize: "1.5rem", color: "black" }}></i>
              </a>
            </li>
            
          </ul>

        </footer>
      </div>
    </div>
  );
};
