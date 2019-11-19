import React from 'react'
import { View , Text , ScrollView , Image  , StyleSheet , TouchableOpacity , Dimensions , Platform} from 'react-native'
import { Header , Avatar , Nome , Post , PostImage , User , Desc , Button} from './styles'
import Modal from "react-native-modal";
import { SearchBar } from 'react-native-elements';

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            search: '',
          }
    }
    toggleModal = () => {
        this.setState({
            isModalVisible: !this.state.isModalVisible
          });
      };
      updateSearch = search => {
        this.setState({ search });
      };
      toggleModalNavi = () => {
        this.setState({
            isModalVisible: !this.state.isModalVisible
          });
          this.props.navigation.navigate("Tab");
      };
      getModal() {
        return this.state.isModalVisible
      };
    render() {
        const { search } = this.state.search;

        return(
            
            <View style={styles.container}>
               <Modal 
               isVisible={this.state.isModalVisible}
               >
                  <TouchableOpacity style={styles.modalcontainer}
                  onPress={()=> this.toggleModal()}>
                  <View style={{backgroundColor: '#fff', borderRadius:20, }}> 
                  <View style={{backgroundColor: '#008799', flexDirection: 'row'}}> 
                        <Nome>Combustiveis</Nome>
                      
                    </View>
                    <TouchableOpacity
                    underlayColor="#CCC"
                    style={styles.buttonsvert}
                    onPress={
                        () => this.toggleModalNavi()
                       }
                >
                    <Image style={{marginLeft:20, marginRight:20, marginTop:5, marginBottom:5}} source={require('../../assets/gas.png')} />
                    <Text style={{color: '#0000fa'}}>Gasolina</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    underlayColor="#CCC"
                    style={styles.buttonsvert}
                    onPress={
                        () => this.toggleModalNavi()
                       }
                >
                    <Image style={{marginLeft:20, marginRight:20, marginTop:5, marginBottom:5}} source={require('../../assets/ethanol.png')} />
                    <Text style={{color: '#0000fa'}}>Etanol </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    underlayColor="#CCC"
                    style={styles.buttonsvert}
                    onPress={
                        () => this.toggleModalNavi()
                       }
                >
                    <Image style={{marginLeft:20, marginRight:20, marginTop:5, marginBottom:5}} source={require('../../assets/petrol.png')} />
                    <Text style={{color: '#0000fa'}}>Diesel</Text>
                </TouchableOpacity>
                   
                        
                    </View>
                 </TouchableOpacity>
               </Modal>
                <View style={styles.contentContainer}> 
                    <View style={{backgroundColor: '#008799', flexDirection: 'row'}}> 
                        <Nome>Menor</Nome>
                        <Desc>Preco</Desc>
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
                   
                </View>
                
                <View style={styles.footer}>
                <TouchableOpacity
                    underlayColor="#CCC"
                    style={styles.buttons}
                    onPress={()=>this.props.navigation.navigate("BarCode")}
                >
                    <Image style={{marginLeft:10, marginRight:10, marginTop:5, marginBottom:5}} source={require('../../assets/bar_code.png')} />
                    <Text style={{color: '#0000fa'}}>Escaneiar código de barras</Text>
                    
                </TouchableOpacity>
                <Button>
                <TouchableOpacity
                    underlayColor="#CCC"
                    style={styles.buttonsvert}
                    onPress={()=> this.toggleModal()}
                >
                    <Image style={{marginLeft:20, marginRight:20, marginTop:5, marginBottom:5}} source={require('../../assets/fuelstation.png')} />
                    <Text style={{color: '#0000fa'}}>Preço do</Text>
                    <Text style={{color: '#0000fa'}}>comustivel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    underlayColor="#CCC"
                    style={styles.buttonsvert}
                    onPress={()=>this.props.navigation.navigate("List")}
                >
                    <Image style={{marginLeft:20, marginRight:20, marginTop:5, marginBottom:5}} source={require('../../assets/clipboard.png')} />
                    <Text style={{color: '#0000fa'}}>Lista de </Text>
                    <Text style={{color: '#0000fa'}}>compras </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    underlayColor="#CCC"
                    style={styles.buttonsvert}
                    onPress={()=>this.props.navigation.navigate("Filtro")}
                >
                    <Image style={{marginLeft:20, marginRight:20, marginTop:5, marginBottom:5}} source={require('../../assets/filter.png')} />
                    <Text style={{color: '#0000fa'}}>Meus</Text>
                    <Text style={{color: '#0000fa'}}>filtros</Text>
                </TouchableOpacity>
                </Button>
                </View>
                
          
            </View>
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
        flex: 1,
        justifyContent:'center',
        borderRadius:20,
    },
    modalbutton: {
        marginTop: 10 , marginLeft:10, borderBottomColor:'#008799',borderBottomWidth:5, marginRight:10
    },
    contentContainer: {
        flex: 1 // pushes the footer to the end of the screen
    },
    footer: {
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        flex:0.7,
      },
      buttons: {
        borderColor:"#008799",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 1,
        borderRadius: 10,
        marginRight: 20,
        marginTop: 35,
        shadowColor: '#008799',
        marginLeft:20,
        alignItems:'center',
        flexDirection:'row',
      },
      buttonsvert: {
        shadowColor: '#008799',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 1,
        borderColor:"#008799",
        borderRadius: 10,
        marginTop: 25,
        alignItems:'center',
      },
});