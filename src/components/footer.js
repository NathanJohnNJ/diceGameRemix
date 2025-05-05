import './game.css'
import logo from '../images/logo.animated.svg';

export default function Footer(){

  return(
    <footer>
      <div className="footerImgDiv">
        <a href="https://www.njtd.xyz" target="_blank" rel="noreferrer"><img src={logo} alt="Logo" className="footerLogo rainbowBG"></img></a>
      </div>
      <div className="footerText">
          <p>If you like what you see, check out the rest of my portfolio at <a href="https://www.njtd.xyz/portfolio/developer" className="github" target="_blank" rel="noreferrer">www.njtd.xyz</a></p>
          <p>You can also see what I'm currently up to on <a href="https://github.com/NathanJohnNJ" className="github" target="_blank" rel="noreferrer">GitHub</a></p>
          <p>Thanks for checking out this game! I hope you've enjoyed it!</p>
          <p>See you again soon!</p>
      </div>
      <div className="footPrivacy">
          <a href="https://www.njtd.xyz/privacy" target="_blank" rel="noreferrer" className="footPrivacyLink">PRIVACY</a>
      </div>
      <div className="footTerms">
          <a href="https://www.njtd.xyz/terms" target="_blank" rel="noreferrer" className="footTermsLink">TERMS</a>
      </div>
    </footer>
  )
}