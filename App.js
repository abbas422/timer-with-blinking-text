import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

class Counter extends React.Component {

  state = {count: 0,coler_matrix:['red','green','blue','yellow','black','pink','gray','purple','cyan'],rnd:1}

  componentWillMount() {
    setInterval(() => {
      //var u=Math.round(Math.random() * 10)
      this.setState({
        count: this.state.count + 1,
        rnd:Math.round(Math.random() * 8),


      })
    }, 1000);
  }

  render() {
   const {count} = this.state
    // const {rnd} = this.state
    

    return (
      <Text style={{backgroundColor:'white',color:this.state.coler_matrix[this.state.rnd], fontSize:140}}>
        {count}
      </Text>
    )
  }
}

export default class App extends React.Component {
   render() {
    return (
      <View style={styles.container}>

        <Counter  />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
