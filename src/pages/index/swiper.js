import React from 'react'
import { Swiper, SwiperItem, Navigator, Image } from '@tarojs/components'

const SwiperComponent = React.memo((props) => {
  const { data } = props

  return (
    <Swiper
      className="test-h"
      indicatorColor="#999"
      indicatorActiveColor="#333"
      vertical={false}
      circular={false}
      indicatorDots
      autoplay
    >
      {data.map((item) => {
        return (
          <SwiperItem key={item.id}>
            <Navigator
              class="swiper-item"
              onClick={() => {
                console.log(123)
              }}
            >
              <Image src={item.url} />
            </Navigator>
          </SwiperItem>
        )
      })}
    </Swiper>
  )
})

export default SwiperComponent
