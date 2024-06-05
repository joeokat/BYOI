import { View, Text,Pressable,StyleSheet,Image } from 'react-native'
import React,{useContext} from 'react'
import { router,Link } from 'expo-router'
import {AppContext} from "../../context"


const Jobboard = () => {
  const {Page,change} = useContext(AppContext);
const handlePress = () => {
  router.push('./');
}


  return (
    <View style={styles.container}>
      <View style={styles.frame11808843}>
        <View style={styles.Ellipse}>
            <Image source={require("../../../assets/images/Ellipse 1.png")} />
        </View>
        <View style={styles.Welcome}>
        <Text style={{fontSize: 14,color:'white',fontFamily:'Poppins-Bold'}}>Welcome to</Text>
        <Text style={{fontSize:16,color: 'white',fontFamily:'Poppins-Bold'}}>JOB BOARD!</Text>
        </View>
      </View>
      <View style={styles.Frame17321}>
          <View style={styles.resIcon}>
              <Pressable onPress={()=>{router.back()}} style={{position:'absolute', width: 24, height: 30, left:8,top: 12, alignSelf: 'center' }}>
                <Image source={require("../../../assets/images/solar_play-broken.png")} style={{position:'absolute', resizeMode:'cover', width: 24, height: 24, left:5 }} />              
              </Pressable>
          </View>
          <View style={styles.resIcon}>
                <Link href='../Pages/alumini' style={{position:'absolute', width: 35, height: 40, left:5 }}>
                <Image source={require("../../../assets/images/Group.png")} style={{position:'absolute',resizeMode:'contain', width: 35, height: 30, left:5 }}/>
                </Link>   
          </View>
      </View>
      <View style={{position: 'absolute',width: 342, height: 48,left: 30,top: 126, backgroundColor: '#12182B',borderRadius: 24}}>
        <View style={{display: 'flex', flexDirection:'row',justifyContent:'space-between',alignItems:'center',gap: 8,position: 'absolute', top: 13,left: 20,right: 4}}>
          <Text style={{fontFamily: 'Poppins-ExtraLight',fontStyle:'normal',fontSize: 12, lineHeight: 18 ,color: 'rgba(255, 255, 255, 0.5)'}}>Search for Contract or Full-time jobs</Text>
          <View style={{margin: 'auto',width: 27,height: 27,opacity: 0.6,}}>
            <Image source={require('../../../assets/images/akar-icons_search.png')}/>
          </View>
        </View>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 50,left: 25,right: 10, width: 342,height: 24, top: 198, position: 'absolute'}}>
        <Text style={{width: 92, height: 24, fontFamily: "Poppins-Bold", fontStyle: 'normal', fontSize: 16, color: "#ffffff", }}>Open Roles</Text>
        <Text style={{width: 155, height: 18, fontFamily: "Poppins-Bold", fontStyle: 'normal', fontSize: 12,textAlign: 'right',color: "#E6D7A3",right: 10
          
         }}>more coming soon</Text>
      </View>
      <View style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10, position: 'absolute', width: 342, height: 490, left: 24, top: 246, overflow: "scroll"}}>
        <View style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 22, gap: 10, width: 342, height: 160.5, backgroundColor: "#12182B",borderRadius: 17.6}}>
          <View style={{display: 'flex', flexDirection: "column", alignItems: "flex-start", gap: 8, width: 298,height: 116.5}}>
            <View style={{display: 'flex', flexDirection: "row",justifyContent: 'space-between', alignItems: "flex-start", gap: 33, width: 297,height: 49.5}}>
              <View style={{display: 'flex', flexDirection:"column",justifyContent: 'center', alignItems: "flex-start", gap: 4.4, width: 159.4,height: 49.4}}>
                <View style={{display: 'flex', flexDirection: "row", alignItems: "center", gap: 4.4, width: 159.4,height: 24}}>
                  <Text style={{width: 139, height: 24, fontFamily: "Poppins-Bold", fontStyle: 'normal', fontSize: 16, color: "#ffffff",}}>Fleet Labs Ghana</Text>
                  <Image source={require('../../../assets/images/carbon_checkmark-filled.png')} style={{width: 16, height: 16}} />
                </View>
                <Text></Text>
              </View>

            </View>
            <View></View>
            <View></View>
          </View>

        </View>
      </View>
       <View style={styles.Frame11808849}>
            <View style={{backgroundColor: 'rgba(255, 255, 255, 0.06)',display:'flex', flexDirection: 'row',height: 52, justifyContent: 'center', alignItems: 'center',borderRadius: 32,padding: 15,gap: 5}}>
          <Pressable onPress={handlePress}>
          <View style={{backgroundColor: "", width: 160, height: 40, alignItems: 'center',borderRadius: 24}}>
            <Text style={{color: '#ffffff', alignSelf: 'center', top: 15}}>Learnig Hive</Text>
          </View>
          </Pressable >
          <Pressable>
            <View style={{backgroundColor:'rgba(255, 255, 255, 0.06)', width: 170, height: 40, alignItems: 'center',borderRadius: 24}}>
              <Text style={{color: '#ffffff', alignSelf: 'center', top: 15}}>Job board</Text>
            </View>
          </Pressable>
        </View>
  
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
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
},
  Frame17321:{
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 3,
    gap: 3,
    position: "absolute",
    width: 109,
    height: 56,
    left: 257,
    top: 38,
    backgroundColor: "#12182B",
    borderRadius: 100,
  },
  resIcon:{
    width: 50,
    height: 50,
    backgroundColor: "#030A1E",
    borderRadius: 24,
    alignContent:'center'
  },
  Frame11808849:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    gap: 10,
    position: "absolute",
    width: 342,
    height: 52,
    top:774,
    left: 24,
  },
})


export default Jobboard