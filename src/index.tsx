import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-notification-listener' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const NotificationListener = NativeModules.NotificationListener  ? NativeModules.NotificationListener  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return NotificationListener.multiply(a, b);
}

export function sum(a: number, b: number): Promise<number> {
  return NotificationListener.sum(a, b);
}

export function min(a: number, b: number): Promise<number> {
  return NotificationListener.min(a, b)
}

export function fullName(name: string): Promise<string> {
  return NotificationListener.fullName(name)
}
