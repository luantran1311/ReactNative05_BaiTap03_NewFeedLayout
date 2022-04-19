import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { headerStyles } from '../styles/NewFeedHeaderStyles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera, faPenClip } from '@fortawesome/free-solid-svg-icons'

export default class NewFeedHeader extends Component {
  render() {
    return (
      <View style={headerStyles.header_container}>
          <TouchableOpacity style={headerStyles.header__button}>
            <FontAwesomeIcon icon={ faCamera } />
          </TouchableOpacity>
          <Text style={headerStyles.header__title}>Feed</Text>
          <TouchableOpacity style={headerStyles.header__button}>
          <FontAwesomeIcon icon={ faPenClip } />
          </TouchableOpacity>
      </View>
    )
  }
}