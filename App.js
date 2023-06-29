import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import List from "./pages/List";
import { useState } from "react";
import DescriptionPage from "./pages/DescriptionPage";

export default function App() {
  const [openId, setOpenId] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {openId ? (
        <DescriptionPage id={openId} setOpenId={setOpenId} />
      ) : (
        <List setOpenId={setOpenId} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
