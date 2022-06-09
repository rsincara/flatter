import React from 'react';
import cx from 'classnames';

import './styles.css';
import Aside from "../Aside";

const Main = () => {
    return (
        <main className={cx('main', 'container')}>
            <Aside />
            <div className={cx('main__content')}>
                    <div className={cx('main__iframe')} dangerouslySetInnerHTML={{
                    __html: `
                    <iframe src="https://www.avito.ru/chelyabinsk/kommercheskaya_nedvizhimost/sdam-ASgBAgICAUSwCNRW?cd=1&localPriority=0&map=eyJ6b29tIjo4fQ%3D%3D" width="1300" height="900" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
                }}>
                </div>
            </div>
        </main>
    );
};

export default Main;