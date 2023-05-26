import { View, Text,TouchableOpacity , } from 'react-native'
import React from 'react'
import { Image } from 'react-native-animatable'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'

const ItemCartContainer = ({imgSrc,title,location,data}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity  onPress={() => navigation.navigate("ItemScreen", { param: data })}
            className="rounded-md border
                 border-gray-300 space-y-2 py-2 shadow-md bg-white w-[180px] px-2">
        <Image className="w-full h-40 rounded-md object-cover" source={{uri:imgSrc }}/>

        {title ? (
        <>
          <Text className="text-[#428288] text-[16px] font-bold">
            {title?.length>14 ? `${title.slice(0,14)}...` :title}
        </Text>

        <View className="flex-row items-center space-x-1">
            <Entypo name="location-pin" size={20} color="#8597a2"/>
            <Text className="text-[#428288] text-[13px] font-semibold">
                {location?.length>18 ? `${title.slice(0,18)}...` :location}
            </Text>
        </View>
        </>
      ) : (
        <></>
      )}












        
       
       
    </TouchableOpacity>
  )
}

export default ItemCartContainer