import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen'
import CommentDetailScreen from '../screens/CommentDetailScreen'

const CommentNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  CommentDetail: {screen: CommentDetailScreen},
},
{
  headerMode: 'none',
}
);


export default createAppContainer(CommentNavigator);