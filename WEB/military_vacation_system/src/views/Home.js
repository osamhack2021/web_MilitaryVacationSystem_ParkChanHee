import React, { Fragment } from 'react';

import Header from 'components/Header';
import HomeDetail from 'components/HomeDetail';
import Form from 'components/Form';
import TodoItemList from 'components/TodoItemList';

class Home extends React.Component {
    render() {
        return (
            <Fragment>
                <Header />
                <HomeDetail form={<Form/>}>
                    <TodoItemList/>
                </HomeDetail>
            </Fragment>
        )
    };
}

export default Home;