import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Price from "./Price";

export default function Item({ item, setOpenId }) {
  return (
    <TouchableOpacity style={styles.item} onPress={() => setOpenId(item.id)}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: item.imageURL,
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.productName}</Text>
          <Price discount={item.discount} price={item.price} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 14,
    fontWeight: 500,
    paddingVertical: 10,
  },
  image: {
    width: Dimensions.get("window").width / 2,
    height: 200,
    resizeMode: "stretch",
  },
  textContainer: {
    width: Dimensions.get("window").width / 2,
    paddingHorizontal: 30,
  },
});
