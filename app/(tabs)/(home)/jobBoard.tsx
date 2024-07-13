import {View,Text,Pressable,StyleSheet,Image,ScrollView,TextInput,Dimensions} from "react-native";
import React, { useContext } from "react";
import { router, Link } from "expo-router";
import { AppContext } from "../../context";

const width = Dimensions.get("window").width;

const Jobboard = () => {
  const { Page, change } = useContext(AppContext);
  const handlePress = () => {
    router.push("./");
  };

  return (
    <View style={styles.container}>
      <View style={styles.frame11808843}>
        <View
          style={styles.header}
        >
          <View
            style={styles.subheader}
          >
            <View style={styles.Ellipse}>
              <Image source={require("../../../assets/images/Ellipse 1.png")} />
            </View>
            <View style={styles.welcome}>
              <Text style={styles.welcomeTextSmall}>Welcome to</Text>
              <Text style={styles.welcomeTextLarge}>JOB BOARD!</Text>
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
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchInnerContainer}>
            <TextInput
              style={styles.searchText}
              placeholderTextColor={"#ffffff"}
              placeholder="Search for Contract or Full-time jobs"
            />
            <View style={styles.searchIcon}>
              <Image
                source={require("../../../assets/images/akar-icons_search.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.openRolesContainer}>
          <Text style={styles.openRolesText}>Open Roles</Text>
          <Text style={styles.comingSoonText}>more coming soon</Text>
        </View>
        <ScrollView
          style={styles.Frame26086296}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.Jobcontainer}>
            <View style={styles.job}>
              <View style={styles.Frame26086294}>
                <View style={styles.Frame26086293}>
                  <View style={styles.info}>
                    <View style={styles.Frame1}>
                      <Text style={styles.FLGhana}>Fleet Labs Ghana</Text>
                      <Image
                        source={require("../../../assets/images/carbon_checkmark-filled.png")}
                        style={{ width: 16, height: 16 }}
                      />
                    </View>
                    <Text style={styles.FLDev}>Flutter Developer</Text>
                  </View>
                  <Text style={styles.ago}>3d ago</Text>
                </View>
                <View style={styles.benefits}>
                  <View style={styles.contestents1}>
                    <Text style={styles.contestText}>Mampong</Text>
                  </View>
                  <View style={styles.contestents2}>
                    <Text style={styles.contestText}>Full-time</Text>
                  </View>
                </View>
                <View style={{ width: 298, height: 30.4 }}>
                  <View style={styles.Frame70}>
                    <View style={styles.Frame26086291}>
                      <Image
                        source={require("../../../assets/images/nhyira.png")}
                        style={{ width: 6.8, height: 13.2 }}
                      />
                      <Text style={styles.Eapply}>Easy Apply</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.job}>
              <View style={styles.Frame26086294}>
                <View style={styles.Frame26086293}>
                  <View style={styles.info}>
                    <View style={styles.Frame1}>
                      <Text style={styles.FLGhana}>Fleet Labs Ghana</Text>
                      <Image
                        source={require("../../../assets/images/carbon_checkmark-filled.png")}
                        style={{ width: 16, height: 16 }}
                      />
                    </View>
                    <Text style={styles.FLDev}>Flutter Developer</Text>
                  </View>
                  <Text style={styles.ago}>3d ago</Text>
                </View>
                <View style={styles.benefits}>
                  <View style={styles.contestents1}>
                    <Text style={styles.contestText}>Mampong</Text>
                  </View>
                  <View style={styles.contestents2}>
                    <Text style={styles.contestText}>Full-time</Text>
                  </View>
                </View>
                <View style={{ width: 298, height: 30.4 }}>
                  <View style={styles.Frame70}>
                    <View style={styles.Frame26086291}>
                      <Image
                        source={require("../../../assets/images/nhyira.png")}
                        style={{ width: 6.8, height: 13.2 }}
                      />
                      <Text style={styles.Eapply}>Easy Apply</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.job}>
              <View style={styles.Frame26086294}>
                <View style={styles.Frame26086293}>
                  <View style={styles.info}>
                    <View style={styles.Frame1}>
                      <Text style={styles.FLGhana}>Fleet Labs Ghana</Text>
                      <Image
                        source={require("../../../assets/images/carbon_checkmark-filled.png")}
                        style={{ width: 16, height: 16 }}
                      />
                    </View>
                    <Text style={styles.FLDev}>Flutter Developer</Text>
                  </View>
                  <Text style={styles.ago}>3d ago</Text>
                </View>
                <View style={styles.benefits}>
                  <View style={styles.contestents1}>
                    <Text style={styles.contestText}>Mampong</Text>
                  </View>
                  <View style={styles.contestents2}>
                    <Text style={styles.contestText}>Full-time</Text>
                  </View>
                </View>
                <View style={{ width: 298, height: 30.4 }}>
                  <View style={styles.Frame70}>
                    <View style={styles.Frame26086291}>
                      <Image
                        source={require("../../../assets/images/nhyira.png")}
                        style={{ width: 6.8, height: 13.2 }}
                      />
                      <Text style={styles.Eapply}>Easy Apply</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.job}>
              <View style={styles.Frame26086294}>
                <View style={styles.Frame26086293}>
                  <View style={styles.info}>
                    <View style={styles.Frame1}>
                      <Text style={styles.FLGhana}>Fleet Labs Ghana</Text>
                      <Image
                        source={require("../../../assets/images/carbon_checkmark-filled.png")}
                        style={{ width: 16, height: 16 }}
                      />
                    </View>
                    <Text style={styles.FLDev}>Flutter Developer</Text>
                  </View>
                  <Text style={styles.ago}>3d ago</Text>
                </View>
                <View style={styles.benefits}>
                  <View style={styles.contestents1}>
                    <Text style={styles.contestText}>Mampong</Text>
                  </View>
                  <View style={styles.contestents2}>
                    <Text style={styles.contestText}>Full-time</Text>
                  </View>
                </View>
                <View style={{ width: "100%", height: 30.4 }}>
                  <View style={styles.Frame70}>
                    <View style={styles.Frame26086291}>
                      <Image
                        source={require("../../../assets/images/nhyira.png")}
                        style={{ width: 6.8, height: 13.2 }}
                      />
                      <Text style={styles.Eapply}>Easy Apply</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.Frame11808849}>
          <View
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              display: "flex",
              flexDirection: "row",
              height: 52,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 32,
              padding: 15,
              gap: 5,
            }}
          >
            <Pressable onPress={handlePress}>
              <View
                style={{
                  backgroundColor: "",
                  width: 160,
                  height: 40,
                  alignItems: "center",
                  borderRadius: 24,
                }}
              >
                <Text
                  style={{ color: "#ffffff", alignSelf: "center", top: 15 }}
                >
                  Learnig Hive
                </Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.pressable}>
                <Text style={styles.jobboard}>Job board</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: width,
    height: "100%",
    padding: 10,
    backgroundColor: "#030A1E",
  },
  frame11808843: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 8,
    width: width,

    marginTop: 38,
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
  Jobcontainer: {
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    padding: 10,
  },
  header:{
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
  Frame11808849: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#030A1E",
    padding: 1,
    marginBottom: 50,
    gap: 10,
    position: "absolute",
    width: "100%",
    height: 52,
    top: 730,
  },
  Frame26086296: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
    position: "absolute",
    height: 490,
    margin: 10,
    top: 246,
    overflow: "scroll",
  },
  job: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 15,
    gap: 10,

    height: 160.5,
    backgroundColor: "#12182B",
    borderRadius: 17.6,
  },
  Frame26086294: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,

    height: 116.5,
  },
  Frame26086293: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 33,
    width: "100%",
    height: 49.5,
  },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 4.4,
    width: 159.4,
    height: 49.4,
  },
  Frame1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4.4,
    width: 159.4,
    height: 24,
  },
  FLGhana: {
    width: 139,
    height: 24,
    fontFamily: "Poppins-Bold",
    fontStyle: "normal",
    fontSize: 16,
    color: "#ffffff",
  },
  FLDev: {
    width: 157,
    height: 21,
    fontFamily: "Poppins-Bold",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 21,
    color: "#ffffff",
  },
  ago: {
    width: 36,
    height: 15,
    fontFamily: "Poppins-Bold",
    fontStyle: "normal",
    fontSize: 10,
    lineHeight: 15,
    textAlign: "center",
    color: "#ffffff",
  },
  benefits: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 4,
    width: 144.8,
    height: 20.7,
  },
  contestents1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 5.5,
    paddingVertical: 3.8,
    paddingHorizontal: 13.2,
    width: 73.4,
    height: 20.7,
    backgroundColor: "#E6D7A3",
    borderRadius: 27.5,
  },
  contestents2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 5.5,
    paddingVertical: 3.8,
    paddingHorizontal: 13.2,
    width: 73.4,
    height: 20.7,
    backgroundColor: "#F6BF47",
    borderRadius: 27.5,
  },
  contestText: {
    width: 67,
    height: 13,
    fontFamily: "Poppins-Bold",
    fontStyle: "normal",
    fontSize: 8.8,
    lineHeight: 13,
    color: "#212121",
  },
  Frame70: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 5.5,
    position: "absolute",
    left: 196.61,
    padding: 8,
    backgroundColor: "#FFBB1C",
    borderWidth: 0.55,
    borderColor: "#FFD24B",
    borderRadius: 22,
  },
  Frame26086291: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4.4,
    width: 66.2,
    height: 15,
  },
  Eapply: {
    width: 60,
    height: 15,
    fontFamily: "Poppins-Bold",
    fontStyle: "normal",
    fontSize: 10,
    lineHeight: 15,
    color: "#101010",
  },
  welcome: {
    // Add any styles for the container if needed
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
  frame17321: {
    // Add any styles for the container if needed
  },
  backButton: {
    position: "absolute",
    width: 24,
    height: 30,
    left: 8,
    top: 12,
    alignSelf: "center",
  },
  backButtonImage: {
    position: "absolute",
    resizeMode: "cover",
    width: 24,
    height: 24,
    left: 5,
  },
  aluminiLink: {
    position: "absolute",
    width: 35,
    height: 40,
    left: 5,
  },
  aluminiImage: {
    position: "absolute",
    resizeMode: "contain",
    width: 35,
    height: 30,
    left: 5,
  },
  searchContainer: {
    position: "absolute",
    width: 342,
    height: 48,
    left: 20,
    top: 126,
    backgroundColor: "#12182B",
    borderRadius: 24,
  },
  searchInnerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    position: "absolute",
    top: 13,
    left: 20,
    right: 4,
  },
  searchText: {
    fontFamily: "Poppins-ExtraLight",
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 18,
    color: "rgba(255, 255, 255, 0.5)",
  },
  searchIcon: {
    margin: "auto",
    width: 27,
    height: 27,
    opacity: 0.6,
  },
  openRolesContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 50,
    left: 25,
    right: 10,
    width: 342,
    height: 24,
    top: 198,
    position: "absolute",
  },
  openRolesText: {
    width: 92,
    height: 24,
    fontFamily: "Poppins-Bold",
    fontStyle: "normal",
    fontSize: 16,
    color: "#ffffff",
  },
  comingSoonText: {
    width: 155,
    height: 18,
    fontFamily: "Poppins-Bold",
    fontStyle: "normal",
    fontSize: 12,
    textAlign: "right",
    color: "#E6D7A3",
    right: 10,
  },
  pressable: {
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    width: 170,
    height: 40,
    alignItems: "center",
    borderRadius: 24,
  },
  jobboard: {
    color: "#ffffff",
    alignSelf: "center",
    top: 15,
  },
});

export default Jobboard;
