import React, {Component} from 'react';

//iconos
import User from './images/user.ico';
import InventarioIco from './images/inventario.ico';
import BodegaIco from './images/bodega.ico';
import ItemIco from './images/item.ico';
import HerramientaIco from './images/herramienta.ico';
import GraphIco from './images/graphics.ico';
import GsIcoPeque from './images/GS_logo.ico';

import CaretDown from 'react-icons/lib/fa/caret-down';

import './css/style.css';
import './css/custom.css';

class Full extends Component {

    toggleNavBar = (e) =>
    {

        document.getElementsByTagName('body')[0].classList.toggle('sidebar-icon-only');


    };

    CollapseMenuNav = (e) =>
    {
        document.getElementById(''+e).classList.toggle('show');
    };

    render() {
        return (

            <div className="container-scroller ">

                <nav className="navbar bg-primary-gradient col-lg-12 col-12 p-0 fixed-top navbar-inverse d-flex flex-row">
                    <div className="bg-white text-center navbar-brand-wrapper">
                        <a className="navbar-brand brand-logo" href="#"><img src={User}/></a>
                        <a className="navbar-brand brand-logo-mini" href="#"><img src={User}
                                                                                  alt=""/></a>
                    </div>
                    <div className="navbar-menu-wrapper d-flex align-items-center">
                        <button className="navbar-toggler navbar-toggler hidden-md-down align-self-center mr-3"
                                type="button" data-toggle="minimize"
                                onClick={(e) => this.toggleNavBar(e.target)}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <form className="form-inline mt-2 mt-md-0 hidden-md-down">
                            <input className="form-control mr-sm-2 search" type="text" placeholder="Search"/>
                        </form>
                        <ul className="navbar-nav ml-lg-auto d-flex align-items-center flex-row">
                            <li className="nav-item">
                                <a className="nav-link profile-pic" href="#"><img className="rounded-circle"
                                                                                  src="images/face.jpg" alt=""/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-th"></i></a>
                            </li>
                        </ul>
                        <button className="navbar-toggler navbar-toggler-right hidden-lg-up align-self-center" type="button"
                                data-toggle="offcanvas">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>

                <div className="container-fluid">
                    <div className="row row-offcanvas row-offcanvas-right">
                        <nav className="bg-white sidebar sidebar-fixed sidebar-offcanvas" id="sidebar">
                            <div className="user-info">
                                <img src="images/face.jpg" alt="" />
                                    <p className="name">Aministrador GS</p>
                                    <p className="designation">Editor</p>
                                    <span className="online"></span>
                            </div>
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="h4 nav-link p-0" href="/">
                                        <img src={GsIcoPeque} className="icon8-custom mr-2"/>
                                        <h4 className="menu-title">Inicio</h4>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="h4 nav-link p-0" data-toggle="collapse" href="#collapseExample"
                                       aria-expanded="false" aria-controls="collapseExample"
                                        onClick={(e) => this.CollapseMenuNav('collapseExample')}
                                    >

                                        <img src={InventarioIco} className="icon8-custom mr-2"/>
                                            <h4 className="menu-title">Inventario<CaretDown/></h4>
                                    </a>
                                    <div className="collapse" id="collapseExample">
                                        <ul className="nav flex-column sub-menu pl-3">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">
                                                    <img src={ItemIco}/> Items
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/inventario/bodega">
                                                   <img src={BodegaIco}/>  Bodegas
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">
                                                    <img src={HerramientaIco}/>  Herramientas
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">
                                                    <img src={GraphIco}/> Graficos
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </nav>

                        <div className="content-wrapper fondoMainContent">

                            <div className="w-100">

                                {this.props.children}

                            </div>

                        </div>
                        <footer className="footer">
                            <div className="container-fluid clearfix">
                      <span className="float-right">
                          <a href="#">Star Admin</a> &copy; 2017
                      </span>
                            </div>
                        </footer>
                    </div>
                </div>

            </div>
    )
    }

}

    export default Full;