import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import useData from '../hooks/useDate'
import useGenres, { Genre } from '../hooks/useGenres'



interface Props{
    onSelectGenre:(genre:Genre)=>void;
}

const GeneraList = ({onSelectGenre}:Props) => {
    const {data, isLoading, error} = useData<Genre>('/genres')

    if (error) return null

    if (isLoading) return<Spinner  />
  
    return (
   <List>
    {data.map((genre) => <ListItem paddingY='5px'  key={genre.id}>
        <HStack>
            <Image boxSize='32px' borderRadius={8} src={genre.image_background}/>
            <Button onClick={()=>onSelectGenre(genre)} variant='link' fontSize='lg'>{genre.name}</Button>
        </HStack>
    </ListItem>)}
   </List>
  )
}

export default GeneraList