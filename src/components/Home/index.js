import React from 'react'
import search_iconc from './../../images/search_iconc.png'
import only_settings from './../../images/only_settings.png'
import { 
  MainCopmonentWrapper,
  GroupsBox,
  FriendsBox,
  RecentCallsBox
} from './styles'
import {
  ContBox, 
  BoxHeader,
  SearchComponent,
  SearchInput,
  SearchButton,
  SearchImage,
} from './../../global-styles'

export default function Home() {
  return (
    <MainCopmonentWrapper>
      <GroupsBox>
        <SearchComponent>
          <SearchImage>
            <img src={search_iconc} alt="search iconc"/>
          </SearchImage>
          <SearchInput placeholder='Search' />
          <SearchButton>
            <img src={only_settings} alt="only settings"/>
          </SearchButton>
        </SearchComponent>
        <ContBox shadow>
          <BoxHeader>
            <h4>Groups</h4>
            <img src={only_settings} alt="only settings"/>
          </BoxHeader>
        </ContBox>
        <ContBox shadow>
          <BoxHeader>
            <h4>Recents</h4>
            <img src={only_settings} alt="only settings"/>
          </BoxHeader>
        </ContBox>
      </GroupsBox>
      <FriendsBox>
        <ContBox shadow height='100%'>
          <BoxHeader>
            <h4>Recents</h4>
            <img src={only_settings} alt="only settings"/>
          </BoxHeader>
        </ContBox>
      </FriendsBox>
      <RecentCallsBox>
        <ContBox shadow height='100%'>
          <BoxHeader>
            <h4>Recents</h4>
            <img src={only_settings} alt="only settings"/>
          </BoxHeader>
        </ContBox>
      </RecentCallsBox>
    </MainCopmonentWrapper>
  )
}
