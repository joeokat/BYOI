import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function About() {
  return (
    <View>
      <Text style={styles.title}>About Inside Out</Text>
      <Text style={styles.subtitle}>
        Welcome to Inside Out, the ultimate self-discovery web app for
        introverts. Our name plays on the idea of looking inward and reflecting
        on your true self to uncover your hidden strengths and passions.
      </Text>
      <Text style={styles.subtitle}>
        As "The Introvert's Guide to Self-Discovery," our platform offers a safe
        space for introverts to explore their personalities and discover what
        makes them unique. We understand that self-discovery can be a daunting
        task, and that's why we've created a user-friendly platform with
        personalized assessments and resources to help guide you on your
        journey.
      </Text>
      <Text style={styles.subtitle}>
        Our mission is to empower introverts to unmask their true selves and
        embrace their quirks and idiosyncrasies with confidence. With our
        "Unmasking Your True Self" program, we provide tailored coaching and
        support to help introverts overcome social anxiety and feel comfortable
        being their authentic selves in any situation.
      </Text>
      <Text style={styles.subtitle}>
        We believe that everyone is weird and wonderful in their way, and that's
        why we offer "Discovering the Weird and Wonderful You" program. It's an
        interactive program that celebrates your uniqueness and helps you
        discover your hidden talents and passions.
      </Text>
      <Text style={styles.subtitle}>
        So whether you're looking to gain more self-awareness, overcome social
        anxiety, or embrace your inner weirdness, Inside Out is the perfect
        platform for you. Join our community of introverts today and discover
        the real you!
      </Text>

      <View>
        <Text>Joshua Ofosu</Text>
        <Text>Joshua Ofosu</Text>
        <Text>
          CEO of
          <Link href="https://twitter.com/joeokat">Fleet Labs Ghana</Link>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
