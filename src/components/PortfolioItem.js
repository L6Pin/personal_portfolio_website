import "../assets/styles/components/PortfolioItem.scss";
import item_bg from "../assets/images/proj.png";

const PortfolioItem = () => {
  return (
    <div className="portfolioItem">
      <div className="item-content">
        <i class="fab fa-github fa-2x"></i>
        <i class="fab fa-linkedin-in fa-2x"></i>
        <p className="technologies">HTML, CSS, REACT, REDUX</p>
        <h2 className="item-name">Faculty Faults Reporting</h2>
        <p className="item-description">
          Web application for reporting problems in an organisation
        </p>
        <p className="item-button">Show me more</p>
      </div>
      <div className="item-number-container">
        <p className="number">01</p>
        <div className="number-line"></div>
        <p className="number-text">PORTFOLIO</p>
      </div>
      <img className="item-picture" src={item_bg} alt="" />
    </div>
  );
};

export default PortfolioItem;
