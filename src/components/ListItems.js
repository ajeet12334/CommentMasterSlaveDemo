import React from 'react'
import {TouchableWithoutFeedback} from 'react-native'
import { ListItem, Body, Right, Text, Button, Icon } from 'native-base';


const ListItems = (props) => {
    const item = props.singleItem.item;
    return(
        <TouchableWithoutFeedback activeOpacity={0.7} onPress={() => props.onNext(item)}>
            <ListItem>
                <Body>
                    <Text note style={{marginTop:5}}>Post Id: {item.postId}</Text>
                    <Text note style={{marginTop:5}}>Id: {item.id}</Text>
                </Body>
                <Right style={{justifyContent:'center'}}>
                    <Button transparent>
                        <Icon name='ios-arrow-forward'/>
                    </Button>
                </Right>
            </ListItem>
    </TouchableWithoutFeedback>
    );
}

export default ListItems;