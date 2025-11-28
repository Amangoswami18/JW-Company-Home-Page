export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 pt-4 pb-3">
      <div className="container text-center">

        <h5 className="fw-semibold mb-2">JW Company</h5>

        <p className="small text-white-50 m-0">
          © {new Date().getFullYear()} JW Company. All rights reserved.
        </p>

        <div className="mt-2 small">
          <a href="#" className="text-white-50 text-decoration-none me-3">
            About
          </a>
          <a href="#" className="text-white-50 text-decoration-none me-3">
            Contact
          </a>
          <a href="#" className="text-white-50 text-decoration-none">
            Policies
          </a>
        </div>
      </div>
    </footer>
  );
}
