import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { Image, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';

const IOS_USER_AGENT =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';
const ANDROID_USER_AGENT =
  'Mozilla/5.0 (Linux; Android 12; SM-S901N Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0';

export default function Page() {
  const [fontsLoaded] = useFonts({
    'Pretendard-Bold': require('../assets/fonts/Pretendard-Bold.otf'),
  });
  const [isLoading, setIsLoading] = useState(true);
  const [userAgent, setUserAgent] = useState<string | undefined>();
  const WEB_URL = 'http://localhost:3000';

  useEffect(() => {
    if (Platform.OS === 'ios') {
      setUserAgent(IOS_USER_AGENT);
    } else if (Platform.OS === 'android') {
      setUserAgent(ANDROID_USER_AGENT);
    }
  }, []);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        userAgent={userAgent}
        source={{ uri: WEB_URL }}
        onLoadEnd={() => setIsLoading(false)}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
      />
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
    width: 180,
    height: 180,
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 22,
    textAlign: 'center',
    fontFamily: 'Pretendard-Bold',
  },
});
