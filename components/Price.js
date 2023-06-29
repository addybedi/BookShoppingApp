import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Price({ discount, price }) {
  return (
    <View style={styles.priceContainer}>
      <Text style={styles.discount}>{discount}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  discount: {
    fontSize: 14,
    fontWeight: 700,
    paddingVertical: 10,
    color: "#FF003E",
  },
  price: {
    fontSize: 16,
    fontWeight: 700,
    paddingVertical: 10,
    color: "#080A0C",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
