import { SafeAreaView , ScrollView, Text, TouchableOpacity, ActivityIndicator} from 'react-native'
import React, { useState,useEffect,useLayoutEffect}from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, View } from 'react-native-animatable'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Avatar, Hotels ,Attractions,Restaurants, NotFound} from '../assets'
import MenuContainer from '../components/MenuContainer';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ItemCartContainer from '../components/ItemCartContainer';
import { getPlacesData } from '../api';

API_KEY = "AIzaSyDRKyUzBNnGeLdKXfL0xZmkHmQueJs5z5A"
const Discover = () => {
    const [type, setType] = useState("restaurants")
    const [isLoading, setIsloading] = useState(false)
    const [mainData, setMainData] = useState([])
    const [bl_lat, setBl_lat] = useState(null);
    const [bl_lng, setBl_lng] = useState(null);
    const [tr_lat, setTr_lat] = useState(null);
    const [tr_lng, setTr_lng] = useState(null);
    // console.log("mainData",mainData)
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false,
        })
    },[])
    useEffect(() =>{
      setIsloading(true)
      getPlacesData(bl_lat, bl_lng, tr_lat, tr_lng, type).then((data) =>{
        setMainData(data)
        setInterval(() => { setIsloading(false) }
                    ,200)
      })
    }, [bl_lat, bl_lng, tr_lat, tr_lng, type])
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
            <Text className="text-[40px] text-[#0b646b] font-bold">Discover</Text>
            <Text className="text-[#527283] text-[30px]">the beauty today</Text>
        </View>
        <View className="w-12 h-12 bg-slate-500 rounded-md items-center justify-center shadow-lg">
            <Image source={Avatar} className="object-cover rounded-md w-full h-full"/>
        </View>
      </View>
      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg">
      <GooglePlacesAutocomplete
      GooglePlacesDetailsQuery={{ fields:"geometry" }}
      placeholder='Search'
      onPress={(data, details = null) => {
        console.log(details?.geometry?.viewport);
        setBl_lat(details?.geometry?.viewport?.southwest?.lat);
        setBl_lng(details?.geometry?.viewport?.southwest?.lng);
        setTr_lat(details?.geometry?.viewport?.northeast?.lat);
        setTr_lng(details?.geometry?.viewport?.northeast?.lng);
      }}
      fetchDetails={true}
      query={{
        key: API_KEY,
        language: 'en',
      }}
    /> 
      </View>
      {isLoading ? 
      <View className="flex-1 items-center justify-center">
           <ActivityIndicator size="small" color="#0b646b" />
      </View> 
      :
      (
<ScrollView>
        <View className="flex-row items-center px-4  justify-between ">
            <MenuContainer key={"hotel"} title='Hotels' imageSrc={Hotels} type={type} setType={setType}/>
            <MenuContainer key={"attractions"} title='Attractions' imageSrc={Attractions} type={type} setType={setType}/>
            <MenuContainer key={"restaurants"} title='Restaurants' imageSrc={Restaurants} type={type} setType={setType}/>
        </View>
        
        <View>
            <View className="flex-row items-center justify-between px-4 mt-4">
                <Text className="text-[#2c7379] text-[24px] font-bold">Top Tips</Text>
                <TouchableOpacity className="space-x-2 flex-row items-center justify-center ">
                    <Text className="text[#a0c4c7] text-[18px] font-bold">Explore</Text>
                    <FontAwesome name="long-arrow-right" color="#a0c4c7"/>
                </TouchableOpacity>
            </View>
            <View className=" mt-2 flex-row justify-evently items-center flex-wrap ">
          {mainData?.length > 0  ? (
            <>
            {mainData?.map((data,i) =>(
            <ItemCartContainer key={i}
                imgSrc={ data?.photo?.images?.medium?.url
              ? data?.photo?.images?.medium?.url
              : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg" }
                title={data?.name} location={data?.location_string}
                data={data}/>
            ))}
           
                 
            </>
          ) : (<>
          <View className="items-center justify-center w-full h-[300px]  ">
            
              <Image source={NotFound} className="w-32 h-32 object-cover "/> 
              <Text className="text-2xl font-semibold text-[#428288]">Oops...No Data Found </Text>
          </View>
          </>)}
          </View>
            {/*  */}
        </View>
      </ScrollView>
      
      )
      
      
      
      }
       
        
      
     




    
    </SafeAreaView >
  )
}

export default Discover