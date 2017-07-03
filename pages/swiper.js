import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ScrollView,
} from 'react-native';
import Swiper from 'react-native-swiper'
export default class SwiperDemo extends Component {
  state = this.initState()
  ran = this.initRan()
  initRan(){
    console.log('initRan', this.state)
  }
  _onMomentumScrollEnd(){
    console.log('onMomentumScrollEnd')
  }
  initState(){
    console.log('state', this.state)
    // this.setState({
    //   name: 'ran'
    // })
    return {
      name: 'zhangran'
    }
  }
  componentDidMount(){
    let as = {name:'ran', age: 'sex'}
    let a = {
      ...as
    }

    console.log('a:',a)
    let swiper = this.refs.swiper
    console.log('swiper', swiper)
  }
  render(){
    console.log('render', this.state)
    return (
      <View style={styles.layout}>
        <Swiper
          ref='swiper'
          styles={styles.swiper}
          loop={false}
          bounces={true}
          title={'<Text>Hello world</Text>'}
          onMomentumScrollEnd={this._onMomentumScrollEnd}
          >
          <View style={[styles.page, styles.red]}></View>
          <View style={[styles.page, styles.green]}></View>
          <View style={[styles.page, styles.blue]}></View>
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  layout: {
    flex:1,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  swiper: {
  },
  page: {
    width: 280,
    height: 500,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 80
  },
  red: {
    backgroundColor: 'red',
  },
  blue: {
    backgroundColor: 'blue',
  },
  green: {
    backgroundColor: 'green'
  },
})


class D{
  initState(props, setOffsetInState){
    const state = this.state || {}
    const initState = {
      autoplayEnd: false,
      loopJump: false
    }
    const newInternals = {
      isScrolling: false
    }
    initState.total = props.children ? props.children.length || 1 : 0
    if(state.total === initState.total) {
      initState.index = state.index
    } else {
      setOffsetInState = true;
      initState.index = initState.total > 1 ? Main.min(props.index, initState.total - 1) : 0
    }
    initState.dir = props.horizontal === false ? 'y' : 'x'
    initState.width = props.width || width
    initState.height = props.height || height
    newInternals.offset = {}
    if(initState.total > 1) {
      let setup = initState.index
      if(props.loop) {
        setup++
      }
      newInternals.offset[initState.dir] = initState.dir === 'y'
        ? initState.height * setup
        : initState.width * setup
    }
    if(setOffsetInState){
      initState.offset = newInternals.offset
    }
    this.internals = newInternals
    return initState
  }

  autoplay = () => {
    if(!Array.isArray(this.props.children) || 
      !this.props.autoplay || 
      this.internals.isScrolling ||
      this.state.autoplayEnd) return

    this.autoplayTimer && clearTimeout(this.autoplayTimer)
    this.autoplayTimer = setTimeout( () => {
      if(!this.props.loop && (
        this.props.autoplayDirection
        ? this.state.index === this.state.total - 1
        : this.state.index === 0
      ))return this.setState({autoplayEnd: true})
      this.scrollBy(this.props.autoplayDirection ? 1 : -1)

    }, this.props.autoplayTimeout * 1000)  
  }


  scrollBy = (index, animated = true) => {
    if(this.internals.isScrolling.isScrolling || this.state.total < 2) return
    const state = this.state
    const diff = (this.props.loop ? 1 : 0) + index + this.state.index
    let x = 0
    let y = 0
    if (state.dir === 'x') x = diff * state.width
    if (state.dir === 'y') y = diff * state.height
    if(Playform.OS === 'android') { 
      this.refs.scrollView && this.refs.scrollView[animated ? 'setPage' : 'setPageWithoutAnimation'](diff)
    } else {
      this.refs.scrollView && this.refs.scrollView.scrollTo({ x, y, animated })
    }

    this.internals.isScrolling = true
    this.setState({
      autoplayEnd: false
    })

    if(!animated || Platform.OS === 'android') {
      setImmediate(() => {
        this.onScrollEnd({
          nativeEvent: {
            positioin: diff
          }
        })
      })
    }
  }

  scrollViewPropOverrides(){}
  renderScrollView = pages => {
    if(Platform.OS === 'ios') {
      return (
        <ScrollView ref = 'scrollView'
          {...this.props}
          {...this.scrollViewPropOverrides()}
          contentContainerStyle={[styles.wrapper, this.props.style]}
          contentOffset={this.state.offset}
          onScrollBeginDrag={this.onScrollBegin}
          onMomentumScrollEnd={this.onScrollEnd}
          onScrollEndDrag={this.onScrollEndDrag}
          >
          {pages}
        </ScrollView>  
      )
    }else{
      <ViewPagerAndroid ref='scrollView'
        {...this.props}
        initialPage={this.props.loop ? this.state.index + 1 : this.state.index}
        style={{flex:1}}>
        {pages}
      </ViewPagerAndroid>
    }
  }

  render(){
    const state = this.state
    const props = this.props
    const children = props.children
    const index = state.index
    const total = state.total
    const loop = props.loop
    const loopVal = loop ? 1 : 0
    let pages = []
    const pageStyle = [{width: state.width, height: state.height}, styles.slide]


    return (
      <View style={[styles.container, {
        width: state.width,
        height: state.height
      }]}>
        {this.renderScrollView(pages)}
      </View>
    )

  }


}