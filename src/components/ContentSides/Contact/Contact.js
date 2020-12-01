import React from 'react'
import homeImage from '../../../assets/home-image/home2-min.png';
import instagramIcon from '../../../assets/icons/instagram.png';
import linkedInIcon from '../../../assets/icons/linkedIn.png';
import styles from './Contact.module.css';
const contact = () =>{
return(
    <div className={styles.Contact}>
        <div className={styles.Submenu}>
        <img className={styles.Image} src={homeImage} />
        <div className={styles.Text}>
            <p className={styles.Margin}>
        <p>Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles,
             pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor,
              o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum,
             necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto..</p>
        <p>Odwiedz moje media spolecznosciowe: </p>
        
        </p>
        
            <div className={styles.Icons}>
                <a href="https://www.instagram.com/pskurtka/?hl=pl">
                    <img className={styles.Icon} src={instagramIcon}/>
                </a>
                <a href="https://www.linkedin.com/in/piotr-skoupy-4014851a2/">
                    <img className={styles.Icon} src={linkedInIcon}/>
                </a>
            </div>
        </div>
        </div>
    </div>
);
}

export default contact;