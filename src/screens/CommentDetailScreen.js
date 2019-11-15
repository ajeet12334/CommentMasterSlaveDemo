import React from 'react';
import {
    StatusBar,
    Text,
    StyleSheet,
  } from 'react-native';
import HeaderComponent from '../components/HeaderComponent'
import { Container} from 'native-base';
import {COMMENT_DETAIL} from '../constants/string'

const CommentDetailScreen = (props) => {

    const comment = props.navigation.getParam('comment', '');
    console.log("comment",comment);

    onBack = () => {
        console.log("onBack")
        props.navigation.goBack()
    };

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <Container>
                <HeaderComponent showBack title={COMMENT_DETAIL} back={onBack}/>
                <Text style={styles.titleStyle}>Name : {"\n" + comment.name}</Text>
                <Text style={styles.subTitleStyle}>Email : {"\n" + comment.email}</Text>
                <Text style={styles.subTitleStyle}>Body : {"\n" + comment.body}</Text> 
            </Container>
        </>
    );
};

const styles = StyleSheet.create({
    imageStyle:{
        width: '100%', 
        height: 300, 
        resizeMode:'cover'},
    titleStyle: {
        marginLeft: 15,
        marginRight:15,
        marginTop:15,
        fontSize: 20
    },
    subTitleStyle: {
        margin: 15,
        fontSize: 16
    },
    textStyle: {
        margin: 5,
        fontSize: 14
    }
});

export default CommentDetailScreen;
