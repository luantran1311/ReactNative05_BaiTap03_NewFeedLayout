import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { profileListStyles } from '../styles/NewFeedProfileListStyles'
import {dataAvatar} from '../../../assets/data/data'

export default class NewFeedProfileList extends Component {

  renderProfileList = (profileList) => {
    return profileList.map((profile,index) => (
      <TouchableOpacity key={index} style={profileListStyles.profile_container}>
        <Image source={profile.image} style={profileListStyles.profile__avatar}/>
        <Text style={profileListStyles.profile__name}>{profile.name}</Text>
      </TouchableOpacity>

    ))
  }

  render() {
    return (
      <View>
        <ScrollView horizontal>
          {this.renderProfileList(dataAvatar)}
        </ScrollView>
      </View>
    )
  }
}