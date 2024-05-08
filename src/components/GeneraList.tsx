import useData from '../hooks/useDate'
import useGenres, { Genre } from '../hooks/useGenres'

const GeneraList = () => {
    const {data} = useData<Genre>('/genres')
  
    return (
   <ul>
    {data.map((genre) => <li key={genre.id}>{genre.name}</li>)}
   </ul>
  )
}

export default GeneraList