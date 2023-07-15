import React from 'react';
import honey3 from "../images/honey3.png"

function popular_card_akazia() {
    return (
        <div className="popular__card">
            <div className="popular__head">
                <img src={honey3} alt="honey" className="popular__img" />
            </div>
            <div className="popular__body">
                <h3 className="popular__label">Мед облепиховый</h3>
                <p className="popular__txt">Вкусный свежий мед из липы. Один из самых сладких видов меда</p>
                <a href="#" className="popular__btn btn">добавить</a>
            </div>
        </div>

    );
}

export default popular_card_akazia;