import React from 'react';
import {Text, Modal, View , TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import db from '../config';
import firebase from 'firebase';



export default class WelcomeScreen extends React.Component{

    constructor()
    {
        super();
        this.state={
           emailId: '',
           password: '',
           isModalVisible: false,
           firstName: '',
           lastName: '',
           address: '',
           contact: '',
           confirmPassword: '',
        }
    }
    userSignUp = (email, password, confirmPassword) =>{
    if(confirmPassword === password)
    {

      firebase.auth().createUserWithEmailAndPassword(email , password)
      .then((response) => {
          return alert('User added successfully');

      })
      .catch(function(error){
          var errorCode = error.code;
          var errorMessage = error.message;

          return(
              alert(errorMessage)
              
          )
      })

    }
    else {
        alert("Your password does'nt match with your confirm password");

    }

    db.collection('users').add({
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        address: this.state.address,
        mobile_number: this.state.contact,
        username: this.state.emailId,
    })}
    showModal = () => {
        return(
            <Modal visible={this.state.isModalVisible}>
                <TextInput placeholder='First-Name' onChangeText={(firstName) => {
                     this.setState({firstName: firstName})
                }} maxLength={10}/>
                <TextInput placeholder='Last-Name' maxLength={10} onChangeText={(lastName) => {
                     this.setState({
                         lastName: lastName,
                     })
                }} />
                <TextInput placeholder='Address' multiline={true} onChangeText={(address) => {
                     this.setState({
                         address: address,
                     })
                }} />
                <TextInput placeholder='Contact' keyboardType='numeric' maxLength={10} onChangeText={(contact) => {
                     this.setState({
                         contact: contact,
                     })
                }} />
                <TextInput placeholder='Email' keyboardType='email-address' onChangeText={(emailtxt) => {
                     this.setState({
                         emailId: emailtxt,
                     })
                }} />
                <TextInput placeholder='Password' secureTextEntry='true'onChangeText={(passwordtxt) => {
                     this.setState({
                         password: passwordtxt
                     })
                }} />
                <TextInput placeholder='Confirm-Password' secureTextEntry='true' onChangeText={(confirmPassword) => {
                     this.setState({
                         confirmPassword: confirmPassword,
                     })
                }} />
                <View>
                    <TouchableOpacity onPress={() => {
                        this.userSignUp(this.state.emailId , this.state.password , this.state.confirmPassword);
                    }}>
                        <Text>Register</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => {
                        this.setState({
                            isModalVisible: false
                        })
                    }}>
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                </View>
                
            </Modal>
        )
    }

    userLogIn = (email , password) => {
       firebase.auth().signInWithEmailAndPassword(email, password)
       .then(() => {
             this.props.navigation.navigate('Donate')
       })
       .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          
          return alert(errorMessage);
       })
    }
    render()
    {
        return(
           <View style={styles.container}>
               <View>
                    {this.showModal()};
               </View>
               <View style={styles.profileContainer}>
                    
                    <Text style={styles.title}>Book Santa</Text>
               </View>
               <View style={styles.buttonContainer}>
                    <TextInput placeholder='abc@xyz.com' onChangeText ={(emailText) => {
                        this.setState({
                            emailId: emailText,
                        })
                    }} keyboardType='email'style={styles.loginBox}>

                    </TextInput>
                    <TextInput placeholder='Enter Password' onChangeText={(passwordText) =>{
                        this.setState({
                            password: passwordText
                        })
                    }}secureTextEntry={true} style={styles.loginBox}>

                    </TextInput> 
                    
                   
                         <TouchableOpacity style={styles.buttontxt} onPress={() => {
                         this.userLogIn(this.state.emailId , this.state.password);
                        }}>
                        <Text>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttontxt} onPress={() => {
                         this.userSignUp(this.state.emailId , this.state.password);
                        }}>
                        <Text>Sign Up</Text>
                        </TouchableOpacity>
                  
               </View>
           </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#b9ccdd'
    
    },
    
    profileContainer:{
        flex:1,
        justifContent: 'center',
        alignItems: 'center',
    },
    
    title:{
        fontSize: 65,
        fontWeight: 300,
        paddinBottom: 330,
        color: 'white',
        fontWeight: 600
    
    
    },
    
    loginBox:{
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor: '#0669c0',
        fontSize: 20,
        margin: 10,
        paddingLeft: 10,
        paddingBottom: 5,
    
    },
    
    
    buttonContainer:{
        flex: 1,
        alignItems: 'center',
        
    },

    buttontxt: {
        color: 'white',
        fontWeight: 200,
        fontSize: 20,
        margin: 10,
        backgroundColor: '#015599',
        padding: 8,
        borderRadius: '9%',
   


    },

})


