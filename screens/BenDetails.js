import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import beneficiaries from "../DB/Bdata.json";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/Card";
import CartButton from "../components/CartButton";

export default function BeneficiaryDetails({
  route,
  cartItems,
  handleAddToCart,
}) {
  const navigation = useNavigation();
  const { uniqID } = route.params;
  const selectedBeneficiary = beneficiaries.find((b) => b.uniqID === uniqID);

  // Create a random array of items
  const items = [
    {
      id: 1,
      name: "Potato 1KG",
      price: 10000,
      image:
        "https://ik.imagekit.io/qsfifxkbx/item_BNHUD9Vok.jpg?updatedAt=1693804425102",
    },
    {
      id: 2,
      name: "Potato 2",
      price: 20,
      image:
        "https://ik.imagekit.io/qsfifxkbx/item_BNHUD9Vok.jpg?updatedAt=1693804425102",
    },
    {
      id: 3,
      name: "Potato 3",
      price: 30,
      image:
        "https://ik.imagekit.io/qsfifxkbx/item_BNHUD9Vok.jpg?updatedAt=1693804425102",
    },
    {
      id: 4,
      name: "Potato 4",
      price: 40,
      image:
        "https://ik.imagekit.io/qsfifxkbx/item_BNHUD9Vok.jpg?updatedAt=1693804425102",
    },
    {
      id: 5,
      name: "Potato 5",
      price: 50,
      image:
        "https://ik.imagekit.io/qsfifxkbx/item_BNHUD9Vok.jpg?updatedAt=1693804425102",
    },
  ];

  const handleCartPress = () => {
    navigation.navigate("Cart");
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#007DBC", "#6FB9E8"]} style={styles.card}>
        <Text style={styles.balanceText}>
          Balance: Rs. {selectedBeneficiary.balance.toFixed(2)}
        </Text>
      </LinearGradient>
      <ScrollView style={styles.scrollView}>
        {items.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <View key={index} style={styles.cardRow}>
                <Card
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  onAddToCart={handleAddToCart}
                />
                {items[index + 1] && (
                  <Card
                    name={items[index + 1].name}
                    price={items[index + 1].price}
                    image={items[index + 1].image}
                    onAddToCart={handleAddToCart}
                  />
                )}
              </View>
            );
          }
        })}
      </ScrollView>
      <CartButton
        balance={selectedBeneficiary.balance.toFixed(2)}
        onPress={handleCartPress}
        cartItems={cartItems}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  card: {
    borderRadius: 10,
    padding: 20,
    margin: 20,
    marginTop: 25,
    width: "90%",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  balanceText: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "400",
    color: "#fff",
  },
  scrollView: {
    width: "100%",
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
