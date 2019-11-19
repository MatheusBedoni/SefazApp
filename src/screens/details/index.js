import React from 'react'
import { View , Text , SafeAreaView , StyleSheet , Platform , ScrollView , TouchableOpacity , Dimensions , Image } from 'react-native'
import { Header , Avatar , Nome , Post , PostImage , User , Desc , Button} from './styles'


export default class App extends React.Component{
    static navigationOptions = {
        title:'Detalhes'
    }
    constructor(props){
        super(props);
    }
  render() {
    const item = this.props.navigation.state.params;

    return(
      <ScrollView  style={styles.container}>
            <Header>
            <TouchableOpacity
            onPress={
                () => this.props.navigation.goBack()
                 }>
               <Avatar  style={{ justifyContent: 'flex-end'}} source={require('./assets/leftarrow.png')} />
            </TouchableOpacity>

            </Header>
            <Image  style={styles.item} source={{ uri: item.image}} />

             <View style={styles.contentContainer}> 
             <View >
                    <Text style={styles.text}>{item.empresa}</Text>
                    <Text style={styles.enderecotext}>{item.bairro}</Text>
                    <Text style={styles.enderecotext}>{item.municipio}</Text>
            </View>   
          
            <View style={styles.buttons}>
            <View   style={styles.containerdinheiro}><Nome>R$</Nome></View>

                <Text style={styles.textValor}> {item.preco}</Text></View>
                                 
                <View style={styles.contentContainer}>
               <Text style={{ marginTop: 10, marginLeft:10,marginRight:10}}>
               Hello there, my sweet Blushers!

Love can drive you crazy, at times, but it also bridddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddngs out the best in you. Take these Love-infused Templates with you anytime and don't forget to share your blushy-flushy feelings!
               </Text>
           </View>
            </View>
                   
       
           
          
  </ScrollView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? 25 : 0,
      backgroundColor: '#1b78d7',
     
  },
  contentContainer: {
    flex: 1, // pushes the footer to the end of the screen
    backgroundColor: '#fff',
   
  },
  buttons: {
    width: Dimensions.get('window').width,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffa500",
    borderRadius: 5,
    flexDirection:'row',
    marginTop: 5
  },
  containerdinheiro: {
    backgroundColor:'#ff0000',
    height:40,
    width:40,
    borderRadius:30,
    marginLeft:10
  },
  footer: {
    backgroundColor:'#fff',
    flex:0.1,
    elevation:2,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  itemm: {
    backgroundColor:'#fff',
    borderRadius: 10,
    marginTop:10,
    flexDirection:'row',
    fontSize:15,
    width: Dimensions.get('window').width , // approximate a square
  },
  textValor: {
    fontWeight:'bold', color:'#ff0000', fontSize:25
   },
   text: {
    marginTop: 15 , marginLeft:10, fontWeight:'bold',fontSize:20
  },
  enderecotext: {
    marginTop: 5 , marginLeft:10,fontSize:15, marginBottom:20
  },
  containerValor: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
    backgroundColor:'#ffa500',
    borderRadius: 10,
    marginTop:15,
    marginBottom:15,
    flexDirection:'row',
    width:100,
    height:100
  },
  item: {
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').width,
     borderTopLeftRadius:20,
  borderTopRightRadius:20,
    marginTop:15
}
})