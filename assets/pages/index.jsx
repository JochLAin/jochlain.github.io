

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import History from '@components/history';
import Navigation from '@components/navigation';
import Presentation from '@components/presentation';
import Skill from '@components/skill';

ReactDOM.render(
    <Fragment>
        <Navigation />
        <Presentation />
        <History />
        <Skill />
    </Fragment>,
    document.getElementById('root')
);
