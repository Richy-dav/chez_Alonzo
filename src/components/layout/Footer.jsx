import react from 'react';
function Footer  () {
    return(
        <>
        <footer>
            <div className="Social-icons">
                <ul>
                        <a href="https://www.facebook.com/AlonzoRestaurant01" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="https://www.tiktok.com/@AlonzoRestaurant01" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-tiktok"></i>
                        </a>
                        <a href="https://www.instagram.com/@AlonzoRestaurant01" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                        </a>
                </ul>
            </div>
            <p>Copyright <span lang='fr'>Chez Alonzo</span> 2026</p>
        </footer>
        </>
    );
}

export default Footer;