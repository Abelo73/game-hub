import { HStack, Image, Text } from '@chakra-ui/react'

import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInputs from './SearchInputs'



interface Props{
  onSearch:(searchText:string) => void;
}

const Navbar = ({onSearch}:Props) => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo}  boxSize="60px"/> 
        <Text fontSize='lg'>Game Hub</Text>
        <SearchInputs onSearch={onSearch}/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar