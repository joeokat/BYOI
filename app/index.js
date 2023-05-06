import { useRouter } from "expo-router";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

export default function Page() {
  const router = useRouter();

  const press = (page) => {
    router.push(page);
  };

  const cards = [
    {
      uid: 1,
      title: "Wake",
      page: "/FirstScreen",
      icon: (
        <MaterialIcons name="emoji-food-beverage" size={48} color="#1e2632" />
      ),
    },
    {
      uid: 2,
      title: "Seek",
      page: "/SecondScreen",
      icon: (
        <MaterialIcons name="compass-calibration" size={48} color="#1e2632" />
      ),
    },
    {
      uid: 3,
      title: "Discover",
      page: "ThirdScreen",
      icon: <MaterialIcons name="self-improvement" size={48} color="#1e2632" />,
    },
    {
      uid: 4,
      title: "Delight",
      page: "/FourthScreen",
      icon: <MaterialIcons name="emoji-people" size={48} color="#1e2632" />,
    },
    {
      uid: 5,
      title: "Hangout",
      page: "",
      icon: <MaterialIcons name="people" size={48} color="#1e2632" />,
    },
    {
      uid: 6,
      title: "FAQs",
      page: "/FAQsScreen",
      icon: <MaterialIcons name="question-answer" size={48} color="#1e2632" />,
    },
  ];

  return (
    <ScrollView>
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
  container: {
    flex: 1,
    padding: 16,
    // maxHeight: 900,
    backgroundColor: "#1e2632",
  },

  main: {
    maxWidth: 960,
    marginHorizontal: "auto",
    marginBottom: 32,
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
