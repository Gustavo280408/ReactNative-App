import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import Routes from './src/routes/index.routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/authContext'; // ✅ importa o provider

export default function App() {
  return (
    <AuthProvider> {/* ✅ envolve tudo com o AuthProvider */}
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
