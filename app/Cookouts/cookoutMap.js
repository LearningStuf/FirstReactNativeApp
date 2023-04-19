// import { StyleSheet, Text, View } from 'react-native'
// import { useNavigation, useRouter, useSearchParams } from "expo-router";
// import MapView ,{Marker} from 'react-native-maps';

// import React, { useState } from 'react'

// const cookoutMap = () => {
//     const params = useSearchParams();
//     // console.log("This is the databeing forwarded", params)
//     // console.log("This is the databeing forwarded latitude", params.latitude)

//     const [mapregion, setMapregion] = useState({
//       // latitude: 37.78825,
//       // longitude: -122.4324,
//       latitude: parseFloat(params.latitude),
//       longitude: parseFloat(params.longitude),
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     });

//     const [markerPostion, setMarkerPostion] = useState({
//       latitude: parseFloat(params.latitude),
//       longitude: parseFloat(params.longitude),
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     });


//     // console.log ("This is the latlng", LatLng)

//     return (
//     <View style={styles.container}>
//       <MapView style={styles.map}
//         region={mapregion}
//       >
//         <Marker coordinate={markerPostion} title='Marker'></Marker>
//       </MapView>
//     </View>
//   )
// }

// export default cookoutMap

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     width: '100%',
//     height: '100%',
//   },
// });