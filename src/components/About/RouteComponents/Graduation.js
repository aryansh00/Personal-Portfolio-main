import React from 'react'


import '../../../styles/About/Route/Graduation.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Graduation = () => {
    return (
        <>
            <div className="graduation">
                <div className="graduation__container">
                    <div className="graduation__header">
                        <h2 className="graduation__number">0<span>4</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">B<span>achelors</span></h1>
                    </div>

                    <div className="graduation__description">
                        <h1>Dr Jyothirmayi Degree College</h1>
                        <h2><FontAwesomeIcon icon={faCalendarDays} className="internships__calendar" />&nbsp;&nbsp;07/2020 - 08/2023</h2>
                        <p>Pursued B.sc in Computer Science from 'Dr Jyothirmayi Degree College'.</p>
                        <p>Completed course work in Mathematics, Statistics and Computer Science.</p>
                        <p>CGPA 7.6</p>
                    </div>
                </div>
            </div>
            <div className="graduation">
                <div className="graduation__container">
                    <div className="graduation__header">
                        <h2 className="graduation__number">0<span>4</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">I<span>ntermediate</span></h1>
                    </div>

                    <div className="graduation__description">
                        <h1>Dr Jyothirmayi Junior College</h1>
                        <h2><FontAwesomeIcon icon={faCalendarDays} className="internships__calendar" />&nbsp;&nbsp;07/2018 - 04/2020</h2>
                        <p>Pursued Intermediate in Commerce from 'Dr Jyothirmayi Junior College'.</p>
                        <p>Completed course work in Mathematics, Economics and Commerce.</p>
                        <p>CGPA 9.1</p>
                    </div>
                </div>
            </div>
            <div className="graduation">
                <div className="graduation__container">
                    <div className="graduation__header">
                        <h2 className="graduation__number">0<span>4</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">S<span>sc</span>.</h1>
                    </div>

                    <div className="graduation__description">
                        <h1>Sri Vidhya High School</h1>
                        <h2><FontAwesomeIcon icon={faCalendarDays} className="internships__calendar" />&nbsp;&nbsp;04/2018</h2>
                        <p>Pursued SSC  from 'Sri Vidhya High School'.</p>
                        <p>CGPA 8.5</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Graduation