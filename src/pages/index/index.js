import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { View } from '@tarojs/components'
import { getHome } from '@/src/store/action'
import { useAsyncEffect } from '@/src/hooks/useAsyncEffect'
import Swiper from './swiper'

import './index.less'

function Index() {
  const [swiper, setSwiper] = useState([])
  const dispatch = useDispatch()

  useAsyncEffect(async () => {
    const { response } = await dispatch(getHome())
    setSwiper(response.data.homeAdInfos)
  }, [])

  return (
    <View className="home page-tabbar">
      <View class="home-header">Header</View>
      <View class="home-swiper">
        <Swiper data={swiper} />
      </View>
    </View>
  )
}

export default Index
