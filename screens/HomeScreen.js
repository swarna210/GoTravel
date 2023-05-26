import { View, Text ,SafeAreaView, Image,TouchableOpacity} from 'react-native'
import React,{useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';
import { HeroImage } from '../assets'

const HomeScreen = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false,
        })
    },[])
  return (
    <SafeAreaView className="flex-1 bg-white relative">
        {/* first section */}
        <View className="flex-row px-6 mt-4 items-center space-x-2">
            <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
                <Text className="text-[#4DABB7] text-3xl font-semibold">Go</Text>
            </View>
            <Text className="text-[#2a2b4b] text-3xl font-semibold">Travel</Text>
        </View>
        {/* second section */}
        <View className="px-6 mt-4 space-y-3">
            <Text className="text-[#3c6072] text-[36px]">Enjoy the trip with</Text>
            <Text className="text-[#00BCC9] text-[32px] font-bold">Good Moments</Text>
            <Text className="text-[#3c6072] text-base">
                There are many variations of passages of
                Lorem Ipsum but  in some form, 
                by injected humour,
            </Text>
        </View>
        {/* third section */}
        <View className="w-[300px] h-[300px] bg-[#4DABB7] rounded-full absolute bottom-24 -right-24 ">
        </View>
        <View className="w-[300px] h-[300px] bg-[#e99265] rounded-full absolute -bottom-16 -left-24">
        </View>
        {/* image container */}
    <View className="relative flex-1 justify-center items-center">
        <Animatable.Image 
            animation="fadeIn"
            easing={'ease-in-out'}
            source={HeroImage } className="  w-[300px] h-[400px] object-contain"/>
        <TouchableOpacity onPress={()=>navigation.navigate('Discover')}
            className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4
                         border-[#00BCC9] rounded-full
                             items-center justify-center">
            <Animatable.View    animation={"pulse"} easing={"ease-in-out"} iterationCount={"infinite"}
                        className="items-center justify-center w-20 h-20 bg-[#00BCC9] rounded-full">
                <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
            </Animatable.View>
       </TouchableOpacity>
    </View>

      
    </SafeAreaView>
  )
}

export default HomeScreen