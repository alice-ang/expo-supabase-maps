<div align="center">
  <h2>🎮 Flick BETA 1.0</h2>

</div>

## Features

This repository is 🔋 battery packed with:

- ⚡️ Expo 49SDK
- ✨ TypeScript
- 💨 [Nativewind](https://www.nativewind.dev/quick-starts/expo)
- GraphQL
- 🔒 [Clerk](https://clerk.com/)
- 💨 [Tanstack Query](https://tanstack.com/query/latest/docs/react/quick-start)
- ⼬ [Expo router](https://docs.expo.dev/router/introduction/)
- [hygraph cms](https://hygraph.com/)
- Google Vision API
- [React Native Health](https://github.com/agencyenterprise/react-native-health)
- [React Native Health Connect](https://github.com/matinzd/react-native-health-connect)

### Prerequisites ⚠️

- [Figma Screens](https://www.figma.com/proto/rHQwpHltc6DXv47ZDZKnDf/Flick-Dark-Mode?page-id=0%3A1&type=design&node-id=10-661&viewport=-1530%2C832%2C1.17&t=Ki3S1zzJxYV4HXq3-1&scaling=scale-down&mode=design)(still WIP)

## Troubleshoot 🎯

`npx expo-doctor `

##### Find MaterialCommunityIcons Icons

Filter by MaterialCommunityIcons [here](https://icons.expo.fyi/)

##### Nativewind error on typescript types

- [Create a app.d.ts file](https://www.nativewind.dev/getting-started/typescript)

##### 'value' is unavailable: introduced in iOS 12.0

[Check IOS deployment target in Xcode](https://stackoverflow.com/questions/72729591/fbreactnativespec-h-error-after-upgrading-from-0-68-x-to-0-69-0)

#### Android emulator not starting from VS code (Mac)

[Make sure you have this in the basj/zrc file](https://stackoverflow.com/questions/63209403/npx-react-native-run-android-doesnt-start-emulator-and-doesnt-run-if-emulator)
`export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools`

##### Changes in Podfile not regestering / working

Update pods `pod install --repo-update`
[Clean pod cache](https://codeflarelimited.com/blog/how-to-clear-pod-cache-in-react-native/)
cd ios
rm -rf ~/Library/Caches/CocoaPods
rm -rf Pods
rm -rf ~/Library/Developer/Xcode/DerivedData
pod deintegrate
pod setup
pod install
cd ..

##### :app:installDebug FAILED (android)

[clean gradle](https://stackoverflow.com/questions/37500205/react-native-appinstalldebug-failed)
`cd android && ./gradlew clean && cd ..`

##### INSTALL_FAILED_INSUFFICIENT_STORAGE (android)

[Check memory capacity on virtual device](https://stackoverflow.com/questions/62861072/install-failed-insufficient-storage-error-when-i-ran-the-npm-run-android-comma)

##### CMD + m not working in android emulator

run `adb shell input keyevent 82` in terminal

##### M1 Pod commands

`cd ios && arch -x86_64 pod install --repo-update & cd ..`

#### Run app on devices

Andorid
`npx expo run:android --device`

- Dont know the deviceId?
  run `adb devices -l`

IOS
`npx expo run:ios --device`

#### Prebuild and clean

Both IOS and android
`npx expo prebuild --clean`

#### React markdown type error

[update type in node_modules](https://github.com/iamacup/react-native-markdown-display/issues/181)
Add children to `MarkdownProps` in `node_modules/react-native-markdown-display/src/index.d.ts`

```
export interface MarkdownProps {
rules?: RenderRules;
children?: ReactNode;
style?: StyleSheet.NamedStyles<any>;
renderer?: AstRenderer;
markdownit?: MarkdownIt;
mergeStyle?: boolean;
debugPrintTree?: boolean;
onLinkPress?: (url: string) => boolean;
}
```

#### RCT-Folly/folly/portability/Time.h:52:17: typedef redefinition with different types ('uint8_t' (aka 'unsigned char') vs 'enum clockid_t')

Added `RCT-Folly/folly/portability/Time.h:52:17: typedef redefinition with different types ('uint8_t' (aka 'unsigned char') vs 'enum clockid_t')` to podfile
https://github.com/facebook/react-native/issues/32483
