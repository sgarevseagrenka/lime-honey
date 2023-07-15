
import React from 'react';
import honey2 from "../images/honey2.png"

function Popular_card_oblipiha() {
    return (
        <div className="popular__card">
            <div className="popular__head">
                <img src={honey2} alt="honey" className="popular__img" />
            </div>
            <div className="popular__body">
                <h3 className="popular__label">Мед облепиховый</h3>
                <p className="popular__txt">Вкусный свежий мед из липы. Один из самых сладких видов меда</p>
                <a href="#" className="popular__btn btn">добавить</a>
            </div>
        </div>
    );
}

export default Popular_card_oblipiha;