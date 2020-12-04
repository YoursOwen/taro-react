import React, { useState }  from 'react'
import { View } from '@tarojs/components'
import webApi from '@/services/http'
import { useAsyncEffect } from '@/src/hooks/useAsyncEffect'
import Swiper from './swiper'


import './index.less'

function Index () {
  const [swiper, setSwiper] = useState([])
  console.log(webApi.getHome)
  useAsyncEffect(async () => {
    const res = await webApi.getHome()
    setSwiper(res.data.homeAdInfos)
  }, [])

  return (

    <View className='home page-tabbar'>
       <View class='home-header'>
        Header
      </View>
      <View class='home-swiper'>
        <Swiper data={swiper} />
      </View>
    </View>
  )
}

export default Index
