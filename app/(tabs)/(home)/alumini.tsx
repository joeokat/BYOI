import { View, Text, Image, Pressable, StyleSheet, ScrollView, TextInput } from 'react-native';
import React from 'react';
import { Link, router } from "expo-router";

const Alumni = () => {
  return (
    <View style={styles.container}>
      <View
        style={styles.Header}
      >
        <View
          style={styles.subheader}
        >
          <View style={styles.Ellipse}>
            <Image source={require("../../../assets/images/Ellipse 1.png")} />
          </View>
          <View style={styles.welcome}>
            <Text style={styles.welcomeTextSmall}>Welcome to</Text>
            <Text style={styles.welcomeTextLarge}>Our Aluminie!</Text>
          </View>
        </View>
        <View style={styles.Frame17321}>
          <View style={[styles.resIcon, { backgroundColor: "#12182B" }]}>
            <Link push href="#" style={styles.Link1}>
              <Image
                source={require("../../../assets/images/solar_play-broken.png")}
                style={styles.Image1}
              />
            </Link>
          </View>
          <View style={styles.resIcon}>
            <Link href="./alumini" style={styles.Link2}>
              <Image
                source={require("../../../assets/images/Group.png")}
                style={styles.Image2}
              />
            </Link>
          </View>
        </View>
      </View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchText}
          placeholderTextColor={"#ffffff"}
          placeholder="Hire our aluminie"
        />

        <Image
          source={require("../../../assets/images/akar-icons_search.png")}
          style={styles.searchIcon}
        />
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Hire Our Alumni</Text>
      </View>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {alumniData.map((alumni, index) => (
          <View key={index} style={styles.component}>
            <View style={styles.componentHeader}>
              <Image source={alumni.image} />
              <View style={styles.alumniInfo}>
                <View style={styles.alumniDetails}>
                  <Text style={styles.alumniName}>{alumni.name}</Text>
                  <Text style={styles.alumniRole}>{alumni.role}</Text>
                </View>
                <View style={styles.alumniSkills}>
                  {alumni.skills.map((skill, idx) => (
                    <View key={idx} style={styles.skillTag}>
                      <Text style={styles.skillText}>{skill}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
            <Image
              source={require("../../../assets/images/dropdown.png")}
              style={styles.dropdownIcon}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const alumniData = [
  {
    name: 'Raha Matahari',
    role: 'User Experience Designer',
    image: require("../../../assets/images/Raha.png"),
    skills: ['Figma', 'Wireframe', 'Prototyping'],
  },
  {
    name: 'Samuel Adeyemi',
    role: 'Frontend Developer',
    image: require("../../../assets/images/Samuel.png"),
    skills: ['React', 'JavaScript', 'CSS'],
  },
  {
    name: 'Fati Abubakar',
    role: 'Backend Developer',
    image: require("../../../assets/images/Fati.png"),
    skills: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    name: 'Asamoah Gyan',
    role: 'Product Manager',
    image: require("../../../assets/images/Asamoah.png"),
    skills: ['Agile', 'Scrum', 'Roadmap'],
  },
  {
    name: 'Joshua King',
    role: 'Mobile Developer',
    image: require("../../../assets/images/Joshua.png"),
    skills: ['React Native', 'Flutter', 'Swift'],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030A1E",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 38,
    marginBottom: 20,
  },
  ellipse: {
    width: 56,
    height: 56,
  },
  welcome: {
    marginLeft: 8,
  },
  welcomeText: {
    fontSize: 14,
    color: "white",
    fontFamily: "Poppins-Bold",
  },
  jobBoardText: {
    fontSize: 16,
    color: "white",
    fontFamily: "Poppins-Bold",
  },
  welcomeTextSmall: {
    fontSize: 14,
    color: "white",
    fontFamily: "Poppins-Bold",
  },
  welcomeTextLarge: {
    fontSize: 16,
    color: "white",
    fontFamily: "Poppins-Bold",
  },
  Ellipse: {
    width: 56,
    height: 56,
    flexGrow: 0,
  },
  Frame17321: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 7,
    gap: 8,
    marginRight: 5,
    backgroundColor: "#12182B",
    borderRadius: 100,
  },
  Header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 4,
  },
  subheader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 4,
  },
  resIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#030A1E",
    borderRadius: 24,
    alignContent: "center",
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
  searchBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#12182B",
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 13,
    marginVertical: 20,
  },
  searchText: {
    fontFamily: "Poppins-ExtraLight",
    fontSize: 12,
    lineHeight: 18,
    color: "rgba(255, 255, 255, 0.5)",
    flex: 1,
  },
  searchIcon: {
    width: 27,
    height: 27,
    opacity: 0.6,
  },
  sectionHeader: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    color: "#ffffff",
  },
  scrollContainer: {
    flex: 1,
  },
  component: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#12182B",
    borderRadius: 16,
    padding: 20,
    marginBottom: 10,
  },
  componentHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  alumniInfo: {
    marginLeft: 8,
  },
  alumniDetails: {
    marginBottom: 4,
  },
  alumniName: {
    color: "white",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
  },
  alumniRole: {
    color: "white",
    fontFamily: "Poppins-Light",
    fontSize: 12,
  },
  alumniSkills: {
    flexDirection: "row",
    alignItems: "center",
  },
  skillTag: {
    backgroundColor: "rgba(230, 215, 163, 0.2)",
    borderRadius: 7.5,
    paddingHorizontal: 2,
    paddingVertical: 4,
    marginRight: 4,
  },
  skillText: {
    fontSize: 7,
    color: "#E5D7A3",
    fontFamily: "Poppins-Light",
  },
  dropdownIcon: {
    width: 16,
    height: 16,
  },
});

export default Alumni;

