import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Header from './Screens/Shared/Header';
import ProductContainer from './Screens/Product/ProductContainer';
import Main from './Navigators/Main';
import { Provider } from "react-redux";
import Toast from "react-native-toast-message"
import store from './Redux/store';
import { Provider as PaperProvider } from 'react-native-paper';
import Auth from './Context/Store/Auth';
import DrawerNavigator from './Navigators/DrawerNavigator';
export default function App() {
  return (
    <Auth>
      <Provider store={store}>
        <NavigationContainer>
          <PaperProvider>
            <Header />
            {/* <ProductContainer /> */}
            {/* <Main /> */}
            <DrawerNavigator />
            <Toast />
          </PaperProvider>
        </NavigationContainer>
      </Provider>
    </Auth>




  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
