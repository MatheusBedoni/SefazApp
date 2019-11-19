import React from 'react'
import { View , Text , SafeAreaView , StyleSheet , Platform} from 'react-native'
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Header , Avatar , Nome , Post , PostImage , User , Desc , Button} from './styles'

import { BarCodeScanner } from 'expo-barcode-scanner';

export default class App extends React.Component{
  state = {
    hasCameraPermission: null,
    scanned: false,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };
  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return(
      <SafeAreaView  style={styles.container}>
             <View style={styles.contentContainer}> 
             <View style={{backgroundColor: '#008799', flexDirection: 'row'}}> 
                        <Nome>Código de </Nome>
                        <Desc>Barras</Desc>
                    </View>
             <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
             />

              {scanned && (
              <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />
              )}
                  
               </View>
               
            <View style={styles.footer}>
                    
                    </View>
  </SafeAreaView >
    );
  }
  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? 25 : 0,
      backgroundColor: '#1b78d7'
  },
  contentContainer: {
    flex: 1 // pushes the footer to the end of the screen
  },
  footer: {
    backgroundColor:'#fff',
    flex:0.1,
    elevation:2,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
})