import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Header({ title, onPress }) {
  return (
    <View style={styles.container}>
      {onPress && (
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Image
            style={styles.icon}
            source={{
              uri: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png",
            }}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    left: 10,
  },

  container: {
    width: Dimensions.get("window").width,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "stretch",
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
  },
});
