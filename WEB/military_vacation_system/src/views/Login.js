import React, { Component, Fragment } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

import Header from 'components/Navs/Header.js';

//테스트용
const administrator = {
    id: 'admin',
    password: '1111'
}

class Login extends Component {
    state = {
        militaryClass: null,
        id: '',
        password: ''
    }

    // 군별 선택 시 update
    handleChoose = (military) => {
        const { militaryClass } = this.state;
        this.setState({
            militaryClass: military
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    authAdmin = () => {
        if (this.state.id === administrator.id && this.state.password === administrator.password) {
            this.props.history.push('/home');
        }
        else {
            this.setState({
                militaryClass: null,
                id: '',
                password: ''
            });
        }
    }

    shouldComponentUpdate(prevProps, nextState) {
        if (this.state !== nextState) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <Fragment>
                <Header />
                <ButtonGroup size="lg">
                    <Button color='primary' onClick={() => this.handleChoose('MND')} active={this.militaryClass==='MND'}>국직</Button>
                    <Button color='primary' onClick={() => this.handleChoose('army')} active={this.militaryClass==='army'}>육군</Button>
                    <Button color='primary' onClick={() => this.handleChoose('navy')} active={this.militaryClass==='navy'}>해군/해병대</Button>
                    <Button color='primary' onClick={() => this.handleChoose('airForce')} active={this.militaryClass==='airForce'}>공군</Button>
                </ButtonGroup>
                <form className='form'>
                    <div className='block'>
                        <input type='id' name='id' onChange={this.handleChange} value={this.state.id} placeholder='군번'/>
                        <input type='password' name='password' onChange={this.handleChange} value={this.state.password} placeholder='비밀번호'/>
                    </div>
                </form>
                <div>
                    <Button color='primary' onClick={this.authAdmin}>로그인</Button>
                </div>
                
            </Fragment>
        )
    }
}

export default Login;