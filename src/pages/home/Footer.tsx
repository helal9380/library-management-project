/** @format */

import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <nav>
        <h6 className="text-center text-xl font-semibold">Links</h6>
        <div className="flex justify-center items-center gap-10">
          <Link to={"/"}>Home</Link>
          <Link to={"/borrow"}>Borrow Summary</Link>
          <Link to={"/books"}>All Books</Link>
        </div>
      </nav>
      <div className="footer my-5 flex justify-center items-center sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
