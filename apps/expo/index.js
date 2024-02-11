// registerRootComponent happens in "expo-router/entry"
//import 'expo-router/entry'

// Step 1: Import React Native Feature Flags
import ReactNativeFeatureFlags from 'react-native/Libraries/ReactNative/ReactNativeFeatureFlags'

// Step 2: Enable pointer events in JavaScript
ReactNativeFeatureFlags.shouldEmitW3CPointerEvents = () => true

// Step 3: Enable pointer event based hover events in Pressibility
ReactNativeFeatureFlags.shouldPressibilityUseW3CPointerEventsForHover = () =>
  true

import { registerRootComponent } from 'expo'
import { ExpoRoot } from 'expo-router'

//Must be exported or Fast Refresh won't update the context

export function App() {
  const ctx = require.context('./app')
  return <ExpoRoot context={ctx} />
}

registerRootComponent(App)
