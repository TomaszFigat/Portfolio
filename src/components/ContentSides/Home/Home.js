import React from 'react';

import styles from './Home.module.css';
const home=()=>{

    return(
    <div className={styles.Home}>
        {/* <img src={homeImage}></img> */}
        <div className={styles.Text}>
            <p>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym.
                 Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.
                 Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym.</p>
            <p>W przeciwieństwie do rozpowszechnionych opinii, Lorem Ipsum nie jest tylko przypadkowym tekstem.
                 Ma ono korzenie w klasycznej łacińskiej literaturze z 45 roku przed Chrystusem,
                 czyli ponad 2000 lat temu! Richard McClintock</p>
                 
                 
        </div>
    </div>
    );
}

export default home;