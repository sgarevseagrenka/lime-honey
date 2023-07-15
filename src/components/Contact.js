import React from 'react';

function Contact1() {
    return (
        <section className="contact">
            <h2 className="contact__title title">Заказать обратный звонок</h2>
            <form action="#" className="contact__form form">
                <div className="form__box">
                    <label for="" className="form__label">name</label>
                    <input type="text" name="name" className="form__input" />
                </div>
                <div className="form__box">
                    <label for="" className="form__label">Ваша почта</label>
                    <input type="email" name="emain" className="form__input" />
                </div>
                <div className="form__box">
                    <input type="checkbox" id="form__checkbox" className="form__checkbox" />
                    <label for="form__checkbox" className="form__check-label">Даю согласие на обработку
                        данных</label>
                </div>
                <button type="submit" className="form__button">Заказать звонок</button>

            </form>

        </section>
    );
}

export default Contact1;