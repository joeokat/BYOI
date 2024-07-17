import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { Link, router,} from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import MaskedView from '@react-native-masked-view/masked-view'
import {AppContext} from "../../context"

const index = () => {
const {Page,change} = useContext(AppContext);
const handlePress = () => {
  router.push('./jobBoard');
}

  return (
    <View style={styles.container}>
      <View style={styles.frame11808843}>
        <View style={styles.Ellipse}>
          <Image source={require("../../../assets/images/Ellipse 1.png")} />
        </View>
        <View style={styles.Welcome}>
          <Text style={styles.welcome}>Welcome to</Text>
          <Text style={styles.BYOI}>BYOI Learning</Text>
        </View>
      </View>
      <View style={styles.Frame17321}>
        <View style={styles.resIcon}>
          <Link push href="#" style={styles.Link1}>
            <Image
              source={require("../../../assets/images/solar_play-broken.png")}
              style={styles.Image1}
            />
          </Link>
        </View>
        <View style={[styles.resIcon, { backgroundColor: "#12182B" }]}>
          <Link href="./alumini" style={styles.Link2}>
            <Image
              source={require("../../../assets/images/Group.png")}
              style={styles.Image2}
            />
          </Link>
        </View>
      </View>
      <View style={styles.ads}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={[
            "rgba(157,77,82,0.37)",
            "rgba(16,30,59,1)",
            "rgba(148,176,97,0.51)",
          ]}
          style={styles.gradient}
        >
          <View style={styles.announcement}>
            <View style={styles.CTA}>
              <Text style={styles.JoinAClass}>Join a Class For Free</Text>
              <Image
                source={require("../../../assets/images/teenyicons_arrow-up-outline.png")}
              />
            </View>
            <View style={styles.Learncontainer}>
              <Text style={styles.Learn}>Learn the most creative</Text>
              <MaskedView
                maskElement={
                  <Text style={styles.maskedtext}>in-demand skills</Text>
                }
                style={{ height: 30 }}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  colors={["#F5525B", "#F6BF47", "#4BCCA5"]}
                  style={{ height: 30 }}
                >
                  <Text></Text>
                </LinearGradient>
              </MaskedView>
              <Text style={styles.Learn}>curated for you.</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
      <View style={styler.personalised}>
        <View style={styler.heading}>
          <Text style={styler.forYou}>Personalized For You</Text>
          <Text style={styler.MoreComing}>more coming soon</Text>
        </View>
        <View style={styler.ForYou}>
          <View style={styler.More}>
            <TouchableOpacity
              style={styler.Group12}
              onPress={() => router.push("./CourseLesson")}
            >
              <View style={styler.Rectangle12}>
                <Image
                  source={require("../../../assets/images/Rectangle 15.png")}
                />
              </View>
              <View style={styles.Container}>
                <View>
                  <Text style={styles.productDesignText}>Product Design</Text>
                </View>
                <View style={styles.rowContainer}>
                  <View style={styles.row}>
                    <Image
                      source={require("../../../assets/images/ant-design_play-circle-outlined.png")}
                    />
                    <Text style={styles.rowText}>8 Hours</Text>
                  </View>
                  <View style={[styles.row, styles.learnersRow]}>
                    <Image
                      source={require("../../../assets/images/ci_group.png")}
                    />
                    <Text style={styles.rowText}>76k learners</Text>
                  </View>
                </View>
                <View style={styles.expertContainer}>
                  <Text style={styles.expertText}>Expert</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styler.Group12}
              onPress={() => router.push("./CourseLesson")}
            >
              <View style={styler.Rectangle12}>
                <Image
                  source={require("../../../assets/images/Rectangle 15 (1).png")}
                />
              </View>
              <View style={styles.Container}>
                <View>
                  <Text style={styles.productDesignText}>Product Design</Text>
                </View>
                <View style={styles.rowContainer}>
                  <View style={styles.row}>
                    <Image
                      source={require("../../../assets/images/ant-design_play-circle-outlined.png")}
                    />
                    <Text style={styles.rowText}>8 Hours</Text>
                  </View>
                  <View style={[styles.row, styles.learnersRow]}>
                    <Image
                      source={require("../../../assets/images/ci_group.png")}
                    />
                    <Text style={styles.rowText}>76k learners</Text>
                  </View>
                </View>
                <View style={styles.expertContainer}>
                  <Text style={styles.expertText}>Expert</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styler.More}>
            <TouchableOpacity
              style={styler.Group12}
              onPress={() => router.push("./CourseLesson")}
            >
              <View style={styler.Rectangle12}>
                <Image
                  source={require("../../../assets/images/Rectangle 15 (2).png")}
                />
              </View>
              <View style={styles.Container}>
                <View>
                  <Text style={styles.productDesignText}>Product Design</Text>
                </View>
                <View style={styles.rowContainer}>
                  <View style={styles.row}>
                    <Image
                      source={require("../../../assets/images/ant-design_play-circle-outlined.png")}
                    />
                    <Text style={styles.rowText}>8 Hours</Text>
                  </View>
                  <View style={[styles.row, styles.learnersRow]}>
                    <Image
                      source={require("../../../assets/images/ci_group.png")}
                    />
                    <Text style={styles.rowText}>76k learners</Text>
                  </View>
                </View>
                <View style={styles.expertContainer}>
                  <Text style={styles.expertText}>Expert</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styler.Group12}
              onPress={() => router.push("./CourseLesson")}
            >
              <View style={styler.Rectangle12}>
                <Image
                  source={require("../../../assets/images/Rectangle 15 (3).png")}
                />
              </View>
              <View style={styles.Container}>
                <View>
                  <Text style={styles.productDesignText}>Product Design</Text>
                </View>
                <View style={styles.rowContainer}>
                  <View style={styles.row}>
                    <Image
                      source={require("../../../assets/images/ant-design_play-circle-outlined.png")}
                    />
                    <Text style={styles.rowText}>8 Hours</Text>
                  </View>
                  <View style={[styles.row, styles.learnersRow]}>
                    <Image
                      source={require("../../../assets/images/ci_group.png")}
                    />
                    <Text style={styles.rowText}>76k learners</Text>
                  </View>
                </View>
                <View style={styles.expertContainer}>
                  <Text style={styles.expertText}>Expert</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View></View>
        </View>
      </View>
      <View style={styler.Frame11808849}>
        <View style={styles.view}>
          <Pressable>
            <View style={styles.hiveButton}>
              <Text style={styles.buttonText}>Learning Hive</Text>
            </View>
          </Pressable>
          <Pressable onPress={handlePress}>
            <View style={styles.jobBoardButton}>
              <Text style={styles.buttonText}>Job board</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: "100%",
    padding: 4,
    backgroundColor: "#030A1E",
  },
  frame11808843: {
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
  Ellipse: {
    width: 56,
    height: 56,
    flexGrow: 0,
  },
  Welcome: {
    width: 141,
    height: 54,
    fontFamily: "Poppins-Bold",
    color: "#FFFFFF",
    flex: 0,
    flexGrow: 0,
  },
  BYOI:{
    fontSize: 16, 
    color: "white", 
    fontFamily: "Poppins-Bold",
  },
  Frame17321: {
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
  resIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#030A1E",
    borderRadius: 24,
    alignContent: "center",
  },
  ads: {
    position: "absolute",
    width: 342,
    height: 151,
    left: 0,
    top: 126,
  },
  announcement: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,

    position: "absolute",
    width: 302,
    height: 109,
    left: 20,
  },
  CTA: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    top: 20,
    padding: 0,
    gap: 8,

    width: 302,
    height: 24,
  },
  Learncontainer: {
    width: 255,
    height: 85,
    top: 20,
  },
  JoinAClass: {
    color: "#E5D7A3",
    width: 153,
    height: 21,

    fontFamily: "Poppins-Light",
    fontStyle: "normal",

    fontSize: 14,
    lineHeight: 21,
  },
  Link1: {
    position: "absolute",
    width: 24,
    height: 30,
    left: 14,
    top: 5,
    alignSelf: "center",
  },
  Link2: {
    position: "absolute",
    width: 35,
    height: 40,
    left: 5,
  },
  Image1: {
    position: "absolute",
    resizeMode: "cover",
    width: 24,
    height: 24,
    left: 5,
  },
  Image2: {
    position: "absolute",
    resizeMode: "contain",
    width: 35,
    height: 30,
    left: 5,
  },
  gradient: {
    left: 22,
    top: 0,
    height: 151,
    width: 342,
    borderRadius: 20,
  },
  Learn: {
    fontFamily: "Poppins-Regular",
    fontStyle: "normal",
    top: 10,
    color: "white",
    fontSize: 20,
    lineHeight: 30,
  },
  welcome: {
    fontSize: 14,
    color: "white",
    fontFamily: "Poppins-Bold",
  },
  Container: {
    display: "flex",
    flexDirection: "column",
    top: 107,
    left: 15,
    width: 160,
    gap: 4,
  },
  productDesignText: {
    color: "white",
    fontFamily: "Poppins-Light",
    fontSize: 10,
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 150,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    width: 60,
  },
  rowText: {
    color: "white",
    fontFamily: "Poppins-Light",
    fontSize: 10,
  },
  learnersRow: {
    right: 10,
  },
  expertContainer: {
    backgroundColor: "rgba(245, 80, 91, 0.21)",
    height: 19,
    width: 63,
    borderRadius: 8,
    alignContent: "center",
  },
  expertText: {
    color: "#F5505B",
    alignSelf: "center",
    fontFamily: "Poppins-Regular",
    fontSize: 10,
  },
  view: {
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    display: "flex",
    flexDirection: "row",
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
    padding: 15,
    gap: 5,
  },
  hiveButton: {
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    width: 160,
    height: 40,
    alignItems: "center",
    borderRadius: 24,
  },
  jobBoardButton: {
    backgroundColor: "",
    width: 170,
    height: 40,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    alignSelf: "center",
    top: 15,
  },
  maskedtext: {
    fontSize: 15,
    top: 10,
    fontFamily: "Poppins-Bold",
  },
});
const styler =StyleSheet.create({
  personalised:{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    gap: 24,
    position: "absolute",
    width: 342,
    height: 430,
    left: 24,
    top: 301,
  },
  heading:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
    gap: 0,
    width: 342,
    height: 24,
  },
  forYou:{
    width: 168,
    height: 24,
    fontFamily: 'Poppins-Regular',
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 24,
    color: "#FFFFFF",
  },
  MoreComing:{
    width: 145,
    height: 18,
    fontFamily: 'Poppins-Regular',
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 18,
    textAlign: "right",
    color: "#E5D7A3",
  },
  ForYou:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
    gap: 12,
    width: 342,
    height: 382,
  },
  More:{
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 0,
    gap: 12,
    width: 342,
    height: 179,
  },
  Group12:{
    width: 165,
    height: 179,
  },
  Rectangle12:{
    position: "absolute",
    width: 165,
    height: 179,
    left: 0,
    top: 0,
    backgroundColor: "#12182B",
    borderRadius: 20,
    
  },
  Frame11:{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    gap: 6,
    position: "absolute",
    width: 128,
    height: 61,
    left: 15,
    top: 107,
  },
  ProductDesign:{
    width: 106,
    height: 15,
    fontFamily: 'Poppins-Light',
    fontStyle: "normal",
    fontSize: 10,
    lineHeight: 15,
    color: "#FFFFFF",
  },
  Frame11808840:{
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 0,
    gap: 0,
    position: "absolute",
    width: 128,
    height: 15,
    left: 0,
    marginTop: 21, 
  },
  Frame11808839:{
    flexDirection: "row",
    alignItems: 'center',
    padding: 0,
    gap: 0,
    position: "absolute",
    width: 50,
    height: 15, 
  },
  Frame11808838:{
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    padding: 0,
    gap: 3,
    position: "absolute",
    width: 73,
    height: 15, 
  },
  Frame9:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 2,
    paddingLeft: 15,
    gap: 10,
    width: 61,
    height: 19, 
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
  Rectangle21:{
    width: 342,
    height: 52,
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    borderRadius: 32
  },
  Frame11808848:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    gap: 16,
    
    position: "absolute",
    width: 326,
    height: 40,
    left: 8,
    top: 6,
  },
  Frame11808847:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    gap: 10,
    position: "absolute",
    width: 155,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderRadius: 24,
    flex: 0,
  },
  Frame11808847T:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    gap: 10,

    width: 155,
    height: 40,
    borderRadius: 24,
    flex: 0,
  },
  LearningH:{
    width: 82,
    height: 18,
    fontFamily:'Poppins-Light',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    color: '#ffffff',
  },
  job:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    gap: 10,
    position: "absolute",
    width: 155,
    height: 40,
    borderRadius: 24,
  }
})
export default index