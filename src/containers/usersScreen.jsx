import React,{useEffect,useState} from 'react'
import usersList from '../actions/usersListApi';
import { StyleSheet, Text, View,FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


function UsersScreen({navigation}) {

    const dispatch = useDispatch();
    console.log(dispatch,"dispatch")
    const userLists = useSelector((state)=>state.usersList.users);
    
    const [searchValue, setSearchValue] = useState('');
    const [filterData,setFilterData] = useState([]);

    useEffect(()=>{
          dispatch(usersList())   
    },[dispatch])

   function renderSearch(searchValue) {
       console.log("searchValu",searchValue)
       setSearchValue(searchValue);
       let filteredData = userLists.filter((item) => {
           return item.firstname.includes(searchValue);
       })
       setFilterData(filteredData);
   } 


    return(
        <View>
            <TextInput style={styles.searchBar}
                       value={searchValue}
                       placeholder="search here..."
                       onChangeText={renderSearch}/>
            
            <FlatList data={ filterData.length > 0 ? filterData : userLists}
                      keyExtractor={item => item.index}
                      renderItem={({item})=> (
                                     
                                     <TouchableOpacity style={styles.usersContent} key={item} onPress={()=>navigation.navigate("ProfileDetails",{userData:item})}>
                                     <View style={styles.mainView}>
                                     <Image source={{ uri: item.picture }} style={styles.profilePicture}/>
                                     <Text style={styles.profileTitle}>{item.firstname}</Text>
                                     </View>
                                    </TouchableOpacity>
                      )}/>

        </View>
    )
  
}




export default UsersScreen;


const styles = StyleSheet.create({

    searchBar:{
         marginTop:50,
         justifyContent:'center',
         alignItems:'center',
         width:'80%',
         height:60,
         backgroundColor:'#b2beb5',
         borderRadius:12,
         marginLeft:'10%',
         marginRight:'10%',
         paddingLeft: 15 
    },
    usersContent:{
        width:'80%',
        height:100,
        marginLeft:'10%',
        marginRight:'10%',
        backgroundColor:'#b2beb5',
        marginTop:20,
        marginBottom:15,
        borderRadius:12
    },
    mainView:{
         flex:1,
         flexDirection:'row'
    },
    profilePicture:{
        width:70,
        height:70,
        borderRadius:30,
        marginTop:12,
        marginBottom:12,
        marginLeft:25,
        resizeMode:'cover'
    },
    profileTitle:{
         textAlign:'center',
         paddingTop:40,
         paddingLeft:25
    }
})