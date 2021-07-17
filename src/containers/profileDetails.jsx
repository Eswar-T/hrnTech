import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

 function ProfileDetails(props) {
     console.log("props",props)
    return(
           <View>
               <Text style={styles.profileTitle}>{props.route.params.userData.firstname}</Text>
           </View>    
    )
}

export default ProfileDetails;


const styles =StyleSheet.create({
    profileTitle:{
        fontSize:30,
        textAlign:'center',
        marginTop:'50%'
    }
})