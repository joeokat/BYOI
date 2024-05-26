import { View, Text, StyleSheet, Image, Pressable, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { router } from 'expo-router';

SplashScreen.preventAutoHideAsync();

const Onboarding: React.FC = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Bold': require('../../assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-ExtraLight': require('../../assets/fonts/Poppins/Poppins-ExtraLight.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  if (fontError) {
    return (
      <View >
        <Text >Error loading fonts</Text>
      </View>
    );
  }

  const GetStarted = () => {
    router.push('./Home')
  };

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.programming}>
        <Image source={require("../../assets/images/javaScript.png")} style={styles.javascript} />
        <Image source={require("../../assets/images/figma.png")} style={styles.figma} />
        <Image source={require("../../assets/images/flutter.png")} style={styles.flutter} />
        <Image source={require("../../assets/images/reactjs.png")} style={styles.react} />
      </View>
      <View style={styles.frame38}>
        <View>
          <MaskedView maskElement={<Text style={{ fontSize: 15, fontFamily: 'Poppins-Bold' }}>No Signup required!</Text>}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#F5525B', '#F6BF47', '#4BCCA5']} style={{ height: 22, width: 200 }}>
              <Text style={{ backgroundColor: 'transparent', fontSize: 50 }}></Text>
            </LinearGradient>
          </MaskedView>

          <Text style={{color: 'white', fontSize: 40,fontWeight: 600,fontFamily: 'Poppins-Bold',display:'flex', flexDirection:'row', flexWrap: 'wrap'}}>Gain industry-standard based skills.</Text>
          <Text style={{display:'flex',flexDirection:'row',flexWrap:'wrap', color: 'rgba(255, 255, 255, 0.7)',fontFamily:'Poppins-ExtraLight',fontSize: 14,top: 0}}>
            Get job-ready skills and critical competencies in 3-6 months with our hands-on apprenticeship program.
          </Text>
        </View>
      </View>
      <View style={styles.button}>
        <Pressable onPress={GetStarted}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['rgba(157, 77, 82, 0.37)', '#101E3B', 'rgba(148, 176, 97, 0.51)']} style={styles.linearGradient}>
            <Text style={styles.getStartedText}>Get started</Text>
          </LinearGradient>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#030A1E",
    width: 390,
    height: 844,
  },
  programming: {
    position: "relative",
    width: 312.73,
    height: 321,
    left: 40,
    top: 48,
  },
  javascript: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 0,
    gap: 10,
   
    position: "absolute",
    width: 132.61,
    height: 102.61,
    left: 10,
    top: 86.85,
  },
  figma: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    gap: 10,
    
    position: "absolute",
    width: 170.04,
    height: 150.04,
    left: 150.24,
    top: 73.19,
  },
  flutter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 0,
    gap: 10,
    
    position: "absolute",
    width: 131.4,
    height: 131.4,
    left: 10,
    top: 180,
  },
  react: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    gap: 10,
  
    position: "absolute",
    width: 142.84,
    height: 142.84,
    left: 153.78,
    top: 186.44,
  },
  frame38: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    gap: 2,
    position: "absolute",
    width: 342,
    height: 287,
    left: 20,
    top: 409,
  },
  button: {
    position: "absolute",
    width: 341,
    height: 400,
    left: 20,
    top: 744,
  },
  linearGradient: {
    height: 52,
    borderRadius: 15,
    justifyContent: 'center',
  },
  getStartedText: {
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Poppins-Bold',
  },
  gainSkillsText: {
    color: 'white',
    fontSize: 40,
  }})

  export default Onboarding