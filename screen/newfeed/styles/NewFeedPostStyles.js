import {StyleSheet} from 'react-native'

export const postStyles = StyleSheet.create({
    post_container: {
        padding: 15,
        borderTopWidth: 1,
        borderTopColor: 'lightgrey'
    },
    post__header_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 10
    },
    post__header__left: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    post__avatar: {
        width: 60,
        height: 60,
        borderRadius: 60
    },
    post__info__container: {
        marginLeft: 10
    },
    post__info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    post__info__summary: {
        color: '#111',
        fontWeight: '500',
        fontSize: 15
    },
    post__info__name: {
        color: 'grey',
        fontWeight: '500'
    },
    post__info__time: {
        color: 'grey',
        fontWeight: '500'
    },
    post__body: {
        color: '#111',
        fontSize: 15,
        fontWeight: '400'
    },
    post__footer_container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10
    },
    post__footer_button: {
        flexDirection: 'row',
        alignItems: 'center'
    }, 
    image_btn: {
        width: 28,
        height: 28
    },
    reaction_count: {
        marginLeft: 5,
        marginRight: 10,
        color: '#111',
        fontWeight: '500'
    }
})