import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from './CustomButton';
import Profile from './Profile';

//이미지 주소 복사를 해서 링크를 붙여넣는다.
export default class App extends React.Component{
  static defaultProps = {
    title: 'untitled',
    color: 'black',
    marginLeft: 40,
    marginTop: 10,
    onPress: () => null,
  }
  constructor(props){
    super(props);
  }  
  render(){
      return(
        <View style={styles.container}>
          <View style={styles.Bottom_Container}>
            <View style={styles.Top_Container}>
              <View style={styles.elem}>
                <Profile 
                  title = {'로그인이 필요합니다.'}
                  fontSize = {15}>
                </Profile>
                <TouchableOpacity onPress={() => goLoginScreen()}>
                  {/*<Icon style={{marginTop: 20}}
                    name="chevron-forward-outline" size={30}></Icon>*/
                  }
                </TouchableOpacity>
              </View>
            </View>
            <View style={{alignItems: 'center', marginTop: 55}}>
              <Icon style={{marginRight: 5}} name="sad-outline" size={45} />
              <Text style={styles.wrong_text}>로그인이 필요한</Text>
              <Text style={styles.wrong_text}>서비스 입니다.</Text>
            </View>
          </View>
        </View>
      )
    }
}
    
const styles = StyleSheet.create({
  container:{
    flex:1, //뷰가 얼만큼의 가중치를 가지는 지 결정, 높을 수록 많은 영역을 차지함
    alignItems:'center', //수평에서 중앙으로 정렬
    marginTop:110
    
  },

  elem: { //프로필, 이름등을 가지고 있는 가로 정렬을 위한 요소
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  Top_Container:{
    backgroundColor: '#d3d3d3',
    borderTopLeftRadius: 20, // 모서리 둥글게 테두리를 통틀어서 border라고 하나보다
    borderTopRightRadius: 20, 
    width:300,
    height: 70,
  },
  
  Bottom_Container:{
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20, // 모서리 둥글게 테두리를 통틀어서 border라고 하나보다
    width:300,
    height: 350,
    borderWidth:1,
    borderColor: 'grey'
  },

  wrong_text: {
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold'
  },
})