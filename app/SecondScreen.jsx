import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

export default function SecondScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Part 2: Conquering Your World </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.bold}>Immerse yourself in solitude:</Text> Give
            yourself some time and space to get away from the expectations, the
            conversations, the noise, the media, and the pressure. Take some
            time each day to go for a long walk and think. Plant yourself on a
            park bench and look. Take a long, thoughtful road trip. Whatever you
            do, move away from anything that distracts you from contemplating
            your life and where you want it to go. In solitude, you should feel
            <Text style={styles.highlight}>
              {" "}
              independent and self-sufficient
            </Text>
            , not lonely, needy or afraid.
          </Text>
          <Text style={styles.subtitle}>
            When you do it right you will have a sense of some vim after
            immersing yourself in solitude, I’m sure the word you will be
            looking for is{" "}
            <Text style={styles.bold}>YES! I can do/ make it.</Text>
          </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.highlight}>o</Text> Every person needs time
            alone, whether they're introverted or extroverted, single or in a
            relationship, young or old. Solitude is time for rejuvenation and
            self-talk, for utter peace and for realizing that purposeful
            "loneliness" is not a bad place to be but rather, a liberating part
            of your overall existence.
          </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.highlight}>o</Text> If you are a creative
            person, you may find that alone-time will help stoke your
            creativity. While it's nice to collaborate with other people
            sometimes, it's hard to be truly creative when you're always
            surrounded by other people. Step back and tap into your creativity.
            (^_^)
          </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.bold}>Seek out a passion:</Text> When you
            believe in something or see beauty in something, you should do it no
            matter what anyone else thinks. If you have found something that is
            worthy of your best efforts, sacrifice, and tears, then you have
            found the most important pursuit of your life. Often, that pursuit
            can lead you to something ultimately fulfilling.
          </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.highlight}>o</Text> The key here is to realize
            that it doesn't matter what it is. It could be preventing child
            hunger or it could be painting. There is no scale when it comes to
            passion. You either feel it or you don't; none is better than any
            other. When you find something that zaps you out of bed in the
            morning, cling onto it. You'll only bloom from there. (^_^)
          </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.bold}>Find a mentor</Text>: Though ultimately
            soul-searching can only be done by you and it's only you that
            determines what you need, having a mentor will be an incredible
            resource when you hit those unavoidable bumps in the road. Seek out
            someone you trust who has a definite sense of self. How did they do
            it?
          </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.highlight}>o</Text> Let them know the process
            you're starting to undertake. Stress that you know it's your
            journey, but would love to use their strength as a guide. Take a
            look at them as objectively as you can. What seems to ground them,
            making them who they are? How did they find that? How do they stay
            true to themselves?
          </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.highlight}>o</Text> A support system is key to
            any self-improvement tactic. Not a lot of people will understand
            what you're going through and will brush off your broaching the
            topic as a flash-in-the-pan moodiness. Use this mentor as a sounding
            board, too, for what you come up against. The outlet will surely
            come in handy.
          </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.bold}>Sort out your career path:</Text> If
            you're meandering all over the place looking for the right "fit",
            chances are that you're not happy inside. You could be using the
            job-changing as an excuse for not fully realizing your true
            potential. Find yourself by really taking an interest in what you
            love to do. If money weren't an issue, what would you spend your
            days doing? What way can you monetize this activity/skill?
          </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.bold}>
              Once you understand the power of finding your true self stuff like
              this (passion, work/ job, hobby) sets in. (^_^)
            </Text>
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
    color: "#f6f6f6",
  },

  subtitle: {
    fontSize: 18,
    marginBottom: 16,
    color: "#f6f6f6",
  },
});
