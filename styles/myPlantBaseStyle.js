import { StyleSheet } from "react-native";

export default StyleSheet.create({
    plantPicsContainer: {
        flex: 1, 
        flexDirection: 'row', 
      },      
    plantPic:{
        flex: 1, 
        alignItems: 'center'
    },
    plantBaseTitle:{
        alignSelf: 'center',
        fontSize: 32,
        fontFamily: 'Kabel-Black',
        color: '#385250',
    },
    scrollView:{
        backgroundColor:"#FFF7E9",
    },
    headerIcons:{
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: "center",
    },
    addPlant:{
        alignItems: 'center',
        marginLeft: 50,
        padding: 5,
    },
    organizePlant:{
        alignItems: 'center',
        padding: 5,
    },
    plantToDos:{
        alignItems: 'center',
        marginRight: 50,
        padding: 5,
    },
    navBar:{
        margin: 10,
        padding: 10,
        flex: 1,
        flexDirection: 'row',
    },
    navLeft:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    navRight:{
        flex: 2,
        flexDirection: 'row',
        justifyContent: "flex-end",
    },
    backButton:{
        alignItems: 'center',
        padding: 10,
    },
    notificationButton:{
        padding: 10,
    },
    profilePicture:{
        padding: 10,
    },

})