import React, {Component} from 'react';
import {
    View,
    Navigator, 
    AppRegistry,
    ScrollView,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default class ScrollPage extends Component {
    render(){
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroll}>
                    <Text style={{fontSize:50}}>Scroll me plz</Text>
                    <Image source={require('../assets/giraffine.png')} style={styles.image}/>
                    <Image source={require('../assets/giraffine.png')} style={styles.image}/>
                    <Image source={require('../assets/giraffine.png')} style={styles.image}/>
                    <Image source={require('../assets/giraffine.png')} style={styles.image}/>
                    <Text style={{fontSize:50}}>If you like</Text>
                    <Image source={require('../assets/giraffine.png')} style={styles.image}/>
                    <Image source={require('../assets/giraffine.png')} style={styles.image}/>
                    <Image source={require('../assets/giraffine.png')} style={styles.image}/>
                    <Image source={require('../assets/giraffine.png')} style={styles.image}/>
                    <Text style={{fontSize:50}}>Scrolling down</Text>
                    <Image source={require('../assets/giraffine.png')} style={styles.image}/>
                    <Image source={require('../assets/giraffine.png')} style={styles.image}/>
                    <Image source={require('../assets/giraffine.png')} style={styles.image}/>
                    <Image source={require('../assets/giraffine.png')} style={styles.image}/>
                    <Text style={{fontSize:50}}>Scrolling down</Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    scroll: {
        flex:1,
        width:'100%',
    },
    image: {
        resizeMode: 'contain',
        width: '80%',
    }
})