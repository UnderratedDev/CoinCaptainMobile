import { Alert } from 'react-native';

export default function (title, message) {

    if (title === "" || message === "")
        return;

    Alert.alert (
        title, message, 
        [
            {
                text : 'Okay',
                onPress : () => {}
            },
            {
                cancelable : false
            }
        ]
    )

}