import { useRouter } from "expo-router";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function Page() {
  const router = useRouter();

  const press = (page) => {
    router.push(page);
  };

  const cards = [
    {
      uid: 1,
      title: "Part 1",
      page: "/FirstScreen",
      icon: "/icons/abc.svg",
    },
    {
      uid: 2,
      title: "Part 2",
      page: "/SecondScreen",
      icon: "/icons/efg.svg",
    },
    {
      uid: 3,
      title: "Part 3",
      page: "ThirdScreen",
      icon: "/icons/hij.svg",
    },
    {
      uid: 4,
      title: "Part 4",
      page: "/FourthScreen",
      icon: "/icons/klm.svg",
    },
  ];

  return (
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
              <Text style={styles.cardText}>{card.title}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // alignItems: "center",
  },

  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: "auto",
    marginBottom: 40,
  },

  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#212121",
  },

  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },

  card: {
    width: 170,
    height: 170,
    borderRadius: 10,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e2632",
  },

  cardText: {
    fontSize: 24,
    fontWeight: 500,
    color: "#f6f6f6",
  },

  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
