import React from 'react';
import { Link } from 'react-router-dom';

import { headerImage } from '../../assets/admin/images';

const Header = ({ title, subtitle, parent, current }) => {
  return (
    <>
      <div
        className="bg-image"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div className="bg-black-75">
          <div className="content content-top content-full text-center">
            <div className="py-3">
              <h1 className="h2 fw-bold text-white mb-2">{title}</h1>
              <h2 className="h4 fw-normal text-white-75 mb-0">{subtitle}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-body-light border-bottom">
        <div className="content py-1 text-center">
          <nav className="breadcrumb bg-body-light py-2 mb-0">
            <Link className="breadcrumb-item" to="/admin">
              DOA Ecommerce
            </Link>
            {parent ? (
              <>
                <Link className="breadcrumb-item" to={`/admin/${parent}`}>
                  {parent}
                </Link>
                <span className="breadcrumb-item active">{title}</span>
              </>
            ) : (
              <span className="breadcrumb-item active">{title}</span>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
