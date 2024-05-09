import { Heading } from '@chakra-ui/react'
import React from 'react'
import { GameQuery } from '../App'


interface Props{
    gameQuery:GameQuery
}
const GameHeading = ({gameQuery}:Props) => {

    //Games
    //Action Games
    //Xbox Action Games

    const heading = `Results for ${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} ${gameQuery.searchText || ""}`
  return (
    <Heading as='h1'>{heading}</Heading>
  )
}

export default GameHeading