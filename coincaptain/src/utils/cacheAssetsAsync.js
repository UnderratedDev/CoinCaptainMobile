import { Image } from 'react-native';
import { Asset, Font } from 'expo';

export default function cacheAssetsAsync ( {
    images = [],
    fonts  = []
}) {
    return Promise.all ([...cacheImages(images), ...cacheFonts(fonts)]);
}

function cacheImages(images) {
    return images.map (image => {
        return (typeof image === 'string') ? Image.prefetch (image) : Asset.fromModule (image).downloadAsync ();
    });
}

function cacheFonts (fonts) {
    return fonts.map (font => Font.loadAsync (font));
}