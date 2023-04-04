import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (selectedJob, item) => ({
    
    // padding: SIZES.xLarge,
    // backgroundColor: selectedJob === item.idMeal ? COLORS.primary : "#FFF",
    // borderColor: "red",
    // borderWidth: 1,
    borderRadius: SIZES.medium,
    // justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  // logoContainer: (selectedJob, item) => ({
  //   width: 50,
  //   height: 50,
  //   backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
  //   borderRadius: SIZES.medium,
  //   justifyContent: "center",
  //   alignItems: "center",
  // }),


  logoContainer: (selectedJob, item) => ({
    // width: 50,
    // height: 50,
    width: 150,
    height: 150,
    // borderColor: "red",
    // borderWidth: 1,
    backgroundColor: selectedJob === item.idMeal ? "#FFF" : COLORS.white,
    // borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),


  logoImage: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.medium,
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  jobName: (selectedJob, item) => ({
    width: 150,
    fontSize: SIZES.small,
    fontFamily: FONT.medium,
    color: selectedJob === item.idMeal ? COLORS.white : COLORS.primary,
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: (selectedJob) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;
