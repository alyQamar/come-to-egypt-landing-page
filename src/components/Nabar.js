import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const nabar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <div className="logo">
            <h1>
              ComeTo
              <span className="eg">Egypt</span>
            </h1>
          </div>
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <PageLinks parentClass="nav-links" itemClass="nav-link" />
        <SocialLinks parentClass="nav-icons" itemClass="nav-icon" />
      </div>
    </nav>
  );
};
export default nabar;
