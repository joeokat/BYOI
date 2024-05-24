import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.frame11808843}>
        <View style={styles.Ellipse}>
            <Image source={require("../../../assets/images/Ellipse 1.png")} />
        </View>
        <View style={styles.Welcome}>
        <Text style={{fontSize: 14,color:'white',fontFamily:'Poppins-Bold'}}>Welcome to</Text>
        <Text style={{fontSize:16,color: 'white',fontFamily:'Poppins-Bold'}}>BYOI Learning</Text>
        </View>

      </View>
      <View></View>
      <View></View>
      <View></View>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        position: "relative",
        width: 390,
        height: 844,
        backgroundColor: "#030A1E",
    },
    frame11808843:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 0,
        gap: 8,
        
        position: "absolute",
        width: 209,
        height: 56,
        left: 20,
        top: 38,
    },
    Ellipse:{
        width: 56,
        height: 56,
        flexGrow: 0,
    },
    Welcome:{
        width: 141,
        height: 54,
        fontFamily: "Poppins-Bold",
        color: "#FFFFFF",
        flex: 0,
        flexGrow: 0,
    }
})

export default index