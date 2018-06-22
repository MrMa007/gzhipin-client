import React, {Component} from 'react'
import {WhiteSpace,WingBlank,NavBar,InputItem,List,Button,Radio} from 'antd-mobile'

import Logo from '../../components/logo/logo'

export default class Register extends Component {
  state={
      username:'',
      password:'',
      password2:'',
      type:'cainiao'
};
  register=()=>{
    const {username,password,password2,type}=this.state
    // console.log(username,password,password2,type)
  }
  toLogin=()=>{
    this.props.history.replace('/login')
  }
  handleChange=(name,value)=>{
    this.setState({
      [name]:value
    })
  };

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
            <InputItem placeholder='请输入密码' type='password'onChange={(val)=>this.handleChange('password2',val)}>确认密码:</InputItem>
            <WhiteSpace/>
            <List.Item>
              <span>用户类型:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio onChange={()=>this.handleChange('type','cainiao') } checked={this.state.type==='cainiao'}>菜鸟</Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio onChange={()=>this.handleChange('type','BOSS')} checked={this.state.type==='BOSS'}>BOSS</Radio>
            </List.Item>
            <WhiteSpace/>
            <Button type="primary" onClick={this.register}>注册</Button>
            <WhiteSpace/>
            <Button onClick={this.toLogin}>已有账号</Button>
          </List>
        </WingBlank>
      </div>
    )
  }

}