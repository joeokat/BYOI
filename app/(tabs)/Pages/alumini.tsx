import { View, Text,Image,Pressable, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import {Link,router} from "expo-router"

const alumini = () => {
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
      <View style={{position: 'absolute',width: 342, height: 48,left: 20,top: 126, backgroundColor: '#12182B',borderRadius: 24}}>
        <View style={{display: 'flex', flexDirection:'row',justifyContent:'space-between',alignItems:'center',gap: 8,position: 'absolute', top: 13,left: 20,right: 4}}>
          <Text style={{fontFamily: 'Poppins-ExtraLight',fontStyle:'normal',fontSize: 12, lineHeight: 18 ,color: 'rgba(255, 255, 255, 0.5)'}}>Search for prolific talents suited for open roles</Text>
          <View style={{margin: 'auto',width: 27,height: 27,opacity: 0.6,}}>
            <Image source={require('../../../assets/images/akar-icons_search.png')}/>
          </View>
        </View>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 50,left: 25,right: 10, width: 342,height: 24, top: 198, position: 'absolute'}}>
        <Text style={{width: 180, height: 30, fontFamily: "Poppins-Bold", fontStyle: 'normal', fontSize: 20, color: "#ffffff", }}>Hire Our Alumni</Text>
      </View>
      <ScrollView style={styles.Frame11808862} showsVerticalScrollIndicator={false} >
        <View style={{justifyContent: 'space-between',gap:20}}>
        <View style={styles.Component}>
          <View style={styles.Frame31}>
            <View style={styles.Frame11808854}>
              <Image source={require("../../../assets/images/Raha.png")} />
              <View style={styles.Frame32}>
                <View style={styles.Frame11808861}>
                  <Text style={{color: 'white', fontFamily: 'Poppins-Bold',fontSize:16}}>Raha Matahari</Text>
                  <Text style={{color: 'white', fontFamily: 'Poppins-Light',fontSize:12}}>User Experience Designer</Text>
                </View>
                <View style={styles.Frame11808855}>
                  <View style={[styles.tags,{width: 44}]}>
                    <Text style={{fontSize: 7,color:"#E5D7A3",fontFamily: "Poppins-Light"}}>Figma</Text>
                  </View>
                  <View style={[styles.tags,{width: 54}]}>
                    <Text style={{fontSize: 7,color:"#E5D7A3",fontFamily: "Poppins-Light"}}>Wireframe</Text>
                  </View>
                  <View style={[styles.tags,{width: 61}]}>
                    <Text style={{fontSize: 7,color:"#E5D7A3",fontFamily: "Poppins-Light"}}>Prototyping</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{width: 16, height: 16}}>
              <Image source={require("../../../assets/images/dropdown.png")} />
            </View>
          </View>
        </View>
        <View style={styles.Component}>
          <View style={styles.Frame31}>
            <View style={styles.Frame11808854}>
              <Image source={require("../../../assets/images/Samuel.png")} />
              <View style={styles.Frame32}>
                <View style={styles.Frame11808861}>
                  <Text style={{color: 'white', fontFamily: 'Poppins-Bold',fontSize:16}}>Raha Matahari</Text>
                  <Text style={{color: 'white', fontFamily: 'Poppins-Light',fontSize:12}}>User Experience Designer</Text>
                </View>
                <View style={styles.Frame11808855}>
                  <View style={[styles.tags,{width: 44}]}>
                    <Text style={{fontSize: 7,color:"#E5D7A3",fontFamily: "Poppins-Light"}}>Figma</Text>
                  </View>
                  <View style={[styles.tags,{width: 54}]}>
                    <Text style={{fontSize: 7,color:"#E5D7A3",fontFamily: "Poppins-Light"}}>Wireframe</Text>
                  </View>
                  <View style={[styles.tags,{width: 61}]}>
                    <Text style={{fontSize: 7,color:"#E5D7A3",fontFamily: "Poppins-Light"}}>Prototyping</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{width: 16, height: 16}}>
              <Image source={require("../../../assets/images/dropdown.png")} />
            </View>
          </View>
        </View>
        <View style={styles.Component}>
          <View style={styles.Frame31}>
            <View style={styles.Frame11808854}>
              <Image source={require("../../../assets/images/Fati.png")} />
              <View style={styles.Frame32}>
                <View style={styles.Frame11808861}>
                  <Text style={{color: 'white', fontFamily: 'Poppins-Bold',fontSize:16}}>Raha Matahari</Text>
                  <Text style={{color: 'white', fontFamily: 'Poppins-Light',fontSize:12}}>User Experience Designer</Text>
                </View>
                <View style={styles.Frame11808855}>
                  <View style={[styles.tags,{width: 44}]}>
                    <Text style={{fontSize: 7,color:"#E5D7A3",fontFamily: "Poppins-Light"}}>Figma</Text>
                  </View>
                  <View style={[styles.tags,{width: 54}]}>
                    <Text style={{fontSize: 7,color:"#E5D7A3",fontFamily: "Poppins-Light"}}>Wireframe</Text>
                  </View>
                  <View style={[styles.tags,{width: 61}]}>
                    <Text style={{fontSize: 7,color:"#E5D7A3",fontFamily: "Poppins-Light"}}>Prototyping</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{width: 16, height: 16}}>
              <Image source={require("../../../assets/images/dropdown.png")} />
            </View>
          </View>
        </View>
        <View style={styles.Component}>
          <View style={styles.Frame31}>
            <View style={styles.Frame11808854}>
              <Image source={require("../../../assets/images/Asamoah.png")} />
              <View style={styles.Frame32}>
                <View style={styles.Frame11808861}>
                  <Text style={{color: 'white', fontFamily: 'Poppins-Bold',fontSize:16}}>Raha Matahari</Text>
                  <Text style={{color: 'white', fontFamily: 'Poppins-Light',fontSize:12}}>User Experience Designer</Text>
                </View>
                <View style={styles.Frame11808855}>
                  <View style={[styles.tags,{width: 44}]}>
                    <Text style={{fontSize: 7,color:"#E5D7A3",fontFamily: "Poppins-Light"}}>Figma</Text>
                  </View>
                  <View style={[styles.tags,{width: 54}]}>
                    <Text style={{fontSize: 7,color:"#E5D7A3",fontFamily: "Poppins-Light"}}>Wireframe</Text>
                  </View>
                  <View style={[styles.tags,{width: 61}]}>
                    <Text style={{fontSize: 7,color:"#E5D7A3",fontFamily: "Poppins-Light"}}>Prototyping</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{width: 16, height: 16}}>
              <Image source={require("../../../assets/images/dropdown.png")} />
            </View>
          </View>
        </View>
        <View style={styles.Component}>
          <View style={styles.Frame31}>
            <View style={styles.Frame11808854}>
              <Image source={require("../../../assets/images/Joshua.png")} />
              <View style={styles.Frame32}>
                <View style={styles.Frame11808861}>
                  <Text style={{color: 'white', fontFamily: 'Poppins-Bold',fontSize:16}}>Raha Matahari</Text>
                  <Text style={{color: 'white', fontFamily: 'Poppins-Light',fontSize:12}}>User Experience Designer</Text>
                </View>
                <View style={styles.Frame11808855}>
                  <View style={[styles.tags,{width: 44}]}>
                    <Text style={{fontSize: 7,color:"#E5D7A3",fontFamily: "Poppins-Light"}}>Figma</Text>
                  </View>
                  <View style={[styles.tags,{width: 54}]}>
                    <Text style={{fontSize: 7,color:"#E5D7A3",fontFamily: "Poppins-Light"}}>Wireframe</Text>
                  </View>
                  <View style={[styles.tags,{width: 61}]}>
                    <Text style={{fontSize: 7,color:"#E5D7A3",fontFamily: "Poppins-Light"}}>Prototyping</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{width: 16, height: 16}}>
              <Image source={require("../../../assets/images/dropdown.png")} />
            </View>
          </View>
        </View>
        <View style={styles.Component}>
          <View style={styles.Frame31}>
            <View style={styles.Frame11808854}>
              <Image source={require("../../../assets/images/Raha.png")} />
              <View style={styles.Frame32}>
                <View style={styles.Frame11808861}>
                  <Text style={{color: 'white', fontFamily: 'Poppins-Bold',fontSize:16}}>Raha Matahari</Text>
                  <Text style={{color: 'white', fontFamily: 'Poppins-Light',fontSize:12}}>User Experience Designer</Text>
                </View>
                <View style={styles.Frame11808855}>
                  <View style={[styles.tags,{width: 44}]}>
                    <Text style={{fontSize: 7,color:"#E5D7A3",fontFamily: "Poppins-Light"}}>Figma</Text>
                  </View>
                  <View style={[styles.tags,{width: 54}]}>
                    <Text style={{fontSize: 7,color:"#E5D7A3",fontFamily: "Poppins-Light"}}>Wireframe</Text>
                  </View>
                  <View style={[styles.tags,{width: 61}]}>
                    <Text style={{fontSize: 7,color:"#E5D7A3",fontFamily: "Poppins-Light"}}>Prototyping</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{width: 16, height: 16}}>
              <Image source={require("../../../assets/images/dropdown.png")} />
            </View>
          </View>
        </View>
        <View style={styles.Component}>
          <View style={styles.Frame31}>
            <View style={styles.Frame11808854}>
              <Image source={require("../../../assets/images/Raha.png")} />
              <View style={styles.Frame32}>
                <View style={styles.Frame11808861}>
                  <Text style={{color: 'white', fontFamily: 'Poppins-Bold',fontSize:16}}>Raha Matahari</Text>
                  <Text style={{color: 'white', fontFamily: 'Poppins-Light',fontSize:12}}>User Experience Designer</Text>
                </View>
                <View style={styles.Frame11808855}>
                  <View style={[styles.tags,{width: 44}]}>
                    <Text style={{fontSize: 7,color:"#E5D7A3",fontFamily: "Poppins-Light"}}>Figma</Text>
                  </View>
                  <View style={[styles.tags,{width: 54}]}>
                    <Text style={{fontSize: 7,color:"#E5D7A3",fontFamily: "Poppins-Light"}}>Wireframe</Text>
                  </View>
                  <View style={[styles.tags,{width: 61}]}>
                    <Text style={{fontSize: 7,color:"#E5D7A3",fontFamily: "Poppins-Light"}}>Prototyping</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{width: 16, height: 16}}>
              <Image source={require("../../../assets/images/dropdown.png")} />
            </View>
          </View>
        </View>
        </View>
      </ScrollView>
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
  Frame11808862:{
    display: "flex",
    flexDirection: "column",
    left: 25,
    gap: 10,
    position: "absolute",
    width: 342,
    height: 557,
    top: 246,
  },
  Component: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    gap: 10,
    width: 342,
    height: 105,
    backgroundColor: "#12182B",
    borderRadius: 16,
  },
  Frame31:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 20,
    position: "absolute",
    width: 320,

  },
  Frame11808854: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    width: 238.5,
    height: 61,
  },
  Frame32: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 4,
    width: 168,
    height: 61,
  },
  Frame11808861: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: 181,
    height:42,
    gap: 0,
  },
  Frame11808855: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    width: 147,
    height: 15
  },
  tags: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 20,
    paddingHorizontal: 2,
    paddingVertical: 4,
    borderRadius: 7.5,
    backgroundColor:"rgba(230, 215, 163, 0.2)"
  }
})

export default alumini