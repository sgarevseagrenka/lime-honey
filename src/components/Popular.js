import React from 'react';
import Popular_card_lime from './Popular_card_lime';
import Popular_card_oblipiha from './Popular_card_oblipiha';
import Popular_card_akazia from './Popular_card_akazia';

function Popular() {
    return (
        <section className="popular">
            <h2 class="popular__title title">Самые популярные</h2>
            <div class="popular__content">
                <Popular_card_lime></Popular_card_lime>
                <Popular_card_oblipiha></Popular_card_oblipiha>
                <Popular_card_akazia></Popular_card_akazia>
            </div>
        </section >

    );
}

export default Popular;