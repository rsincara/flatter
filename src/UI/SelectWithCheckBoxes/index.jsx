import React from 'react';
import cx from 'classnames';

import './styles.css';
import Checkbox from "../Checkbox";

import BlackArrow from '../Icons/blackArrow.png';

const Select = ({title, values, placeholder}) => {

    const [isOpened, setIsOpened] = React.useState(false);

    const onSelectClickHandler = () => {
        setIsOpened(!isOpened);
    }

    return (
        <div className={cx('select-checkboxes-wrapper')}>
            <p className={cx('select-checkboxes__title')}>{title}</p>
            <div className={cx('select-checkboxes')} onClick={onSelectClickHandler}>
                <p className={cx('select-checkboxes__placeholder')}>{placeholder}</p>
                <div className={cx('select-checkboxes__arrow', isOpened && 'select-checkboxes__arrow--opened')}>
                    <img src={BlackArrow} />
                </div>
            </div>
            <div className={cx('select-checkboxes__select-menu', isOpened && 'select-checkboxes__select-menu--opened')}>
                {values.map(value => (
                    <Checkbox text={value} />
                ))}
            </div>
        </div>
    );
};

export default Select;