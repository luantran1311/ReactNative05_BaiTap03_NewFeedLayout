import { SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import NewFeedHeader from './components/NewFeedHeader'
import NewFeedProfileList from './components/NewFeedProfileList'
import NewFeedPost from './components/NewFeedPost'

export default class NewFeedScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
          <NewFeedHeader />
          <NewFeedProfileList />
          <NewFeedPost />
      </SafeAreaView>
    )
  }
}