import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { langUz, langRu, langTj } from '../Redux/Language/languageAction'; 
// import Text from '../First/Language/language'
import { FirstLangEng, FirstLangRu, FirstLangUz, FirstWrapper } from './style';

function First() {

    const language = useSelector((state) => state.languageReducer);

    const dispatch = useDispatch();

    return (
        <FirstWrapper>
            <FirstLangUz onClick={()=>{dispatch(langUz())}}>UZ</FirstLangUz>
            <FirstLangRu onClick={()=>{dispatch(langRu())}}>RU</FirstLangRu>
            <FirstLangEng onClick={()=>{dispatch(langTj())}}>EN</FirstLangEng>
        </FirstWrapper >
    )
}

export default First;
