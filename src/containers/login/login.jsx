import React, {Component} from 'react'
import {WhiteSpace,WingBlank,NavBar,InputItem,List,Button} from 'antd-mobile'

import Logo from '../../components/logo/logo'

export default class Login extends Component {
  state={
    username:'',
    password:'',
  };

  handleChange=(name,value)=>{
    this.setState({
      [name]:value
    })
  };
  login=()=>{
    const {username,password}=this.state
    // console.log(username,password)
  }
  toRegister=()=>{
    this.props.history.replace('./register')
}

  render(){
    // const ListIteam=List.Item
    return (
      <div>
        <NavBar>用户注册</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <WhiteSpace/>
            <InputItem placeholder='请输入用户名' onChange={(val)=>this.handleChange('username',val)}>用户名:</InputItem>
            <WhiteSpace/>
            <InputItem placeholder='请输入密码' type='password'onChange={(val)=>this.handleChange('password',val)}>密&nbsp;&nbsp;码:</InputItem>
            <WhiteSpace/>
            <Button type="primary" onClick={this.login}>登录</Button>
            <WhiteSpace/>
            <Button onClick={this.toRegister}>还没有账号</Button>
          </List>
        </WingBlank>
      </div>
    )
  }

}