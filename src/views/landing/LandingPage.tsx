import "./landing.css";
import { NavLink } from "react-router-dom";
import { Link, SvgIcon } from "@material-ui/core";
import LogoImg from "../../assets/logo.png";
import Gif from "../../assets/images/medusa-gif.gif";
import RiskFree from "../../assets/images/riskFree.svg";
import Treasury from "../../assets/images/treasury.svg";
import LP from "../../assets/images/lp.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as Medium } from "../../assets/icons/medium.svg";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-page-header">
        <img src={LogoImg} alt="" className="landing-page-logo" />
        <div className="access-dapp">
          <button className="open-dapp">
            <Link component={NavLink} id="presale" to="dashboard">
              Presale
            </Link>
          </button>
          <button className="open-dapp">
            <Link component={NavLink} id="open_dapp" to="dashboard">
              Open App
            </Link>
          </button>
        </div>
      </div>
      <div className="landing-page-description-container">
        <div className="landing-page-description">
          <p className="landing-page-description-text">BUILT ON TRON, POWERED BY YOU</p>
          <p className="landing-page-description-title">YIELD Guard</p>

          <p className="landing-page-description-details">Hold $YIELD earn up to X.XXX.XXX% APY</p>
          <p className="landing-page-description-details">Auto-staking & Auto-compounding</p> <br/>

            <button className="open-dapp">
          <a href="https://medium.com/@BurnBall/burn-ball-token-63c8f2f24ee0" target="_blank">Documentation  </a>
          </button>
        </div>
        <div className="landing-page-description-image">
          
        </div>
      </div>
      <div className="landing-page-autostaking">
        <p className="landing-page-section-title text-center">Yield Guard Farming Protocol</p>
        <div className="landing-page-autostaking-details">
          <div className="landing-page-autostaking-apy">
            <p className="landing-page-description-text">X.XXX.XXX%</p>
            <p className="landing-page-description-text">Fixed Staking APY</p>
          </div>
          <div className="landing-page-autostaking-about">
            <p className="landing-page-description-text">ABOUT</p>
            <p className="landing-page-autostaking-about-text">
              Yield Guard is transforming DeFi with the Yield Autostaking Protocol that delivers the industry’s
              highest seven figures APY, rebasing rewards every 10 minutes, and a simple buy-hold-earn system that grows
              your portfolio in your wallet, fast.
            </p>
          </div>
        </div>
      </div>
      <div className="tokenomics-container">
        <p className="landing-page-section-title text-center">Yield Guard Tokenomics Explained</p>
        <div className="tokenomics-cards">
          <div className="card">
            <img src={Treasury} alt="risk-free" className="card-img text-center" />
            <p className="text-center">Automatic LP</p>
            <p className="text-center">
              X% of the trading fees return to the liquidity ensuring $YIELD's increasing collateral value.
            </p>
          </div>
          <div className="card">
            <img src={LP} alt="risk-free" className="card-img text-center" />
            <p className="text-center">Treasury</p>
            <p className="text-center">
              X% of the purchases and X% of the sales go directly to the treasury which supports the RFV.
            </p>
          </div>
          <div className="card">
            <img src={RiskFree} alt="risk-free" className="card-img text-center" />
            <p className="text-center">Risk free value</p>
            <p className="text-center">
              X% of the trading fees are redirected to the RFV which helps sustain and back the staking rewards provided
              by the positive rebase.
            </p>
          </div>
        </div>
      </div>
      <div className="socials">
        <p className="landing-page-section-title text-center">KEEP IN TOUCH</p>
        <div className="social-networks">
          <Link href="https://twitter.com/medusafinance_" target="_blank">
            <SvgIcon className="svg-icon" component={Twitter} />
          </Link>
          <Link href="https://discord.gg/aTGvMeSZ" target="_blank">
            <SvgIcon className="svg-icon" component={Telegram} />
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
