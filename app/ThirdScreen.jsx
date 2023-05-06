import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

export default function ThirdScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Part 3: Changing Your Perspective </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.bold}>
              Let go of the need to be loved by all:
            </Text>{" "}
            Accept that some people will think poorly of you no matter what you
            do. It's important to forget about what everyone else thinks because
            you cannot please everyone. And while you might not want to
            disappoint the people close to you, they should want you to be
            happy. As long as you continue to exist just to fulfill other
            people's ideas of who you should be, you'll never know who you
            really are.{" "}
          </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.highlight}>o</Text> Realize that some people
            will become jealous, afraid, or overwhelmed when a person changes
            their usual habits and grows more mature and self-loving (others
            will love it). It's a threat to the relationship you've always had
            with others, and it forces them to take a cold, hard look at
            themselves, which they may not want to do. Give these people space
            and compassion; they may come around in time. If they don't, leave
            them be. You don't need them to be you.
          </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.bold}>Abandon the negative:</Text> Although it
            sounds abstract, it's not difficult. Make a conscious effort to
            minimize judging others, objects, and yourself. This is for two
            reasons: <Text style={styles.highlight}>*</Text> 1) Positivity is
            nourishing and can usher in a sense of happiness which being "lost"
            masks, and <Text style={styles.highlight}>*</Text> 2) Opening your
            mind to new experiences and new people (that you previously wrote
            off) will show you a whole new world that may be better than the one
            you knew before —{" "}
            <Text style={styles.highlight}>
              one where you can find your corner of the sky, your castle on a
              cloud, your niche in this crazy world
            </Text>
            . ✌🏼😁 hahaha, sounds like a line someone would say in a movie err?
          </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.highlight}>o</Text> Try to do something every
            day that you would've brushed off as "weird," "illogical," or just
            plain "uncomfortable". Getting out of your zone will not only teach
            you something, but it will force you to get to know you — what
            you're capable of, what you like, what you definitely don't like,
            and what you were previously missing. If there’s no smile on your
            face about this point then I’m totally convinced you are not just
            weird but more to that.. Lolx…
          </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.bold}>Question yourself:</Text> Ask yourself
            difficult and far-reaching questions, and record your answers.
            Beyond your time spent in solitude, it's easy for these purposeful
            thoughts to slip to the back of your mind and be forgotten. If you
            have them written down, then every time you reflect, you can review
            your notes and take it a step further,{" "}
            <Text style={styles.highlight}>
              I guess you recall I said something about that in part 1
            </Text>
            , instead of answering the same questions all over again. Keep them
            in a notebook that's easy to access and update; it will be a source
            of sustenance for you, by which you can continue to measure your
            growth through life. Here are some to get you started:
          </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.highlight}>o</Text> "
            <Text style={styles.highlight}>
              If I had all the resources in the world — if I didn't need to make
              money — what would I be doing with my life and why
            </Text>{" "}
            ?" Perhaps you'd be painting, or writing, or farming, or exploring
            the Amazon rain forest, (I doubt you’d last a day there though). 😏
            but don’t hold back.
          </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.highlight}>o</Text> "
            <Text style={styles.highlight}>
              What do I want to look back on in my life and say that I never
              regretted?" Would you regret never having traveled abroad{" "}
            </Text>
            ?" Would you regret never having asked that person out, even if it
            meant risking rejection? Would you regret not spending enough time
            with your family when you could? Would you regret keeping your
            unique view of society to yourself by not sharing with friends? Did
            I conform/stick out beyond the level I'd have like to? This question
            can be really difficult but well, there goes everything.
          </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.highlight}>o</Text> "
            <Text style={styles.highlight}>
              If I had to choose three words to describe the kind of person I'd
              love to be, what would those words be{" "}
            </Text>
            ?" Adventurous ? Accepting towards few ? Open ? Honest ? Hilarious ?
            Optimistic ? Unreliable ? Don't be afraid to choose words that are
            considered negative because that proves you're a real person, and
            not a lopsided combination of parts other people want to be known
            for.
          </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.highlight}>*</Text> Sometimes the traits that
            you don't like become useful in emergency situations — like being
            bossy. Sometimes they are valuable to the job you're meant to
            perform — like being nitpicky.
          </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.highlight}>*</Text> If you do have a truly
            negative trait, acknowledging it openly can give you the motivation
            to work on redirecting that energy to something positive. You may
            not be a monk or you know what but try channeling that bad habit and
            into a hobby.{" "}
            <Text style={styles.highlight}>Don't wash your clothes much ?</Text>{" "}
            Try camping — maybe you'll like it.{" "}
            <Text style={styles.highlight}>
              Even something like pole dancing could be your golden ticket !
            </Text>{" "}
            😅 'I beg oo, make you nor go try that one'.{" "}
            <Text style={styles.highlight}>
              Know you're lazy with certain tasks ?
            </Text>{" "}
            Maybe you can lead yourself to find another task that hardly ever
            bores you. You'll come to realize what mine is soon if you haven't
            figured it out yet 🙂.
          </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.highlight}>o</Text> "
            <Text style={styles.highlight}>Who am I</Text> ?" This question is
            not static. It should be one you continue to ask yourself throughout
            your life. A healthy person continues to reinvent themselves
            throughout their life. By asking this question regularly, it updates
            your understanding of who you are and how you change. Instead of
            answering who you think you ought to be, keep it focused on who you
            actually are, because in all likelihood that's a very good answer,
            warts-and-all.
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
