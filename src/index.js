import React from 'react';
import ReactDOM from 'react-dom';

import {UIRouter, UIView, pushStateLocationPlugin} from '@uirouter/react';
import { states, config } from './statesRouter';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <UIRouter plugins={[pushStateLocationPlugin]}
              config={config}
              states={states}>

        <UIView render={(RoutedComponent, props) =>
            <RoutedComponent {...props} key={props.transition} />
        } />

    </UIRouter>,
    document.getElementById('root')
);

registerServiceWorker();