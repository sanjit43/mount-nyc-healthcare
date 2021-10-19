import React from 'react';
import img from '../../images/service1.jpg'
import './ChooseOption.css'

const ChooseOption = () => {
    return (
        <div>
            <h2 className='choose-title'>Why you should take our service</h2>
            <div>
                <div className='choose-container'>
                    <img className='choose-img' src={img} alt="" />
                    <div>
                        <ul>
                            <li>Primary care, specialist office visits and minor procedures</li>
                            <li>Preventative health screenings</li>
                            <li>Routine lab tests and adult immunizations</li>
                            <li>Specified exams and physical therapy</li>
                            <li>Tobacco-use counseling and intervention (performed by a physician)</li>
                            <li>Prescription medications with a $5 copay per prescription ($1,500 maximum benefit limit)</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChooseOption;