import { useRouter } from "expo-router";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();

  const press = (page) => {
    router.push(page);
  };

  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 5000);
  }, []);

  if (showSplashScreen) {
    return (
      <View style={styles.splashScreen}>
        <View style={styles.splashMain}>
          <Image
            source={"../images/hat.png"}
            style={{ width: 100, height: 100 }}
          />
          <Text style={styles.splashTitle}>Inside Out</Text>
          <Text style={{ fontWeight: "500", color: "#fff" }}>
            Inspired by: WiKiHow
          </Text>
        </View>
      </View>
    );
  }

  const cards = [
    {
      uid: 1,
      title: "Wakening",
      page: "/FirstScreen",
      icon: (
        <MaterialCommunityIcons
          name="human-handsup"
          size={48}
          color="#1e2632"
        />
      ),
    },
    {
      uid: 2,
      title: "Solitude",
      page: "/SecondScreen",
      icon: <MaterialIcons name="self-improvement" size={48} color="#1e2632" />,
    },
    {
      uid: 3,
      title: "Change",
      page: "ThirdScreen",
      icon: <MaterialCommunityIcons name="human" size={48} color="#1e2632" />,
    },
    {
      uid: 4,
      title: "Discovery",
      page: "/FourthScreen",
      icon: <MaterialIcons name="emoji-people" size={48} color="#1e2632" />,
    },
    {
      uid: 5,
      title: "Hangout",
      page: "https://chat.whatsapp.com/JuyTvyNWx3P7kiqCMPgkIC",
      icon: (
        <MaterialCommunityIcons
          name="human-greeting-proximity"
          size={48}
          color="#1e2632"
        />
      ),
    },
    {
      uid: 6,
      title: "FAQs",
      page: "/FAQsScreen",
      icon: <MaterialIcons name="question-answer" size={48} color="#1e2632" />,
    },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Inside Out</Text>
          <Text style={styles.subtitle}>
            The Introvert's Guide to Self-Discovery
          </Text>
        </View>

        <View style={styles.cardContainer}>
          {cards.map((card) => (
            <Pressable key={card.uid} onPress={() => press(card.page)}>
              <View style={styles.card}>
                <Text>{card.icon}</Text>
                <Text style={styles.cardText}>{card.title}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  splashScreen: {
    flex: 1,
    padding: 16,
    backgroundColor: "#1e2632",
    alignItems: "center",
    justifyContent: "center",
  },

  splashMain: {
    maxWidth: 960,
    marginHorizontal: "auto",
  },

  splashTitle: {
    fontSize: 64,
    fontWeight: "900",
    color: "#ffe030",
  },

  container: {
    flex: 1,
    padding: 16,
    // minHeight: "100vh",
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#1e2632",
  },

  main: {
    marginBottom: 32,
    maxWidth: 960,
    marginHorizontal: "auto",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#f6f6f6",
  },

  subtitle: {
    fontSize: 32,
    color: "#f9f9f9",
  },

  card: {
    width: 140,
    height: 140,
    margin: 8,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffe030",
  },

  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e2632",
  },

  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
