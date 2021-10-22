import { faAddressBook, faAddressCard, faAllergies, faAmbulance, faArchway, faArrowAltCircleDown, faBacon, faBaseballBall, faBatteryFull, faBlenderPhone, faBus, faCalculator, faCamera, faCoffee, faDiceFive, faDiceFour, faDiceOne, faDiceSix, faDiceThree, faDiceTwo, faEyeDropper, faFemale, faFrown, faGamepad, faLightbulb, faMale, faMeh, faQuestion, faSmile, faUser, faUserMd, faUserNinja, faUserNurse, faUserSlash, faUserTie } from '@fortawesome/free-solid-svg-icons'

const ICONS = [
    faCoffee,
    faCalculator,
    faAmbulance,
    faBlenderPhone,
    faAllergies,
    faBaseballBall,
    faGamepad,
    faBus,
    faEyeDropper,
    faAddressBook,
    faAddressCard,
    faLightbulb,
    faCamera,
    faBacon,
    faBatteryFull,
    faArchway
]

const HARD_MODE_ICONS = [
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix,
    faArrowAltCircleDown,
    faUserTie,
    faUser,
    faUserSlash,
    faUserNinja,
    faUserNurse,
    faUserMd,
    faMale,
    faFemale,
    faSmile,
    faFrown,
    faMeh
]

const DEFAULT_CARD_COLOR = {
    backgroundColor: '#425AF5',
    iconColor: '#FFFFFF'
}

const CARD_MATCH_BGCOLOR = '#00FF00'
const CARD_MISMATCH_BGCOLOR = '#FF0000'
const DEFAULT_CARD_ICON = faQuestion

export { ICONS, HARD_MODE_ICONS, DEFAULT_CARD_COLOR, DEFAULT_CARD_ICON, CARD_MATCH_BGCOLOR, CARD_MISMATCH_BGCOLOR }