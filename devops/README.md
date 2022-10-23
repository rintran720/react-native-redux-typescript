# Dev-Ops

In root folder change `Makefile.example` to `Makefile`

## Android build scripts/setup

In Android, builds are done via Gradle.

These are a few pre-requisites to build a release apk.

- **BUILD_NAME** - The name that will be used by testers to identify the build, for example: '1.1.1', '1.0-alpha', etc.
- **BUILD_NUMBER** - A unique integer number identifying the build. This is used by Android to identify which build is the updated build. This should be an integer number, for example, 1, 111, 111, etc.
- **ANDROID_APP_ID** - This is the unique app identifier which is used to identify the app uniquely in the Google Play Store or can be used to identify if the build is dev, preprod or prod. These app ids may look like this: com.app.notetaker-dev, com.app.notetaker-alpha.
- **ANDROID_KEYSTORE_FILE** - This is the keystore file used to sign the app.
- **ANDROID_KEYSTORE_PASSWORD** - This is the keystore password used while creating the keystore.
- **ANDROID_KEY_ALIAS** - This is the alias used to create the keystore.
- **ANDROID_KEY_PASSWORD** - This is the password set for the key.

### Release variants

Ideally, every app has three release variants just like a typical backend application:

- Dev build - The app which connects to the staging/dev backend environment. This can also include additional libraries like TestFairy.
- Preprod build - The app which points to the preprod backend environment. This is usually very similar, if not identical to the production app.
- Prod build - The final apk which should be released to the Play Store.

Hence, we would need three different key stores for three different variants.

### Let's get started

The first step is to create a new keystore file.

Use the following command to create a keystore.

```sh
keytool -genkey -v -keystore dev_release.keystore -alias dev-alias -keyalg RSA -keysize 2048 -validity 10000
```

You would be prompted to enter ANDROID_KEYSTORE_PASSWORD, ANDROID_KEY_ALIAS, ANDROID_KEY_PASSWORD and a few other details.

Note these down somewhere and keep the keystore file safe. Push keystore file to `android/app`

The Android documentation has the following warning:

```
Note about saving the keystore:

Once you publish the app on the Play Store, you will need to republish your app under a different package name (losing all downloads and ratings) if you want to change the signing key at any point. So backup your keystore and don't forget the passwords.
```

Change `build-android` in `Makefile` with your params.

Use terminal and run command to build android application.

```
make build-android
```

The built apk can be found at: `android/app/build/outputs/apk/app-release.apk`

### Windows users

If you are running Windows 10 64bit or higher you can enable Ubuntu bash shell on your systems and gain access to the full bash command line and run the script there.
More on that here: https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/

Alternatively, you could install Cygwin on your system and run the scripts mentioned.

## iOS build scripts/setup

iOS builds via command line are much more complex as compared to Android.

> **Note: Builds work only for Mac users.** Since Apple requires that all the builds be made on Xcode itself, iOS apps can only be built on a Mac machine.

These are the few pre-requisites to build a release ipa file.

- **BUILD_NAME** - The name that will be used by testers to identify the build, for example: '1.1.1', '1.0-alpha', etc.
- **BUILD_NUMBER** - A unique integer number identifying the build. This is used by iOS to identify which build is the updated build. This should be an integer number. For example: 1, 111, 111, etc.
- **IOS_APP_ID** - This is the unique app identifier which is used to identify the app uniquely in the App Store or it can be used to identify if the build is dev, preprod or prod. App ids may look like this: com.app.notetaker-dev, com.app.notetaker-alpha.
- **IOS_CERTIFICATE** - This is the certificate file used to sign the app.
- **IOS_CERTIFICATE_KEY** - This is the password used while creating the certificate.
- **IOS_PROVISION_PROFILE** - This is the provision profile needed to build the app. This file mentions the capabilities/devices that are allowed to run the app.
- **IOS_EXPORT_OPTIONS_PLIST** - This is the options file needed to specify parameters for the build.
- **IOS_SCHEME** - The scheme which should be used to build the IPA. Typically, we will have different schemes per environment. For example, we can have a local, a preprod and a production scheme.
- **IOS_CONFIGURATION** - This is the setting which specifies if the build is DEBUG or RELEASE.
- **PROJECT_NAME** - This is the name of the project. For example, if your project name inside ios folder says SampleProject.xcworkspace or SampleProject.xcodeproj, then PROJECT_NAME=SampleProject .

### Release variants

Ideally, every app has three release variants just like a typical backend application:

- Dev build - The app which connects to the staging/dev backend environment. This can also have additional libraries like TestFairy.
- Pre-Prod build - The app which points to the preprod backend environment. This is usually very similar, if not identical to the production app.
- Prod build - The final IPA which should be released to the App Store.

Hence, we would need three different `schemes` for three different variants.

A typical build process in iOS would have the following steps:

1. Getting the certificates and provisioning profiles from the Apple developer account.
2. Adding the certificate to the default keychain and placing the provisioning profile at the location `~/Library/MobileDevice/Provisioning\ Profiles/`
3. Archiving the project - Think of it as an executable zip of the project that can be run using Xcode.
4. Exporting the IPA - Think of it as exporting the archive to a format recognized by an iPhone.

### Let's get started

1. Place the provisioning profile at `scripts/ios/profile/XYZ.mobileprovision`
2. Place the certificate at `scripts/ios/certs/ABC.p12`
3. Place an exportOptions file at `scripts/ios/exportOptions/exportOptions-dev.plist`
   Typically, an exportOptions file looks like this :
   > scripts/ios/exportOptions/exportOptions-dev.plist

```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
  <plist version="1.0">
  <dict>
      <key>compileBitcode</key>
      <false/>
      <key>method</key>
      <string>enterprise</string>
      <key>teamID</key>
      <string>ABC1234DA</string>
      <key>uploadBitcode</key>
      <true/>
      <key>uploadSymbols</key>
      <true/>
      <key>manifest</key>
      <dict>
          <key>appURL</key>
          <string>null</string>
          <key>displayImageURL</key>
          <string>null</string>
          <key>fullSizeImageURL</key>
          <string>null</string>
      </dict>
  </dict>
  </plist>
```

Make sure you put all the **above files** in the gitignore.

### Build script

Edit `prebuild-ios` and `build-ios` in `Makefile` with your params.

Use terminal to run commands to build application.

```
make prebuild-ios
make build-ios
```

The build should take a couple of minutes and you can find the final ipa file at
`ios/build/Products/IPA/`

<br>

# References:

Get more information from [React Native guide](https://www.reactnative.guide/11-devops/11.0-devops.html)
