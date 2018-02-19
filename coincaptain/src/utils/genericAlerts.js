import { Alert } from 'react-native';

const ERROR_TITLE = "Whoops!";
const REQUIRED_FIELD_TITLE = "Required Field";

export const genericAlert = (title, message) => {

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

export const genericErrorAlert = (message) => {
    genericAlert(ERROR_TITLE, message);
}

export const genericErrorDescriptionAlert = (error) => {
    if (error === undefined || error === undefined || typeof error === "string")
        return;

    genericAlert(ERROR_TITLE, error.response.data.error_description);
}

export const genericRequiredFieldAlert = (field) => {
    genericAlert (REQUIRED_FIELD_TITLE, `Please enter a ${field}`);
}