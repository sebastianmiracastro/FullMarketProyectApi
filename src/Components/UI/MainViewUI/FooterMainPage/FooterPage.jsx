import './FooterPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

export const Footer=()=>{
    return(
        <>
        <div className='spaceFooter'></div>
        <div className='footer'>
            <h2>&copy; Copyright. All rights reserved.</h2>
            <div className='icons'>
                <FontAwesomeIcon icon={faFacebookF} /> {/* Redireccionar a https://www.facebook.com/profile.php?id=100076056153584  */}
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faWhatsapp} />
                <FontAwesomeIcon icon={faGooglePlusG} />
            </div>
        </div>
        </>
    );
}