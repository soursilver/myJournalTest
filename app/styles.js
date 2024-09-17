import { StyleSheet } from 'react-native';
const primaryBGColor = '#121212';
const secondaryBGColor = '#222222';
const textColor = '#f4feff';
const headerColor = '#333333';
const btnPurple = '#6200ea';
const btnGreen = '#198754';
const btnRed = '#bb2d3b';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContainer: {
    height: "95%",
    justifyContent: "flex-start",
    backgroundColor: secondaryBGColor,
  },
  scrollViewEntries: {
    paddingTop: '3%',
    paddingBottom: '3%',
    paddingLeft: "5%",
    paddingRight: "5%",
    borderBottomWidth: 1,
    borderBottomColor: secondaryBGColor,
    borderRadius: 10,
    overflow: 'hidden',
  },
  entriesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#44EFA6",
    borderWidth: 0,
  },
  entriesText: {
    fontSize: 16,
    color: textColor,
    paddingTop: 5,
    height: 65,
    overflow: 'hidden',
    borderWidth: 0,
  },
  newEntryButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: btnPurple,
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  entryButtonText: {
    color: "#F1F7FC",
    fontSize: 24,
  },
  modalContainer: {
    backgroundColor: secondaryBGColor,
    color: textColor,
    height: "100%",
    
  },
  modalHeader: {
    position: "absolute",
    top: 0,
    width: '100%',
    height: 80,
    borderWidth: 1,
    borderRadius: 0,
    borderBottomColor: headerColor,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: secondaryBGColor,
  },
  textInput: {
    color: textColor,
    position: "absolute",
    top: 80,
    width: '100%',
    padding: 10,
    paddingLeft: 20,
  },
  submitButton: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: btnGreen,
    borderRadius: 10,
    padding: 10,
  },
  submitButtonIcon: {
    color: "#F1F7FC",
    fontSize: 16,
  },
  closeModal: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: btnRed,
    borderRadius: 10,
    padding: 10,
  },
  closeModalIcon: {
    color: "#F1F7FC",
    fontSize: 16,
  },
  modalHeaderText: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  modalDateTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: textColor,
    //center the text veritcally and horizontally
    
    //display: "flex",
    //alignItems: "center",
    //justifyContent: "center",  
    //textAlign: 'center',
    //textAlignVertical: 'center',
  },
});

export default styles;