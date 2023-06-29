import { useEffect, useState } from "react";
import { Alert, Dimensions, FlatList, StyleSheet, View } from "react-native";
import { getListData } from "../utils/api";
import Header from "../components/Header";
import Item from "../components/Item";

export default function List({ setOpenId }) {
  const [listData, setListData] = useState([]);
  const [refresh, setResresh] = useState(false);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    setResresh(true);
    const data = getListData();
    if (data.length) {
      setListData(data);
    } else {
      Alert.alert("Unable to fetch data", "No items present", [{ text: "OK" }]);
    }
    setResresh(false);
  };
  return (
    <View style={styles.container}>
      <Header title="자유톡" />
      <FlatList
        data={listData}
        onRefresh={getData}
        refreshing={refresh}
        style={styles.flatList}
        renderItem={({ item }) => <Item item={item} setOpenId={setOpenId} />}
        keyExtractor={(i) => i.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  flatList: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
});
