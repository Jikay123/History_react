import * as React from 'react';
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const FirstRoute = () => (
  <View style={[styles.scene,styles.FirstRouteStyle, { backgroundColor: 'silver', flex: 1, alignItems: 'center' }]}>
    <Image style={{ width: 200, height: 200, marginTop: 200 }} source={{ uri: "https://i.imgur.com/o7YgSuE.png" }}></Image>
    <View style={{ backgroundColor: 'black', borderRadius: 30, marginTop: 5, padding: 10 }}>
      <Text style={{ color: 'white', fontSize: 15 }}>Vui lòng đăng nhập để tiếp tục</Text>
    </View>
  </View>

);
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'silver', flex: 1, alignItems: 'center' }]}>
    <Image style={{ width: 200, height: 200, marginTop: 200 }} source={{ uri: "https://i.imgur.com/o7YgSuE.png" }}></Image>
    <View style={{ backgroundColor: 'black', borderRadius: 30, marginTop: 5, padding: 10 }}>
      <Text style={{ color: 'white', fontSize: 15 }}>Vui lòng đăng nhập để tiếp tục</Text>
    </View>
  </View>

);
const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'silver', flex: 1, alignItems: 'center' }]}>
    <Image style={{ width: 200, height: 200, marginTop: 200 }} source={{ uri: "https://i.imgur.com/o7YgSuE.png" }}></Image>
    <View style={{ backgroundColor: 'black', borderRadius: 30, marginTop: 5, padding: 10 }}>
      <Text style={{ color: 'white', fontSize: 15 }}>Vui lòng đăng nhập để tiếp tục</Text>
    </View>
  </View>

);
const FourRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'silver', flex: 1, alignItems: 'center' }]}>
    <Image style={{ width: 200, height: 200, marginTop: 200 }} source={{ uri: "https://i.imgur.com/o7YgSuE.png" }}></Image>
    <View style={{ backgroundColor: 'black', borderRadius: 30, marginTop: 5, padding: 10 }}>
      <Text style={{ color: 'white', fontSize: 15 }}>Vui lòng đăng nhập để tiếp tục</Text>
    </View>
  </View>

);

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Tất cả' , tabStyle: { backgroundColor: '#fff' } },
    { key: 'second', title: 'Địa Điểm' },
    { key: 'third', title: 'Hình ảnh' },
    { key: 'four', title: 'Bài viết' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    four: FourRoute,
  });


  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'red', flexDirection: 'row' }}>
        <View style={{ marginLeft:160}}>
          <Text style={{ paddingHorizontal: 10, color: '#fff', marginVertical: 5, fontSize: 25, }}>Đã lưu</Text>
        </View>
        <View style={{ marginLeft:145, marginVertical: 10}}>
          <FontAwesome5 name="search" size={30} color="#fff" />
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  FirstRouteStyle: {
    backgroundColor: '#fff'},
  });