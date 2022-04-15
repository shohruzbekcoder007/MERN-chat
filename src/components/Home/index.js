import React from 'react'
import { 
  MainCopmonentWrapper,
  SearchComponent,
  GroupsBox,
  FriendsBox,
  RecentCallsBox,
  SearchInput,
  SearchButton,
  SearchImage,
  UsersBox
} from './styles'
import search_iconc from './../../images/search_iconc.png'
import only_settings from './../../images/only_settings.png'

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
            <img src={only_settings} alt="search iconc"/>
          </SearchButton>
        </SearchComponent>
      <UsersBox shadow theme={{height: '346px'}}>salom</UsersBox>
      <UsersBox>salom</UsersBox>
      </GroupsBox>
      <FriendsBox></FriendsBox>
      <RecentCallsBox></RecentCallsBox>
    </MainCopmonentWrapper>
  )
}
