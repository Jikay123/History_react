import * as React from 'react';
import {View, StyleSheet, Dimensions, Text, Image} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import AllSaved from '../AllSaved';
// import PlaceSaved from '../PlaceSaved';
// import PostsSaved from '../PostsSaved';

const AllSaved_ = () => {
  return (
      <View style={styles.containTab}>
          <Image style={styles.image} source={{ uri: 'https://zalo-file-dl3.zdn.vn/4220d45a860669583017/5146275568849760138' }}></Image>
      </View>
  )
  
}
const PlaceSaved_ = () => {
  return (
    <View style={styles.containTab}>
        <Image style={styles.image} source={{ uri: 'https://zalo-file-dl3.zdn.vn/4220d45a860669583017/5146275568849760138' }}></Image>
    </View>
)
}

const initialLayout = {width: Dimensions.get('window').width};

export default function Saved() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Đang đến'},
    {key: 'second', title: 'Lịch sử'},
  
  ]);

  const renderScene = SceneMap({
    first: AllSaved_,
    second: PlaceSaved_,

  });

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#820000',
          paddingVertical: 5,
          paddingHorizontal: 10,
        }}>
        <View>
          <Text
            style={{
              paddingHorizontal: 10,
              textAlign: 'center',
              color: '#fff',
              marginVertical: 5,
              fontSize: 20,
            }}>
            Đã lưu
          </Text>
        </View>
        <View style={{position: 'absolute', top: 12, right: 10}}>
          <EvilIcons name="search" size={30} color="#fff" />
        </View>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        initialLayout={initialLayout}
      />
    </View>
  );
}

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'white'}}
    style={{backgroundColor: '#000'}}
  />
);



// function GoHistory(props) {
//   return (
//       <View style={styles.containTab}>
//           <Image style={styles.image} source={{ uri: 'https://zalo-file-dl3.zdn.vn/4220d45a860669583017/5146275568849760138' }}></Image>
//       </View>
//   )
// }


// export default GoHistory

const styles = StyleSheet.create({
    containTab : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        borderRadius: 5
    },
})