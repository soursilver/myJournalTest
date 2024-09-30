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
  },
  scrollViewContainer: {
    height: "95%",
    flexDirection: 'row',
    justifyContent: 'center',
  },
  scrollViewEntries: {
    marginTop: 7,
    margin: "auto",
    width: "96%",
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
    zIndex: 1,
    border: "none;",
    paddingVertical: 5,
    paddingHorizontal: 5,
    fontSize: 20,
    height: 60,
    width: 60,
    borderRadius: 30,
    shadowColor: 'darkslategray',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalContainer: {
    color: textColor,
    height: "100%",

  },
  modalHeader: {
    position: "absolute",
    top: 0,
    width: '100%',
    height: '12%',
    borderWidth: 1,
    borderRadius: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

  },
  textInput: {
    margin: "auto",
    color: textColor,
    top: '1%',
    width: '96%',
  },
  submitButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  closeModal: {
    position: "absolute",
    top: 20,
    right: 20,
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
  indexContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    height: '100%',
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
},
});

export default styles;