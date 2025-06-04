import { useFonts } from 'expo-font';
import { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';

export default function Page() {
  const [fontsLoaded] = useFonts({
    'Pretendard-Bold': require('../assets/fonts/Pretendard-Bold.otf'),
  });
  const [isLoading, setIsLoading] = useState(true);
  const WEB_URL = 'http://192.168.0.9:3000';

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: WEB_URL }}
        onLoadEnd={() => setIsLoading(false)}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
      >
        {isLoading && (
          <View style={styles.splash}>
            <Image
              source={require('../assets/images/splash.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.text}>
              주문 수수료 0%에 맞는 혜택으로{'\n'}소비자와의 상생을 도모
            </Text>
          </View>
        )}
      </WebView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  splash: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  logo: {
    width: 400,
    height: 400,
  },
  text: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 22,
    textAlign: 'center',
    fontFamily: 'Pretendard-Bold',
  },
});
