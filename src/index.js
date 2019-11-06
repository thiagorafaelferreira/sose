import Presentation from './pages/Presentation';
import Login from './pages/Login';
import Device from './pages/Device';
import Switches from './pages/Switches';
import SubscriberMQTT from './pages/SubscriberMQTT';
import Configuration from './pages/Configuration';
import ButtonConfig from './components/buttonConfig';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Presentation: Presentation,
    Login: Login,
    Device: Device,
    Switches: Switches,
    SubscriberMQTT: SubscriberMQTT,
    Configuration: Configuration,
    ButtonConfig: ButtonConfig,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#00BCD4',
      },
      headerTitleStyle: {
        color: 'white'
      }
    }
  }),
  
);

export default Routes;