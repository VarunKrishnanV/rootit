import Container from '@mui/material/Container';
import "../css/header.css"

function Header() {
    return (
        <div className="header">
            <Container maxWidth="lg" className="header__container">
                <div className="header__content">
                    <h1 className="text-xl">
                        <span className="text-gradient">About</span> Us
                    </h1>
                    <p className="header__description text-md">Our story, our culture, your future</p>
                </div>
                <div className="header__loader">
                    <img className="" src="https://www.rootit.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FscrollGif.e96e3ed9.gif&w=1080&q=75" alt="" />
                </div>
            </Container>
        </div>
    )
}

export default Header