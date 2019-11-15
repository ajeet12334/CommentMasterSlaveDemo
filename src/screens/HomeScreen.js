import React, {useEffect, useContext} from 'react';
import {
  StatusBar,
  FlatList,
  Text,
  ActivityIndicator
} from 'react-native';
import axios from 'axios'
import {API_URL, APP_TITLE} from '../constants/string'
import HeaderComponent from '../components/HeaderComponent'
import ListItems from '../components/ListItems'
import { Container} from 'native-base';
import {RootContext} from '../App'

const HomeScreen = (props) => {

  const {state, dispatch} = useContext(RootContext);

  const { comments, isLoading, isError } = state;

  useEffect(() =>{
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      console.log("URL :", API_URL)
      axios.get(API_URL, null)
        .then((response) => {        
          dispatch({ type: 'FETCH_SUCCESS', payload: response.data})  
        }).catch((error) => {
          dispatch({ type: 'FETCH_FAILURE' });
        });
    };
    fetchData();
  },[])


  navigateToDetail = (item) => {
    console.log("navigateToDetail")
    props.navigation.navigate('CommentDetail',{'comment':item})
  };


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <HeaderComponent title={APP_TITLE}/>

        {isError && <Text> {JSON.stringify(isError)} </Text>}
        { 
          isLoading ?
            <ActivityIndicator size="large"/> 
            :
            <FlatList
              data={comments}
              renderItem={(item) => <ListItems singleItem={item} onNext={navigateToDetail}/>}
              keyExtractor={item => JSON.stringify(item.id)}
            />      
        }
      </Container>
    </>
  );
};

export default HomeScreen;
