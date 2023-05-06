import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

export default function FAQsScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Frequently Asked Questions</Text>
          <Text style={styles.subtitle}>
            Below will be funny examples but serious recommendations I would be
            citing.
          </Text>
          <Text style={styles.title2}>
            😵 What should I do if I am still lost?
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "#f6f6f6",
            }}
          >
            If finding yourself becomes really difficult, don't be afraid to ask
            other people for help. They can be a friend, family member, or
            psychologist.
          </Text>
          <Text style={{ marginBottom: 16 }}>
            <Text style={styles.bold}>Say: </Text>
            <Text style={styles.italic}>
              Your best friend, School Mother or Mum and Dad.
            </Text>
          </Text>

          <Text style={styles.title2}>😕 Why am I so self-involved?</Text>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "#f6f6f6",
            }}
          >
            Self-involvement is important. Building your personality involves
            yourself first, then your surroundings, and later the community.
          </Text>
          <Text style={{ marginBottom: 16 }}>
            <Text style={styles.bold}>Take: </Text>
            <Text style={styles.italic}>JoeOkat (me) as an example.</Text>
          </Text>

          <Text style={styles.title2}>
            😖 I feel like I'm lost and can't find the path to move forward. How
            do I take my first step?
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "#f6f6f6",
            }}
          >
            The reason behind this is due to the fact that you have not explored
            enough for what you like or dislike. Regardless of the reasoning
            behind if it was that one's being risk adverse or whatever it might
            be, <Text style={styles.highlight}>'change' </Text>
            needs courage and action. Though planning could be important, which
            seeking help from others can be helpful (Open up however you might
            feel and think during the conversation). Bottom-line is to take
            courses, interests groups, whatever appeals a little bit to you. Try
            anything until you have the one thing appeals to you that might give
            you the energy to get up every day.
          </Text>
          <Text style={{ marginBottom: 16 }}>
            <Text style={styles.bold}>Say: </Text>
            <Text style={styles.italic}>Anyone</Text>
          </Text>

          <Text style={styles.title2}>
            😵‍💫 How can I forget about my past in a day? How can I move on?
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 16,
              color: "#f6f6f6",
            }}
          >
            Forgetting about your past is not something that happens in a day --
            it takes time in doing that. But before you can forget about your
            past and move on, you need to forgive yourself first and let go of
            all past experience that brought nothing good. Read books when you
            have nothing doing, always engage yourself in something that will
            make you happy but not bored.
          </Text>

          <Text style={styles.title2}>
            🥶 I am feeling afraid to change or let go. How can I overcome this?
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "#f6f6f6",
            }}
          >
            The simple approach could be asking yourself the question of why you
            are afraid of the change and list them out for you to view. Try your
            best to understand the cause behind it but center the purpose of
            exercise with the <Text style={styles.highlight}>'I' </Text>and
            <Text style={styles.highlight}> 'me' </Text>rather than
            <Text style={styles.highlight}> you/them/they/We. </Text>On the
            other side, with a more novelty ways of approach can be asking
            yourself how much you want it? Because if you want it bad, you will
            get it no matter what. It will be difficult at any point in time of
            change there is no question about it. But the motivation and energy,
            or even called 'life' come from the fact that you are 'living' with
            your choice and intention, not surviving with the things that called
            'acceptable' to us.
          </Text>
          <Text style={{ marginBottom: 16 }}>
            <Text style={styles.bold}>Say: </Text>
            <Text style={styles.italic}>You</Text>
          </Text>

          <Text style={styles.title}>Tips</Text>
          <Text style={styles.subtitle}>
            • Step out of your comfort zone sometimes. Take note of how you
            adjust outside of your comfort zone and you will notice things about
            yourself you never did before.
          </Text>
          <Text style={styles.subtitle}>
            • Resist the urge to feel like you're the only one going through
            this. In Invisible Man,
            <Text style={{ fontWeight: "bold" }}> Ralph Ellison</Text> once
            summed this up well: {""}
            <Text style={{ color: "#ffbb1c", fontStyle: "italic" }}>
              All my life I had been looking for something, and everywhere I
              turned someone tried to tell me what it was. I accepted their
              answers too, though they were often in contradiction and even
              self-contradictory. I was naïve. I was looking for myself and
              asking everyone except myself questions which I, and only I, could
              answer. It took me a long time and much painful boomeranging of my
              expectations to achieve a realization everyone else appears to
              have been born with: {""}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontStyle: "italic",
                color: "#f6f6f6",
              }}
            >
              that I am nobody but myself.
            </Text>
          </Text>
          <Text style={styles.subtitle}>
            • On your journey you sometimes will need to cry. It's healthy to
            let it out but I’m not sure in your case there’s anything to cry
            about unless otherwise.
          </Text>
          <Text style={styles.subtitle}>
            • There is no set amount of time it will take. Be patient.
          </Text>
          <Text style={styles.subtitle}>
            • Don't be afraid to sleep on it. There's no hurry in making
            decisions, and you'll be more likely to make good ones if your mind
            is calm and rested.
          </Text>
          <Text style={styles.subtitle}>
            • There really is no right or wrong, so don't worry so much
          </Text>
          <Text style={styles.subtitle}>
            • Listen to and trust your inner voice!
          </Text>
          <Text style={styles.subtitle}>
            • Although it's a cliché, the term{" "}
            <Text style={{ color: "#ffbb1c" }}>"Be yourself"</Text> really does
            count when it comes to finding yourself. Make sure no one influences
            who you are; by all means listen to others and learn from them but
            let the final choices, decisions, and acceptances be your own. If
            you simply give in to what others think, it will make finding
            yourself even harder since people are influencing who you
            <Text style={{ fontWeight: "bold" }}> think </Text> you are.
          </Text>
          <Text style={styles.subtitle}>
            • Be the best that you can be. Being yourself is the best you can
            be. Know that.
          </Text>
          <Text style={styles.subtitle}>
            • You know you're close when you are relaxed with or immersed in
            something. Sometimes there are no aha moments.
          </Text>
          <Text style={styles.subtitle}>
            • Try not to judge yourself when you don't see positive results
            immediately. Persistence is key especially when things start to feel
            difficult.
          </Text>
          <Text style={styles.subtitle}>
            • It’s about you and your inner self so remember, always love
            yourself more than anybody else.
          </Text>
          <Text style={styles.subtitle}>
            • Be true to yourself and don't let others change you.
          </Text>
          <Text style={styles.subtitle}>• Find joy in helping others!</Text>
          <Text style={styles.subtitle}>
            • Don't let others tell you what to do, you can have your own life!
          </Text>
          <Text style={styles.subtitle}>
            • Follow your heart and don't let people tell you who you are or are
            not, its really important.
          </Text>
          <Text style={styles.subtitle}>
            • Don't let others determine who you are or what you do in life.
            It's your life not theirs. Your opinion is the only one that really
            matters in the end anyway.
          </Text>
          <Text style={styles.subtitle}>
            • Even though you should follow your own path, a part of respect is
            listening to what others have to say. Everyone deserves to have
            their opinion heard. You wouldn't want someone to ignore you when
            you have their best interest at heart, would you?
          </Text>

          <Text style={styles.title}>Warnings</Text>
          <Text style={styles.subtitle}>
            • Don't spread bad gossip or otherwise speak ill about other people.
            Knocking others down is not the path to self-knowledge. It only
            compromises your dignity as a human being and makes others dislike
            you. You can do that after you are certain to have finally found
            yourself.
          </Text>
          <Text style={styles.subtitle}>
            • Don't lie to yourself and try to be someone you are not. Remember
            this is about being yourself. As it is important to not let{" "}
            <Text style={{ color: "#ffbb1c" }}>family </Text>
            members decide, it is also important not to let{" "}
            <Text style={{ color: "#ffbb1c" }}>society</Text> and the
            <Text style={{ color: "#ffbb1c" }}> media</Text> push you in a
            certain direction, especially when it comes to your physical
            appearance.
          </Text>
          <Text style={styles.subtitle}>
            • Do not let others decide for you what you are destined to do.
            Their path may not be the correct path for you.
            <Text style={{ color: "#ffbb1c" }}>
              {" "}
              What works for one person may not work for the next.
            </Text>
          </Text>
          <Text style={styles.subtitle}>
            • Don't let yourself get caught up in a habit of constantly changing
            who you are or how you act just to fit in.{" "}
            <Text style={{ fontWeight: "bold" }}>
              Say No to any Chameleon life.
            </Text>{" "}
            Unless it’s absolutely necessary which it’s not going to be any more
            in your case.
          </Text>
          <Text style={styles.subtitle}>
            • Don't over-analyze everything! There is no right or wrong. If
            you're trying, you're doing it right. Dassor!
          </Text>
          <Text style={styles.title2}>Help us do more</Text>

          <Text style={styles.subtitle}>
            Consider buying us a cup of coffee If the{" "}
            <Text style={{ color: "#ffe030" }}>Community</Text> or the{" "}
            <Text style={{ color: "#ffe030" }}>Guide: Inside Out</Text> has
            helped / improved your life in anyway. 😇
          </Text>

          <Text style={styles.subtitle}>
            Donations go towards programme initiatives, meetups, AppStore &
            PlayStore services, and the core staff of Fleet Labs.
          </Text>

          <Text style={styles.subtitle}>Thanks for your support 🙏🏽.</Text>
          <View
            style={{ marginTop: 24 }}
            href="https://paystack.com/pay/inside-out"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              width="200"
            />
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
