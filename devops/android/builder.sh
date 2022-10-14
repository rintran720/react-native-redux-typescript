#!/bin/bash

set -e
cur_dir=`dirname $0`

echo "BUILDING ANDROID";
cd $cur_dir/../../android &&
./gradlew clean assembleRelease -PBUILD_NAME=$BUILD_NAME -PBUILD_NUMBER=$BUILD_NUMBER -PAPP_ID=$APP_ID -PMYAPP_RELEASE_STORE_FILE=$MYAPP_UPLOAD_STORE_FILE -PMYAPP_RELEASE_KEY_ALIAS=$MYAPP_UPLOAD_KEY_ALIAS -PMYAPP_RELEASE_STORE_PASSWORD=$MYAPP_UPLOAD_STORE_PASSWORD -PMYAPP_RELEASE_KEY_PASSWORD=$MYAPP_UPLOAD_KEY_PASSWORD && cd ..

echo "APK will be present at android/app/build/outputs/apk/app-release.apk"