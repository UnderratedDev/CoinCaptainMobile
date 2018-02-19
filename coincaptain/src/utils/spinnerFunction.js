import { Platform } from 'react-native';

const TIMEOUT = 100;

export default function spinnerFunction (func) {
    if (Platform.OS === 'ios')
        setTimeout(() => { 
            func ();
        }, TIMEOUT);
    else
        func ();
}