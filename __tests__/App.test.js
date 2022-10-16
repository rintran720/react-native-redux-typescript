/**
 * @format
 */

import { Platform } from 'react-native';

jest.mock('react-native', () => ({
  Platform: { OS: 'ios' },
}));

describe('React Native Platform', () => {
  test("Platform.OS should be 'ios'", () => {
    expect(Platform.OS).toBe('ios');
  });
});
