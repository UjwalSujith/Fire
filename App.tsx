import React, { Component } from 'react'
import { SafeAreaView, Text, View, TextInput, Button, StyleSheet, } from 'react-native'
import database from '@react-native-firebase/database';


export default class App extends React.Component{
  constructor(props:any)
  {
    super(props);
    this.state={
      name:'',
      empid:'',
      dob:'',
      experience:'',
      gender:'',
      mobile:'',
      text:''
    }
    this.submit = this.submit.bind(this);
  }

  submit()
  {
    const employee = database().ref('employee').push();

employee
  .set({
    name:this.state.name,
    emp:this.state.empid,
    dob:this.state.dob,
    exp:this.state.experience,
    gender:this.state.gender,
    phno:this.state.mobile,
  })
  .then(() => console.log('Data updated.'));
  }
  render(){
    return(
      <SafeAreaView style={{flex:1}}>
        <View>
          <Text style={{fontSize:24, marginTop:'5%', color:'#e86c1a', fontWeight:'500', textAlign:'center'}}>Employee Registration</Text>
        </View>
        <View style={styles.textContainer}>
          <TextInput 
          placeholder={"Name"} 
          onChangeText={(name) => {this.setState({name: name})} }/>
          </View>
          <View style={styles.textContainer}>
          <TextInput 
          placeholder={"Employee ID"} 
          onChangeText={(emp) => {this.setState({empid: emp})} }/>
          </View>
          <View style={styles.textContainer}>
          <TextInput 
          placeholder={"DOB"} 
          onChangeText={(dob) => {this.setState({dob: dob})} }/>
          </View>
          <View style={styles.textContainer}>
          <TextInput 
          placeholder={"Experience"} 
          onChangeText={(exp) => {this.setState({experience: exp})} }/>
          </View>
          <View style={styles.textContainer}>
          <TextInput 
          placeholder={"Gender"} 
          onChangeText={(gender) => {this.setState({gender: gender})} }/>
          </View>
          <View style={styles.textContainer}>
          <TextInput 
          placeholder={"Mobile No"} 
          onChangeText={(phno) => {this.setState({mobile: phno})} }/>
          </View>
          <View style={{marginRight:20,marginLeft:20}}>
          <Button
          title='Submit'
          color="#841584"
          onPress={()=>{this.submit()}} >
          </Button>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({  

    container: {  
        flex: 1,    
    },
  
    textContainer : {
      borderWidth:1, 
      height:40, 
      marginTop:'5%', 
      marginBottom:'5%'
    }
  })