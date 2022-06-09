import React from 'react';
import cx from 'classnames';

import './styles.css';

const Index = ({text, isPrimary}) => {
    return (
        <button className={cx('button', isPrimary && 'button--primary')}>
            {text}
        </button>
    );
};

export default Index;