import {StyleSheet} from 'react-native'

export const headerStyles = StyleSheet.create({
    header_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    header__title: {
        fontSize: 18,
        fontWeight: '500',
        color: '#111'
    },
    header__button: {
        padding: 15
    }
})