import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContainer: {
    height: "90%",
    justifyContent: "flex-start",
    backgroundColor: "#F1F7FC",
  },
  entriesView: {
    width: "100%",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingTop: 10,
    paddingBottom: 10,
  },
  scrollViewEntries: {
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 5,
    borderBottomColor: "#6DB36C",
  },
  entriesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#44EFA6",
  },
  newEntryButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: '#6DB36C',
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  entryButtonText: {
    color: '#F1F7FC',
    fontSize: 24,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 4,
    alignItems: "center",
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
    width: 300,
    height: 600,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    alignItems: "baseline",
  },
});

export default styles;