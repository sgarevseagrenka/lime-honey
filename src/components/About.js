import React from 'react';
import header_bee from '../images/header-bee.svg'

function About() {
    return (
        <section className="about">
            <div className="about__content">
                <h1 className="about__title">Мед от Пчёла</h1>
                <p className="about__txt">Наша пасека производит лучший мед в мире</p>
                <a href="#" className="about__btn btn">Посмотреть мед</a>
            </div>
            <div className="about__imges">
                <img src={header_bee} alt="bee" className="about__img" />
            </div>
        </section>

    );
}

export default About;