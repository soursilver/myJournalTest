import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContainer: {
    height: "95%",
    justifyContent: "flex-start",
    backgroundColor: "#F1F7FC",
  },
  scrollViewEntries: {
    paddingTop: '3%',
    paddingBottom: '3%',
    paddingLeft: "5%",
    paddingRight: "5%",
    borderBottomWidth: 5,
    borderBottomColor: "#DEF0FC",
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
    paddingTop: 5,
    height: 65,
    overflow: 'hidden',
    borderWidth: 0,
  },
  newEntryButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#6DB36C",
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
    backgroundColor: "#fff",
    padding: 20,
    height: "100%",
    
  },
  modalContent: {
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textInput: {
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
    backgroundColor: "#6DB36C",
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
    backgroundColor: "#6DB36C",
    borderRadius: 10,
    padding: 10,
  },
  closeModalIcon: {
    color: "#F1F7FC",
    fontSize: 16,
  },
  modalDateTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6DB36C",
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default styles;