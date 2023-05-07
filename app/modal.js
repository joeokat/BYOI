import React from "react";
import { StyleSheet, Text, View, Image, Linking } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

export default function About() {
  function rarible() {
    const uri = "https://t.co/DQTypIhVhR";
    Linking.openURL(uri);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Inside Out</Text>
          <Text style={styles.subtitle}>
            Our name plays on the idea of looking inward and reflecting on your
            true self to uncover your hidden strengths and passions.
          </Text>
          <Text style={styles.subtitle}>
            As "The Introvert's Guide to Self-Discovery," our platform offers a
            safe space for introverts to explore their personalities and
            discover what makes them unique. We understand that self-discovery
            can be a daunting task, and that's why we've created a user-friendly
            platform with personalized assessments and resources to help guide
            you on your journey.
          </Text>
          <Text style={styles.subtitle}>
            Our mission is to empower introverts to unmask their true selves and
            embrace their quirks and idiosyncrasies with confidence. With our
            "Unmasking Your True Self" program, we provide tailored coaching and
            support to help introverts overcome social anxiety and feel
            comfortable being their authentic selves in any situation.
          </Text>
          <Text style={styles.subtitle}>
            We believe that everyone is weird and wonderful in their way, and
            that's why we offer "Discovering the Weird and Wonderful You"
            meetup. It's an interactive event that celebrates your uniqueness
            and helps you discover your hidden talents and passions.
          </Text>
          <Text style={styles.subtitle}>
            So whether you're looking to gain more self-awareness, overcome
            social anxiety, or embrace your inner weirdness, Inside Out is the
            perfect platform for you. Join our community of introverts today and
            discover the real you!
          </Text>

          <View>
            <View style={styles.profileContainer}>
              <Image
                source={require("../images/dp.jpg")}
                style={styles.displayPic}
              />
              <View style={styles.profile}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.name}>JoeOkat</Text>
                  <FontAwesome
                    name="check-circle"
                    size={16}
                    color="#ff4747"
                    style={{ marginHorizontal: 4 }}
                  />
                </View>
                <Text style={styles.position}>Blogger | UI Engineer</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MaterialIcons
                    name="location-pin"
                    size={16}
                    color="#ff4747"
                    style={{ marginHorizontal: 4 }}
                  />
                  <Text style={styles.position}>Accra, Ghana</Text>
                </View>
                <View style={styles.socialButtons}></View>
              </View>
            </View>
            <Text style={styles.subtitle}>
              Hi!, my name is Joshua, CEO of Fleet Labs Ghana and author of
              Inside Out. As an introvert myself, I understand the challenges of
              feeling limited by social norms and expectations. However, I
              believe that our introverted nature is a gift that can help us
              become explorers of life in our own unique way.
            </Text>
            <Text style={styles.subtitle}>
              That's why I'm reaching out to invite you, my fellow introverts,
              to a space where we can be ourselves without fear of judgment or
              attracting unwanted attention. It's a place where we can embrace
              our curious minds and ask the questions that drive our
              intellectual curiosity.
            </Text>
            <Text style={styles.subtitle}>
              So if you're looking to connect with like-minded individuals who
              appreciate the value of introspection and deep thinking, I warmly
              invite you to join me and others in our community. Together, let's
              celebrate our introverted nature and discover the joys of being
              weird and wonderful in our own way.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  main: {
    maxWidth: 960,
    marginHorizontal: "auto",
    marginBottom: 32,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },

  subtitle: {
    fontSize: 18,
    color: "#212121",
    marginBottom: 16,
  },

  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  profile: {
    marginLeft: 16,
  },

  displayPic: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    borderRadius: 50,
  },

  name: {
    fontSize: 18,
    fontWeight: "600",
  },

  position: {
    fontSize: 16,
    color: "#808080",
  },
});
