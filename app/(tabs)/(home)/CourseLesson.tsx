import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CourseLesson: React.FC = () => {
    const [state, setState] = useState(true)

    
  return (
    <View style={styles.container}>
      <View style={{ top: 90 }}>
        <View style={styles.header}>
          <Text style={styles.title}>Fundamentals of UI/UX Design Course</Text>
          <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <Image
              source={require("../../../assets/images/Ellipse 1.png")}
              style={{ width: 26, height: 26 }}
            />
            <Text style={{ color: "white", fontFamily: "Poppins-ExtraLight" }}>
              By Joshua Ofosu
            </Text>
          </View>
        </View>
        <View style={styles.Container}>
          <TouchableOpacity
            style={[
              styles.button,
              state ? styles.activeButton : styles.inactiveButton,
            ]}
            onPress={() => setState(!state)}
          >
            <Text style={styles.buttonText}>Lessons</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              !state ? styles.activeButton : styles.inactiveButton,
            ]}
            onPress={() => setState(!state)}
          >
            <Text style={styles.buttonText}>Overview</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.content}>
          {state ? (
            <View style={{ height: 470 }}>
              <Image
                style={styles.videoThumbnail}
                source={require("../../../assets/images/Group 21.png")}
              />
              <Text style={styles.sectionTitle}>
                Now playing: Introduction to UX Design
              </Text>
              <View style={styles.lessonList}>
                <View style={styles.lessonItem}>
                  <Text style={styles.lessonText}>
                    Introduction to UX Design
                  </Text>
                  <Text style={styles.lessonTime}>29m 12s</Text>
                </View>
                <View style={styles.lessonItem}>
                  <Text style={styles.lessonText}>Principles of UI Design</Text>
                  <Text style={styles.lessonTime}>15m 34s</Text>
                </View>
                <View style={styles.lessonItem}>
                  <Text style={styles.lessonText}>Design System vs UI Kit</Text>
                  <Text style={styles.lessonTime}>23m 45s</Text>
                </View>
              </View>
            </View>
          ) : (
            <View
              style={{ backgroundColor: "rgba(255,255,255,0.06)", padding: 20 }}
            >
              <View style={styles.instructorProfile}>
                <Image
                  style={styles.profilePicture}
                  source={require("../../../assets/images/Ellipse 1.png")}
                />
                <View style={styles.instructorInfo}>
                  <Text style={styles.instructorName}>Joshua Ofosu</Text>
                  <Text style={styles.instructorTitle}>UX/UI Engineer</Text>
                </View>
              </View>
              <View style={styles.description}>
                <Text style={styles.textBold}>About</Text>
                <Text style={styles.textLight}>
                  Hello there, Champion. I am Joshua, a senior User Experience
                  Designer and Engineer at Fleet Labs Ghana Ltd. I help
                  businesses and individuals craft user-friendly ProductDesig
                  that exceeds their expectation.
                </Text>
                <Text style={styles.textBold}>Who is this course for</Text>
                <Text style={styles.textLight}>
                  Anyone who will like to Fast-track their career in Product
                  Design and Get job-ready skills in less than 6 months with
                  critical competencies, and qualify for top positions in small
                  or large organizations.
                </Text>
                <Text style={styles.textBold}>Perks</Text>
                <Text style={styles.textLight}>
                  Complete a minimum of 2 to 3 Capstone projects on time to
                  receive a valuable certificate with an 'on-time' badge,
                  showcasing your reliability to future employers.
                </Text>
                <View style={styles.row}>
                  <View style={styles.rowItem}>
                    <Image
                      style={styles.image}
                      source={require("../../../assets/images/ci_group (1).png")}
                    />
                    <Text style={styles.textLightSmall}>0.2k learners</Text>
                  </View>
                  <View style={styles.rowItem}>
                    <Image
                      style={styles.image}
                      source={require("../../../assets/images/ant-design_play-circle-outlined.png")}
                    />
                    <Text style={styles.textLightSmall}>10 lessons</Text>
                  </View>
                  <View style={styles.rowItem}>
                    <Image
                      style={styles.image}
                      source={require("../../../assets/images/ant-design_star-filled.png")}
                    />
                    <Text style={styles.textLightSmall}>4.5 score</Text>
                  </View>
                </View>
                <Text style={styles.textLight}>
                  Your journey to become a successful Product Designer that
                  companies love to hire starts here.
                </Text>
              </View>
            </View>
          )}
        </ScrollView>

        <TouchableOpacity>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[
              "rgba(157, 77, 82, 0.37)",
              "#101E3B",
              "rgba(148, 176, 97, 0.51)",
            ]}
            style={styles.linearGradient}
          >
            <Text style={styles.getStartedText}>Get started</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#030a1e",
    color: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    height: "100%",
  },
  header: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,

    fontFamily: "Poppins-Bold",
    color: "#fff",
  },
  content: {
    marginTop: 20,
    height: 460,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 12,
    marginVertical: 25,
    fontFamily: "Poppins-Regular",
  },
  videoThumbnail: {
    width: "100%",
    height: 215,

    marginTop: 10,
  },
  lessonList: {
    backgroundColor: "#2e2e3e",
  },
  lessonItem: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "rgba(157, 77, 82, 0.37)",
    borderBottomWidth: 0.4,
  },
  lessonText: {
    color: "#fff",
    fontFamily: "Poppins-Light",
  },
  lessonTime: {
    color: "#fff",
    fontFamily: "Poppins-Light",
  },
  instructorProfile: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePicture: {
    borderRadius: 50,
    width: 50,
    height: 50,
    marginRight: 10,
  },
  instructorInfo: {
    flexDirection: "column",
  },
  instructorName: {
    color: "#fff",
    fontFamily: "Poppins-Light",
  },
  instructorTitle: {
    color: "#fff",
    fontFamily: "Poppins-Light",
  },
  description: {
    color: "#fff",
    marginTop: 20,
    gap: 12,
  },
  subscribeButton: {
    backgroundColor: "#6a11cb",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  getStartedText: {
    color: "white",
    alignSelf: "center",
    fontFamily: "Poppins-Bold",
  },
  linearGradient: {
    height: 52,
    borderRadius: 15,
    justifyContent: "center",
  },
  textBold: {
    color: "#ffffff",
    fontFamily: "Poppins-Bold",
    fontSize: 15,
  },
  textLight: {
    color: "#ffffff",
    fontFamily: "Poppins-Light",
    fontSize: 10,
  },
  textLightSmall: {
    color: "#ffffff",
    fontFamily: "Poppins-Light",
    fontSize: 11,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowItem: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  image: {
    height: 15,
    width: 15,
  },
  Container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 352,
    height: 52,
    backgroundColor: "rgba(255,255,255,0.06)",
    marginTop: 20,
    borderRadius: 32,
    alignItems: "center",
    padding: 10,
  },
  button: {
    width: 155,
    height: 40,
    justifyContent: "center",
    borderRadius: 32,
  },
  activeButton: {
    backgroundColor: "rgba(255,255,255,0.06)",
  },
  inactiveButton: {
    backgroundColor: "transparent",
  },
  buttonText: {
    alignSelf: "center",
    fontFamily: "Poppins-Regular",
    color: "#ffffff",
  },
});

export default CourseLesson;
