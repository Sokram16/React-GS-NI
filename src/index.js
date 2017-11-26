import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './store';

import {UIRouter, UIView, pushStateLocationPlugin} from '@uirouter/react';
import {states, config} from './statesRouter';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-block-ui/style.css';


const middlewares = [
    thunk
];

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares)
);

ReactDOM.render(
    <Provider store={store}>
        <UIRouter plugins={[pushStateLocationPlugin]}
                  config={config}
                  states={states}>

            <UIView render={(RoutedComponent, props) =>
                <RoutedComponent {...props} key={props.transition}/>
            }/>

        </UIRouter>
    </Provider>
    ,
    document.getElementById('root')
);

registerServiceWorker();