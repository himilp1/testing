import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7E9",
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageBox: {
    flex: .8,
    justifyContent: 'center',
    width: '80%',
    borderRadius: 40,
    elevation: 5,
    backgroundColor: "#FFF7E9",
  },
  imageContainer: {
    flex: 3,
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 20,
    padding: 20,
  },
  uploadArea:{
    alignItems: 'center',
    backgroundColor: '#E4D9C4',
    marginTop: 15,
    width: 300,
    height: 300,
    borderRadius: 20,
    justifyContent: 'center',
    padding: 10,
  },
  plantName:{
    flex: .5,
    marginTop: 20,

  },
  plantSpecies:{
    flex: .5,
  },
  plantDescription:{
    flex: 2,
  },
  uploadText:{
    alignItems: 'center',
    fontSize: 36,
    fontFamily: 'JosefinSans'
  },
  confirmButton:{
    flex: 1,
    alignItems: 'center',

  }
});

export default styles;
