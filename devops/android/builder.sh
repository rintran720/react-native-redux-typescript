#!/bin/bash

set -e
cur_dir=`dirname $0`

echo "BUILDING ANDROID";
cd $cur_dir/../../android &&
./gradlew clean assembleRelease -PBUILD_NAME=$BUILD_NAME -PBUILD_NUMBER=$BUILD_NUMBER -PANDROID_APP_ID=$APP_ID -PANDROID_STORE_FILE=$ANDROID_STORE_FILE -PANDROID_KEY_ALIAS=$ANDROID_KEY_ALIAS -PANDROID_STORE_PASSWORD=$ANDROID_STORE_PASSWORD -PANDROID_KEY_PASSWORD=$ANDROID_KEY_PASSWORD && cd ..

echo "APK will be present at android/app/build/outputs/apk/app-release.apk"