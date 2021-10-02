import React, { Fragment, useEffect } from 'react';
import axios from 'axios';

import Header from 'components/Navs/Header';
import Login from 'components/Sidebar/Login';
import Sidebar from 'components/Sidebar/Sidebar';
import Navs from 'components/Navs/Navs';


class Home extends React.Component {
  
      render() {
        let isLogin = sessionStorage.getItem('Auth');
        return (
            <Fragment>
                <Header />
                <section className="f min1000">
                  {isLogin == null
                    ?<Login/>
                    :<Sidebar/>
                  }
                <Navs/>
                </section>
            </Fragment>
        )
    };
}

export default Home;