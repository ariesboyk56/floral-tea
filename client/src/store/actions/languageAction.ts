import { LangAction, SET_LANGUAGE } from './../constants/languageConstant';

export const setLanguage = (lang: string): LangAction => {
    localStorage.setItem("language", lang)
    return {
        type: SET_LANGUAGE,
        payload: lang
    }
}