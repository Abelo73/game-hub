import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import useData from '../hooks/useDate'
import useGenres, { Genre } from '../hooks/useGenres'

const GeneraList = () => {
    const {data, isLoading, error} = useData<Genre>('/genres')

    if (error) return null

    if (isLoading) return<Spinner justifyContent='center' alignItems='center' />
  
    return (
   <List>
    {data.map((genre) => <ListItem paddingY='5px'  key={genre.id}>
        <HStack>
            <Image boxSize='32px' borderRadius={8} src={genre.image_background}/>
            <Text fontSize='lg'>{genre.name}</Text>
        </HStack>
    </ListItem>)}
   </List>
  )
}

export default GeneraList