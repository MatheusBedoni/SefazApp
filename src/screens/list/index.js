import React from 'react'
import { View , SafeAreaView , StyleSheet , Platform , Image , Text , FlatList , TouchableOpacity , Dimensions} from 'react-native'
import { Header , Avatar , Nome , Post , PostImage , User , Desc , Button} from './styles'
import { SearchBar } from 'react-native-elements';


export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        itemSelected:"5",
        sele:"34",
        search: '',
        data: [
          { rn: "0", empresa: "Posto 1", bairro :"Bairro1",municipio:"Municipio1",preco:4.30,image:"http://pioneiro.rbsdirect.com.br/imagesrc/25411641.jpg?w=620"},
          { rn: "1", empresa: "Posto 2",bairro:"Bairro2",municipio:"Municipio2",preco:5.50,image:"https://www.brasilagro.com.br/uploads/conteudo/conteudo/2019/10/zAK3L/bombas-etanol-e-gasolina-x1-fJIGsm_510x400.jpg"},
         
         
        ]
      }
}
toggleModal = (id) => {
  seleitem = id
   
};
updateSearch = search => {
  this.setState({ search });
};
selected = (id) => {
    this.setState({itemSelected:id});
  };
  getModal() {
    return seleitem
  };
  toggleModalNavi = (item) => {
   
      this.props.navigation.navigate("Detail",item);
  };
  setItem(item) {
    
        return(
            <TouchableOpacity style={styles.itemm}
             onPress={ () =>  this.toggleModalNavi(item)}
             >
                <View    style={styles.containerdinheiro}><Nome>R$</Nome></View>
                       <View style={styles.containerValor}><Text style={styles.textValor}> {item.preco}</Text></View>
                            <View >
                                <Text style={styles.text}>{item.empresa}</Text>
                                <Text style={styles.enderecotext}>{item.bairro}</Text>
                                <Text style={styles.enderecotext}>{item.municipio}</Text>
                            </View>                               
            </TouchableOpacity>                          
        ) 
   
  };
  setSelectedItem(item) {
    
    return(
        <TouchableOpacity style={styles.itemmSelected}
        
         >
            <View    style={styles.containercancel}><Nome>X</Nome></View>
                        <View style={styles.modalcontainer}>
                            <Text style={styles.text}>{item.name}</Text>
                            <Text style={styles.enderecotext}>{item.end}</Text>
                          
                        </View>  
                        <View>
                        <Text style={styles.textValor}></Text>
                        <Text style={styles.textValor}></Text>
                        <Text style={styles.textValor}>R${item.valor}</Text></View>  
                                            
        </TouchableOpacity>                          
    )     
};
  render() {
    const { search } = this.state.search;
    return(
      <SafeAreaView  style={styles.container}>
             <View style={styles.contentContainer}> 
             <View style={{backgroundColor: '#008799', flexDirection: 'row'}}> 
                        <Nome>Lista de</Nome>
                        <Desc> Compras</Desc>
                    </View>    
                    <SearchBar
                    inputStyle={{backgroundColor: 'white',borderRadius: 10}}
                    lightTheme
                    inputContainerStyle={{backgroundColor: 'white',borderRadius: 10}}
                    containerStyle={{backgroundColor: '#1b78d7', borderWidth: 0,borderBottomWidth:0,borderTopWidth:0, borderRadius: 10}}
                    placeholder="Pesquise pelo nome produto"
                    onChangeText={this.updateSearch}
                    value={search}
                    />
                   
                    <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => this.setItem(item)}
                    keyExtractor={item => item.rn}
                    />
                   </View>
                   
            <View style={styles.footer}>
                    
                    </View>
  </SafeAreaView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? 25 : 0,
      backgroundColor: '#1b78d7'
  },
  modalcontainer: {
      justifyContent:'center',
      borderRadius:20,
      alignItems:'center'
      
  },
  modalbutton: {
      marginTop: 10 , marginLeft:10, borderBottomColor:'#008799',borderBottomWidth:5, marginRight:10
  },
  contentContainer: {
      flex: 1, // pushes the footer to the end of the screen
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
    buttons: {
      borderColor:"#008799",
      borderWidth: 3,
      borderRadius: 10,
      marginRight: 20,
      marginTop: 35,
      marginLeft:20,
      alignItems:'center',
      flexDirection:'row',
    },
    buttonsvert: {
      borderColor:"#008799",
      borderWidth: 3,
      borderRadius: 10,
      marginTop: 35,
      alignItems:'center',
    },
    text: {
      marginTop: 15 , marginLeft:10, fontWeight:'bold',fontSize:20
    },
    enderecotext: {
      marginTop: 5 , marginLeft:10,fontSize:15, marginBottom:20
    },
    textValor: {
     fontWeight:'bold', color:'#ff0000', fontSize:25
    },
    itemm: {
      backgroundColor:'#fff',
      borderRadius: 10,
      marginTop:10,
      marginLeft:20,
      marginRight:20,
      flexDirection:'row',
      fontSize:15,
    },
    itemmSelected: {
      backgroundColor:'#ffa500',
      borderRadius: 10,
      marginTop:10,
      flexDirection:'row',
      justifyContent:'space-between',
      fontSize:15,
      width: Dimensions.get('window').width , // approximate a square
    },
    containerdinheiro: {
      backgroundColor:'#ff0000',
      height:40,
      width:40,
      borderRadius:30,
      marginLeft:10
    },
    containercancel: {
      backgroundColor:'#ff0000',
      width:40,
    
    },
    containerValor: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 1,
      backgroundColor:'#ffff00',
      borderRadius: 10,
      marginTop:15,
      marginBottom:15,
      flexDirection:'row',
      width:100,
      height:100
    },
});