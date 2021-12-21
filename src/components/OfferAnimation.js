import "../styles/OfferAnimation.css";
import OfferDeploySVG from "./svg/OfferDeploySVG";
import OfferLandingPageSVG from "./svg/OfferLandingPageSVG";
import OfferSpaSVG from "./svg/OfferSpaSVG";

function OfferAnimation() {
  return (
    <div>
      <div className="offer_cnt">
        <div className="offer_icon_cnt landingPage_icon">
          <OfferLandingPageSVG />
        </div>
        <div className="offer_icon_cnt spa_icon">
          <OfferSpaSVG />
        </div>
        <div className="offer_icon_cnt deploy_icon">
          <OfferDeploySVG />
        </div>
      </div>
    </div>
  );
}

export default OfferAnimation;
