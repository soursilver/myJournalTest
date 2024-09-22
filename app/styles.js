import { StyleSheet } from 'react-native';
/*const primaryBGColor = '#222222';
const textColor = '#f4feff';
const headerColor = '#333333';
const btnPurple = '#6200ea';
const btnGreen = '#198754';
const btnRed = '#bb2d3b';*/

const primaryBGColor = '#222222';
const textColor = '#F1F7FC';
const headerColor = '#1f1f1f';
const btnPurple = '#a828e9';
const btnGreen = '#4CC9EA';
const btnRed = '#e94828';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryBGColor,
  },
  scrollViewContainer: {
    height: "95%",
    justifyContent: "flex-start",
    backgroundColor: primaryBGColor,
  },
  scrollViewEntries: {
    paddingTop: '3%',
    paddingBottom: '3%',
    paddingLeft: "5%",
    paddingRight: "5%",
    borderBottomWidth: 1,
    borderBottomColor: primaryBGColor,
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
    backgroundColor: primaryBGColor,
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
    backgroundColor: headerColor,
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
    height: 40,
    width: 40,
    zIndex: 1,
  },
  submitButtonIcon: {
    color: "#F1F7FC",
    fontSize: 18,
    zIndex: 1,
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  closeModal: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: btnRed,
    borderRadius: 10,
    padding: 10,
    height: 40,
    width: 40,
    zIndex: 1,
  },
  closeModalIcon: {
    color: "#F1F7FC",
    fontSize: 16,
    zIndex: 1,
  },
  modalHeaderText: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    zIndex: 0,
  },
  modalDateTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: textColor,
    zIndex: 0,
  },
  defaultbutton: {
    backgroundColor: btnPurple,
    borderRadius: 10,
    padding: 10,
    height: 40,
    width: 70,
    left: '36%',
    top: '40%',
  },
});

export default styles;