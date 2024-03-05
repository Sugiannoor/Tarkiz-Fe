import { Input } from '@material-tailwind/react'
import { PiMagnifyingGlassLight } from 'react-icons/pi'

type SearchInput = {
    searchValue: string;
    setSearchValue: (value: string) => void
}

const Search = ({searchValue, setSearchValue}: SearchInput) => {
  return (
    <div className="flex flex-col items-center justify-end gap-4 md:flex-row">
    <div className="w-full md:w-72">
      <Input
        crossOrigin={""}
        placeholder='Search'
        onChange={(e)=> setSearchValue (e.target.value)}
        type='text'
        name='search'
        value={searchValue}
        icon={<PiMagnifyingGlassLight className="h-5 w-5" />}
      />
    </div>
  </div>
  )
}

export default Search
