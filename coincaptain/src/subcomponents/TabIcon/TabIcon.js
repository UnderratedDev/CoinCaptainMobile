// TabIcon.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import JsxParser from 'react-jsx-parser'

// import Icon from 'react-native-vector-icons/Ionicons';

// import Icon from 'native-base';

import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';

const components = {
    EntypoIcon : Entypo,
    EvilIconsIcon : EvilIcons,
    FeatherIcon : Feather,
    FontAwesomeIcon : FontAwesome,
    FoundationIcon : Foundation,
    IoniconsIcon : Ionicons,
    MaterialIconsIcon : MaterialIcons,
    MaterialCommunityIconsIcon : MaterialCommunityIcons,
    OcticonsIcon : Octicons,
    ZocialIcon : Zocial
}

function generateComponent (props) {
    const iconComponent = components[props.type];

    console.log (props);
    console.log (props.type);

    return <iconComponent name = { props.focused ? props.iconFocused : props.iconDefault } size = { props.size } style = { { color : props.tintColor } } />;
}

class TabIcon extends Component {

    render () {
        const TagName = generateComponent (this.props);
        console.log (TagName);
        return (
            <TagName />
        );
    }
}

/* React.createElement (
    type,
    {
        name : { iconName },
        size : { size },
        style : { color: tintColor }
    }
) */

/* <Ionicons
    name = { focused ? iconFocused : iconDefault }
    size = { size }
    style = { { color: tintColor } }
/> */

TabIcon.propTypes = {
    focused: PropTypes.bool,
    iconDefault: PropTypes.string.isRequired,
    iconFocused: PropTypes.string.isRequired,
    tintColor: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    size: PropTypes.number
};
TabIcon.defaultProps = {
    focused: false,
    tintColor: 'orange',
    size: 28
};

export default TabIcon;