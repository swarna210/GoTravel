import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { Image } from 'react-native-animatable'

const MenuContainer = ({title, imageSrc,type,setType}) => {
    const handlePress = () => {
        setType(title.toLowerCase())
    }
  return (
    <TouchableOpacity className="items-center justify-center space-y-2" onPress={handlePress}>
        <View className={`w-24 h-24 shadow-sm items-center p-2
                    justify-center rounded-full ${type === title.toLowerCase() ? "bg-gray-200" :""}`}>
            <Image source={imageSrc} className="w-full h-full object-contain"/>
        </View>
        <Text className="text-[#00bcc9] font-semibold text-s">{title}</Text>
    </TouchableOpacity>
  )
}

export default MenuContainer  