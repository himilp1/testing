import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7E9",
    alignItems: "center",
    justifyContent: "center",
  },
  pageBox: {
    width: "80%",
    height: "80%",
    justifyContent: "center",
    borderRadius: 40,
    elevation: 5,
    backgroundColor: "#FFF7E9",
    padding: 15,
  },
  imageContainer: {
    flex: 2,
    marginBottom: 10,
  },
  addPlantInfo:{
    flex: 2,
  },
  uploadArea: {
    width: '100%',
    height: '100%',
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderRadius: 20,
    borderColor: '#B0A58F',
  },
  imageDottedBorder:{
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    borderColor: '#B0A58F',
    width: '95%',
    height: '95%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 20,
  },
  uploadText: {
    alignItems: "center",
    fontSize: 36,
    fontFamily: "JosefinSans",
    color: '#385250',
  },
  plantName: {
    flex: 1,
    marginTop: 20,
  },
  plantSpecies: {
    flex: 1,
  },
  plantDescription: {
    flex: 2,
  },
  plantNameInput:{
    borderBottomWidth: 1,
    borderBottomColor:  "#D1C3A7",
  },
  plantSpeciesInput:{
    borderBottomWidth: 1,
    borderBottomColor: '#D1C3A7',
  },
  plantDescriptionInput:{
    borderWidth: 2,
    borderRadius: 15,
    padding: 5,
  },
  confirmArea: {
    flex: .5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  saveBtn:{
    borderWidth: 2,
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: '#385250',
    borderRadius: 20,
  },
});


export default styles;
