import React from 'react'
import { useSelector } from 'react-redux'

import uzbek from './uzbek.json';
import english from './english.json';
import russian from './russian.json'

function Text({ id }) {

    const language = useSelector(state => state.languageReducer)
console.log(language);
    switch (language) {
        case "tajik":
            return english[id]
        case "rusian":
            return russian[id]
        case "uzbek":
            return uzbek[id]
        default:
            return id;
    }
}

export default Text;
