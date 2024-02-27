import { useContext } from 'react'
import LibrosContext from '../contexts/LibrosProvider'

const useLibros = () => {
    return useContext(LibrosContext)
}

export default useLibros