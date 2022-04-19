import {StyleSheet} from 'react-native'

export const profileListStyles = StyleSheet.create({
    profile_container: {
        padding: 10,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: 'lightgrey'
    },
    profile__avatar: {
        width: 70,
        height: 70,
        borderRadius: 70
    },
    profile__name: {
        fontSize: 14,
        fontWeight: '500'
    }
})