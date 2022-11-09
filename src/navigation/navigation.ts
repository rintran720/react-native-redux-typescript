// RootNavigation.js
import { createNavigationContainerRef } from '@react-navigation/native';
import { AppRootParamsList } from './types';

export const navigationRef = createNavigationContainerRef<AppRootParamsList>();

export function navigate(name: keyof AppRootParamsList, params: any) {
	if (navigationRef.isReady()) {
		navigationRef.navigate(name, params);
	}
}
