import './Footer.css';

export const Footer = () => {

    return (
        <footer>
            <div className="width1200">
                <div id="footer-links">
                    <a href="#">Home</a>
                    <a href="#">Terms and Conditions</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Collection Statement</a>
                    <a href="#">Help</a>
                    <a href="#">Manage Account</a>
                </div>
                <p>Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.</p>
                <div id="media-app">
                    <div id="social">
                        <a href="#"><img src="../../assets/social/facebook-white.svg" alt="" /></a>
                        <a href="#"><img src="../../assets/social/twitter-white.svg" alt="" /></a>
                        <a href="#"><img src="../../assets/social/instagram-white.svg" alt="" /></a>
                    </div>
                    <div id="app">
                        <a href="#"><img src="../../assets/store/app-store.svg" alt="" /></a>
                        <a href="#"><img src="../../assets/store/play-store.svg" alt="" /></a>
                        <a href="#"><img src="../../assets/store/windows-store.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}