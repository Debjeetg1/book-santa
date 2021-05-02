import React from 'react';
import {View , Text , TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import db from '../config';
import MyHeader from '../componentss/MyHeader';

class BookDonateScreen extends React.Component{
    constructor(){
        super();
        this.state={
            requestedBookList: [],
        }
        this.requestRef = null;


    }
    getRequestedBookList = () => {
        this.requestRef = db.collection('requested_books').onSnapshot((snapshot) => {
            var requestedBookList = snapshot.docs.map(doc => doc.data())
            this.setState({
                requestedBookList: requestedBookList,
            })
        })
    }
    componentDidMount()
    {
        this.getRequestedBookList();
    }

    componentWillUnmount()
    {
        this.requestRef();
    }

    keyExtractor = (item , index) => index.toString() ;

    renderItem = ({item , i}) => {
        return(
            <View>
                <ListItem 
                key={i}  title={item.book_name} subtitle={item.reason_to_request}
                titleStyle ={{color: 'black', fontWeight: 'bold' ,}} />

                <TouchableOpacity style={styles.btn}>
                    <Text>View</Text>
                    
                </TouchableOpacity>
            </View>
            
        )
    }

  render()
  {
      return(
          <View>
            <MyHeader title='Donate Book' navigation={this.props.navigation}/>
            <View>
                {requestedBookList.length === 0 ? (
                    <View>
                        <Text>List Of Requested</Text>

                    </View>
                ):(
                    <FlatList keyExtractor={this.keyExtractor} 
                    data={this.state.requestedBookList}
                    renderItem = {this.renderItem}/>
                )}
            </View>
          </View>
      )
  }
}
const styles = StyleSheet.create({
    btn:{
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'turqoise',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 8,

        } ,

    }
})
export default BookDonateScreen;