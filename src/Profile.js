import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Dimensions,
  ScrollView,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import AntDesign from 'react-native-vector-icons/AntDesign';
function Profile(props) {
  const {width, height} = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: '#820000'}}>
        <View style={styles.header}>
          <Text style={{fontSize: 18, color: 'white'}}>Tài Khoản</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <EvilIcons
              name={'search'}
              size={30}
              style={{color: 'white'}}></EvilIcons>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'black',
          flexDirection: 'row',
          justifyContent: 'space-between',

          paddingVertical: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 30,
              height: 30,
              marginHorizontal: 10,
              borderRadius: 50,
            }}
            source={require('./image/dog_smile.jpg')}></Image>
          <Text style={{color: 'white'}}>Nguyễn Văn Long</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            justifyContent: 'flex-end',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 5,
          }}>
          <Text style={{color: 'white'}}>Xem hoạt động</Text>
          <Icon
            style={{color: 'white', fontSize: 20, marginHorizontal: 10}}
            name="angle-right"></Icon>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((item, index) => (
          <TouchableOpacity key={index}>
            <View style={styles.rowItem}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection:'row',
                  justifyContent: 'center',
                }}>
                <View style={{width:30,height:30,borderRadius:30,backgroundColor:'#6cb8dc'}}>
                  <Icon name={item.icon} style={styles.iconItem} color="white"></Icon>
                </View>
                <Text style={{marginLeft:10}}>{item.name}</Text>
              </View>
              <View>
                <AntDesign name={"right"} style={styles.iconItem} color={"#000"}></AntDesign>
              </View>
            </View>
          </TouchableOpacity>
        ))}
        
      </ScrollView>
    </View>
  );
}
const data = [
  {
    icon: 'plus',
    name: 'Thanh toán',
  },
  {
    icon: 'plus',
    name: 'Lịch sử',
  },
  {
    icon: 'plus',
    name: 'Hóa đơn',
  },
  {
    icon: 'plus',
    name: 'Tiền Thưởng',
  },
  {
    icon: 'plus',
    name: 'Ví Voucher',
  },
  {
    icon: 'plus',
    name: 'Ứng dụng của chủ quán',
  },
  {
    icon: 'plus',
    name: 'Mời bạn bè',
  },
  {
    icon: 'plus',
    name: 'Góp ý',
  },
  {
    icon: 'plus',
    name: 'Chính sách quy định',
  },
  {
    icon: 'plus',
    name: 'Cài đặt ứng dụng',
  },
  {
    icon: 'plus',
    name: 'Đăng xuất',
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  Touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
  },
  rowItem: {
    flexDirection: 'row', 
    borderBottomWidth:1,
    padding:5,
    borderColor:'#ccc',
    alignItems: 'center',
    justifyContent: 'space-between',
 
  },
  iconItem: {

    padding: 10,
    alignItems: 'center',
  },
});

export default Profile;
