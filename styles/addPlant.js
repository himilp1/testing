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
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  uploadArea:{
    backgroundColor: '#E4D9C4',
    flex: 1
  },
  plantName:{
    flex: .5,
  },
  plantSpecies:{
    flex: .5,
  },
  plantDescription:{
    flex: 2,
  }
});

export default styles;
