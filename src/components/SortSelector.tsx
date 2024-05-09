import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'


interface Props{
    onSelectSortOrder:(selectSortOrder:string) => void
    sortOrder:string
}

function SortSelector({onSelectSortOrder, sortOrder}:Props) {

    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name'},
        {value: '-released', label: 'Release date' },
        {value:'-metacritic', label: 'Popularity' },
 
        {value: '-rating', label: 'Average Rating' },
    ]
    return (
        <Menu>
            <MenuButton marginY='10px' as={Button} rightIcon={<BsChevronDown />}>
                {/* {selectedPlatform?.name || 'Platforms'} */}
                Order by: {sortOrders.find(order => order.value === sortOrder)?.label || 'Relevance'} 
                </MenuButton>
            <MenuList>
                {sortOrders.map((order) => <MenuItem key={order.value} onClick={() => onSelectSortOrder(order.value)}>{order.label}</MenuItem>)}
                
            </MenuList>
        </Menu>
    )
}

export default SortSelector