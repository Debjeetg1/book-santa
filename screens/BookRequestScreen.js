import React from 'react';
import {View , Text , TouchableOpacity , TextInput, KeyboardAvoidingView} from 'react-native';
import MyHeader from '../componentss/MyHeader';
import db from 'firebase';
import firebase from 'firebase';
import { StyleSheet } from 'react-native';
import { withTheme } from 'react-native-elements';


class BookRequestScreen extends React.Component{
  constructor()
  {
      super();
      this.state = {
          userId: firebase.auth().currentUser.email,
          bookName: '',
          reasonToRequest: '',
      }
  }
  createUniqueID(){
    return  alert(Math.round(Math.random() * 9))
  }

  

  addRequest = (bookName, reasonToRequest) => {
    var userId = this.state.userId;
    var randomRequestId = this.createUniqueID();
    db.collection('requested_books').add({
        userId: userId,
        book_name: bookName,
        reason_to_request: reasonToRequest,
        requestId: randomRequestId,
    }) 

    this.setState({
        bookName: '',
        reasonToRequest: '',

    })

    alert('book Request is Successful enjoy!');
    alert(randomRequestId);
  }
  render()
  {
      return(
          <View style={{flex: 1,}}>
              <MyHeader title='Book Request'/>
              <KeyboardAvoidingView>
                  { this.addRequest(this.state.bookName , this.state.reasonToRequest)}
                  <TextInput placeholder='Enter book name' onChangeText={(bookname) => {
                        this.setState({
                            bookName: bookname,
                        })
                  }}   value={this.state.bookName} style={styles.formTextInput}/>
                  <TextInput placeholder = 'Please Enter why do you want the book' onChangeText={(bookReason) => {
                        this.setState({
                            reasonToRequest: bookReason,
                        })
                  }}  multiline={true} numberOfLines={10} style={styles.formTextInput}/>

                  <TouchableOpacity onPress={() => {
                      this.addRequest(this.state.bookName , this.state.reasonToRequest);
                  }} style={styles.reqBt}>
                      <Text>Request</Text>
                  </TouchableOpacity>

              </KeyboardAvoidingView>
          </View>
      )
  }
}

const styles = StyleSheet.create({
    reqBt:{
        wdith: '75%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10%',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 8},
        shadowOpacity: 0.444,
        shadowRadius: 10.32,
        elevation: 16, 
        marginTop: 20,
    },

    formTextInput:{
        width: '75%',
        height: '35%',
        alignSelf: 'center',
        borderColor: 'white',
        borderRadius: '15%',
        borderWidth: '0.5rem',
        padding:'1rem',
        marginTop: 20,


    },
})

export default BookRequestScreen;