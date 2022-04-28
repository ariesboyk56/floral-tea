import { LangState, LangAction, SET_LANGUAGE } from '../constants/languageConstant';
const localStoreLanguage = localStorage.getItem("language")

const initialState: LangState = {
    language: localStoreLanguage ? localStoreLanguage : "EN"
}

const languageReducer = (state = initialState, action: LangAction) => {
    switch(action.type) {
        case SET_LANGUAGE:
          return {
            ...state,
            language: action.payload
          }
        default: 
          return state;
      }
}

export default languageReducer;