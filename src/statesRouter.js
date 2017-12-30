import React from 'react';
import {UIRouter, UIView, pushStateLocationPlugin} from '@uirouter/react';

import App from './App';
import Layout from './Layout';
import Bodega from './container/Bodega/index';

// define your states
const states = [
    {
    url: '/',
    name: "Home",
    title: 'General Store',
    component: () => <Layout> <App/> </Layout>,
    resolve: [{
        token: 'login',
        deps: ['$transition$'],
        resolveFn: (transition) => console.log("React")
    }]
},
    {
        url: '/inventario',
        name: "Inventario",
        title: 'Inventario GS',
        component: UIView,
        redirectTo: 'Bodega'
    }
    ,
    {
        url: '/inventario/bodega',
        name: "Bodega",
        title: 'Bodegas GS',
        component: () => <Layout> <Bodega/> </Layout>,
        resolve: [{
            token: 'bodegas',
            deps: ['$transition$'],
            resolveFn: (transition) => console.log("BODEGA")
        }]
    }
];


const config = (router) =>
{
    router.urlRouter.otherwise('/');
    //trace.enable(1);
    router.transitionService.onEnter({}, (trans, state) => {
        document.title = "GS | " + state.title;
    });
};



export { states, config };