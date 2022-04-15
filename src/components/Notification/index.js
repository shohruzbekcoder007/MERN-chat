import React from 'react'
import search_iconc from './../../images/search_iconc.png'
import only_settings from './../../images/only_settings.png'
import { NotificationWrapper, NotificationContainer } from './styles'
import {
  SearchComponent,
  SearchInput,
  SearchButton,
  SearchImage,
} from './../../global-styles'

export default function Notification() {
  return (
    <NotificationWrapper>
      <SearchComponent>
        <SearchImage>
          <img src={search_iconc} alt="search iconc"/>
        </SearchImage>
        <SearchInput placeholder='Search' />
        <SearchButton>
          <img src={only_settings} alt="only settings"/>
        </SearchButton>
      </SearchComponent>
      {/* <NotificationContainer>2</NotificationContainer> */}
    </NotificationWrapper>
  )
}
