import { StyleSheet, Dimensions} from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
    verifyPage:{
        flex: 1,
        backgroundColor: "#FFF7E9",
        width: windowWidth,
        height: windowHeight,
    },
    backgroundImage:{
        flex: 1,
        resizeMode: 'stretch',
    },

})