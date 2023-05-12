import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "space-between",
    // borderColor: "red",
    // borderWidth: 1,
     alignItems: "center",
    // flexDirection: "row",
    // padding: SIZES.medium,
    // borderRadius: SIZES.small,
    // backgroundColor: "#FFF",
    // ...SHADOWS.medium,
    // shadowColor: COLORS.white,

      borderRadius: SIZES.medium,
            // borderColor: "red",
    // borderWidth: 1,
    // justifyContent: "space-between",
    
      shadowColor: COLORS.white,
  },
  logoContainer: {
    width: 320,
    height: 150,

    // borderColor: "red",
    // borderWidth: 1,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.medium,

  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.small,
  },
  jobName: {
    fontSize: SIZES.large,
    fontFamily: "DMBold",
    color: COLORS.primary,
    marginVertical: SIZES.small
  },
  jobType: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.gray,
    marginTop: 3,
    textTransform: "capitalize",
  },
});

export default styles;
