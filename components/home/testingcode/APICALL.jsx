import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'


import  {COLORS, SIZES}  from '../../../constants';
import PopulaJobCard from '../../common/cards/popular/PopularJobCard';
import testingAPI from '../../../hook/testingAPI';

const APICALL = () => {

  const router = useRouter();
  const data = testingAPI(
    'search',{
        query: 'React developer',
        num_pages: 1
    }
  );


//   console.log(data)


}

export default APICALL