import { createContext, useState } from 'react'

const DemoContext = createContext();

const DemoProvider = ({children}) => {
    const [categorias, setCategorias] = useState([]);
    
    const handleSetCategoria = categoria => {
        setCategorias(categoria)
    }

    return (
        <DemoContext.Provider
            value={{
                categorias,
                handleSetCategoria,
            }}
        >
            {children}
        </DemoContext.Provider>
    )
}

export {
    DemoProvider
}

export default DemoContext