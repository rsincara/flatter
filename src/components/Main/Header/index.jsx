import React from 'react';
import cx from 'classnames';

import './styles.css';
import SelectWithCheckBoxes from "../../../UI/SelectWithCheckBoxes";
const MainHeader = () => {
    return (
        <header className={cx('main-header')}>
            <SelectWithCheckBoxes
                title={'Районы'}
                values={['Калининский', 'Металлургический', 'Курчатовский', 'Тракторозаводской', 'Советский']}
                placeholder={'Выбрать районы'}
            />

            <SelectWithCheckBoxes
                title={'Тип сделки'}
                values={['Посуточно', 'Ежемесячно', 'Ипотека', 'Покупка' ]}
                placeholder={'Выбрать тип'}
            />

            <SelectWithCheckBoxes
                title={'Сервисы'}
                values={['Авито', 'Циан', 'Юла', 'Домофонд']}
                placeholder={'Выбрать Сервисы'}
            />
        </header>
    );
};

export default MainHeader;