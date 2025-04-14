import { SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';

export default function Page() {
  const WEB_URL = 'http://192.168.0.9:3000';

  var bb = 20;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: WEB_URL }}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
      />
    </SafeAreaView>
  );
}
