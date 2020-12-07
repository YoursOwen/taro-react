import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View } from '@tarojs/components'
import { getHome } from '@/src/store/action'
import { useAsyncEffect } from '@/src/hooks/useAsyncEffect'
import Swiper from './swiper'

import './index.less'

function Index() {
  const dispatch = useDispatch()
  const { homeAdInfos } = useSelector((state) => {
    const homeInfo = state.homeInfo
    return {
      query: homeInfo.query,
      homeAdInfos: homeInfo.data ? homeInfo.data.homeAdInfos : []
    }
  })

  useAsyncEffect(async () => {
    dispatch(getHome())
  }, [])

  // if (query) {
  //   return <View>Loading</View>
  // }

  return (
    <View className="home page-tabbar">
      <View class="home-header">Header</View>
      <View class="home-swiper">
        <Swiper data={homeAdInfos} />
      </View>
    </View>
  )
}

export default Index
