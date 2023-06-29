import { useEffect, useState } from "react";
import { Alert, Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { getBookDetailsById } from "../utils/api";
import Header from "../components/Header";
import Price from "../components/Price";

export default function DescriptionPage({ id, setOpenId }) {
  const [details, setDetails] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    const data = getBookDetailsById(id);
    if (data) {
      setDetails(data);
    } else {
      Alert.alert("Unable to fetch data", "No items present", [{ text: "OK" }]);
    }
  };
  return (
    details && (
      <View style={styles.container}>
        <Header title={details.title} onPress={() => setOpenId(null)} />
        <Image
          style={styles.image}
          source={{
            uri: details.imageURL,
          }}
        />
        <View>
          <Text style={styles.title}>{details.title} </Text>
          <Text style={styles.description}>{details.description}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Price discount={details.discount} price={details.price} />
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  description: {
    fontSize: 12,
    fontWeight: 400,
    paddingHorizontal: 20,
  },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
    resizeMode: "stretch",
  },
  priceContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
    padding: 20,
  },
});
