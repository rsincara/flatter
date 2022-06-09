import React from 'react';

import './styles.css';
import flatterIcon from '../../UI/Icons/flatter icon.png'
import Button from "../../UI/Button";

const Header = () => {
    return (
        <header className={'header'}>
            <div className={'header__content-wrapper container'}>
                <a className={'header__icon-wrapper'}>
                    <img src={flatterIcon} />
                    <p className={'header__icon-text'}>Flatter</p>
                </a>

                <Button isPrimary={true} text={'Вход'} />
            </div>
        </header>
    );
};

export default Header;