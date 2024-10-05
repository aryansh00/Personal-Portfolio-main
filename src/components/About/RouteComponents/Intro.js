import React from 'react'

import '../../../styles/About/Route/Intro.scss'
const Intro = () => {
    return (
        <>
            <div className="about-intro">
                <div className="about-intro__container">
                    <div className="about-intro__header">
                        <h2 className="about-intro__number">0<span>1</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">H<span>ello</span></h1>
                    </div>
                    <div className="about-intro__description">
                        <p data-aos='fade-right' >I am <span>Sakaray Subhash</span></p>
                        <p data-aos='fade-right' data-aos-delay='200'>I enjoy building websites and always enthusiastic about creating new front-end and backend features.</p>
                        <p data-aos='fade-right' data-aos-delay='400'>Passionate front-end and backend Developer with good knowledge in developing highly adaptive and responsive websites.</p>
                        <p data-aos='fade-right' data-aos-delay='600'>I also have good understanding of server side development using Node.js,and MongoDB.</p>
                        

                        <div className="about-intro__emoji">:&nbsp;</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro