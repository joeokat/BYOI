import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

export default function FourthScreen() {
  const route = useRouter();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Part 4: Settling In for Good </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.bold}>
              Act upon and use your newly discovered knowledge:
            </Text>{" "}
            Pick up those watercolors. Write a short story. Plan a trip to
            Kakum. Have dinner with a family member. Start cracking jokes. Open
            up. Tell the truth. Whatever it is that you've decided you want to
            be or do, start being and doing it{" "}
            <Text style={styles.bold}>now.</Text>
          </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.highlight}>o</Text> You may shake your head and
            come up with excuses such as "no time," "no money," "family
            responsibilities," etc. Instead of using these as excuses, start
            planning around the hurdles in your life. You can free up time, find
            money, and get a break from duties if you make time how to plan and
            find the courage to ask for these things.
          </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.highlight}>o</Text> Sometimes, the real you is
            too afraid to face the practicalities because it'd mean facing up to
            what you've limited yourself by. Start planning what you really want
            to do and investigating what needs to be done to get you to that
            point instead of flinging excuses at them, stopping the goals and
            dreams dead in their tracks.
          </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.bold}>Be ready for dead ends.</Text> Finding
            yourself is a journey, not a destination. A lot of it is trial and
            error. That's the price you pay in return for the satisfaction you
            receive: More often than not, you hit a bump in the road, and
            sometimes you fall flat on your face. Be prepared to understand and
            accept that this is a part of the process, and commit to getting
            right back up and starting over.
          </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.highlight}>o</Text> It's not going to be easy —
            it never has been for anybody — but if you learn to see that as a
            chance to prove how much you want to find yourself, then you'll find
            fulfillment and security in your pursuit.
            <Text style={styles.highlight}>
              When you know yourself, most people will respect you more and
              treat you kindly. Best of all, your light will shine on both you
              and others, making them (and you) feel even more certain about
              your sense of self.
            </Text>
          </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.bold}>Serve others.</Text> Mahatma Gandhi once
            said that{" "}
            <Text style={styles.italic}>
              "the best way to find yourself is to lose yourself in the service
              of others."
            </Text>{" "}
            Being introspective without reaching out to others can cause you to
            navel-gaze and shut yourself off from others. Service to other
            people and to the community is the ultimate way to find purpose and
            a sense of your place in the world.
          </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.highlight}>o</Text> When you see how hard life
            can be for those in greater need than you, it's often a wake-up call
            that puts your own worries, concerns, and issues into perspective.
            It helps you to see what you do have, and the opportunities you've
            been able to seize through life. That can fuel a great sense of self
            because suddenly everything can fall into place for you and you
            realize what matters most. Try it. You'll like it.
          </Text>
          <Text style={styles.title2}>All the best in life, Commrades.</Text>
          <Text style={styles.subtitle}>
            Go to the{" "}
            <Text style={styles.highlight}>FAQ’s, Tips and warning</Text>{" "}
            section to{" "}
            <Text
              style={styles.underline}
              onPress={() => route.push("/FAQsScreen")}
            >
              CHECK
            </Text>{" "}
            likely thoughts that may interest you.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#212121",
  },

  main: {
    maxWidth: 960,
    marginHorizontal: "auto",
    marginBottom: 32,
  },

  bold: { fontWeight: "bold", color: "#f6f6f6" },
  italic: { fontStyle: "italic", color: "#f6f6f6" },
  underline: { textDecorationLine: "underline", color: "#f6f6f6" },
  highlight: { color: "#ffbb1c" },

  title: {
    fontSize: 32,
    marginBottom: 24,
    fontWeight: "bold",
    color: "#f6f6f6",
  },

  title2: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: "bold",
    color: "#ffbb1c",
  },

  subtitle: {
    fontSize: 18,
    marginBottom: 16,
    color: "#f6f6f6",
  },
});
