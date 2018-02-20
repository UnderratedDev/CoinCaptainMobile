import { Alert } from 'react-native';

import Database from '../database/Database';

const ERROR_TITLE = "Whoops!";
const REQUIRED_FIELD_TITLE = "Required Field";
const RESEND_EMAIL = "Resend email";
const DEFAULT_TITLE = "TITLE";
const DEFAULT_MESSAGE = "MESSAGE";
const OKAY = "Okay";

export const genericAlert = (title, message) => {

    if (title === "" || message === "")
        return;

    Alert.alert (
        title, message, 
        [
            {
                text : OKAY,
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

export const genericVerificationAlert = (title, message) => {
    if (!Database.checkUserVerfied ()) {
        Alert.alert (
            title,
            message,
            [
                {
                    text : RESEND_EMAIL, onPress : () => {
                        Database.sendVerificationEmail ();
                    }
                },
                {
                    text : OKAY, onPress : () => {
                        console.log ('Okay pressed');
                    }
                }
            ]
        );
    }
}

export const genericDefaultAlert = () => {
    genericAlert (DEFAULT_TITLE, DEFAULT_MESSAGE)
}