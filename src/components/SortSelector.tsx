import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

function SortSelector() {
    return (
        <Menu>
            <MenuButton marginY='10px' as={Button} rightIcon={<BsChevronDown />}>
                {/* {selectedPlatform?.name || 'Platforms'} */}
                Order by: Relevance
                </MenuButton>
            <MenuList>
                {/* {data.map(platform =><MenuItem onClick={()=>onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)} */}
                <MenuItem>Relevance</MenuItem>
                <MenuItem>Date</MenuItem>
                <MenuItem>Rating</MenuItem>
                
            </MenuList>
        </Menu>
    )
}

export default SortSelector