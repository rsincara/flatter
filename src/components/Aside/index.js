import React from 'react';
import cx from 'classnames';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import './styles.css';
import burger from '../../UI/Icons/burger.png';
import arrow from '../../UI/Icons/arrow.png';
import Checkbox from "../../UI/Checkbox";

const Aside = () => {

    const [isOpened, setIsOpened] = React.useState(false);
    const [priceValues, setPriceValues] = React.useState([0, 1_000_000]);


    const changeIsOpened = () => {
        setIsOpened(!isOpened);
    }

    const onRangeSelectorChange = (values) => {
        console.log(values)
        setPriceValues(values)
    }

    return (
        <div className={cx('aside', isOpened && 'aside__hidden')}>
            <div
                className={cx('aside__arrow', isOpened && 'aside__arrow--close')}
                onClick={changeIsOpened}
            >
                <img src={arrow} />
            </div>
            <div className={cx('aside__categories')}>
                <div className={cx('categories__title-wrapper')}>
                    <img className={cx('categories__title-icon')} src={burger} />
                    <h2 className={cx('categories__title')}>Категории</h2>
                </div>

                <div className={cx('categories__checkboxes')}>
                    <Checkbox text='Комнаты' />
                    <Checkbox text='Квартиры' />
                    <Checkbox text='Дома' />
                    <Checkbox text='Гаражи' />
                </div>

                <div className={cx('categories__slider')}>
                    <h2 className={cx('sldier__title')}><b>₽</b> Диапазон цен</h2>
                    <Range value={priceValues} max={1_000_000} onChange={onRangeSelectorChange} ariaLabelGroupForHandles={['1', '2']} />
                    <div className={cx('prices')}>
                        <div>
                            {priceValues[0]}
                        </div>
                        <div>
                            {priceValues[1]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aside;