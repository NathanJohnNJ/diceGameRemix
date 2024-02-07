import './footer.css'
import logo from '../images/logo.png'

const Footer=()=>{

    return(
        <footer className="footer">
            <div className="footerImgDiv">
            <a href="https://www.njtd.xyz"><img src={logo} alt="Logo" className="footerLogo"></img></a>
            </div>
            <div className="footerText">
                <p>If you like what you see, check out the rest of my portfolio at <a href="https://www.njtd.xyz/portfolio/developer" className="github">www.njtd.xyz</a></p>
                <p>You can also see what I'm currently up to on <a href="https://github.com/NathanJohnNJ" className="github">GitHub</a></p>
                <p>Thanks for checking out my website! I hope you've enjoyed it!</p>
                <p>See you again soon!</p>
            </div>
            <div className="footPrivacy">
                <a href="https://www.njtd.xyz/privacy" className="footPrivacyLink">PRIVACY</a>
            </div>
            <div className="footTerms">
                <a href="https://www.njtd.xyz/terms" className="footTermsLink">TERMS</a>
            </div>
        </footer>
    )
}

export default Footer;