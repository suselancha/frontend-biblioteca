//import PageComponent from '../../components/Ui/PageComponent'
import { useEffect, useState } from 'react';
import SinRegistro from '../../components/Ui/SinRegistro';
import HeaderTablaUsuarios from '../../components/Usuarios/TablaUsuarios/HeaderTablaUsuarios';
import TablaUsuarios from '../../components/Usuarios/TablaUsuarios/TablaUsuarios';
import Spiners from '../../helpers/Spiners';
import { useLibro } from '../../hooks/useLibro_old';
import { useUsuario } from '../../hooks/useUsuario';
import TablaLibros from '../../components/Libros/TablaLibros/TablaLibros';
import HeaderTablaLibros from '../../components/Libros/TablaLibros/HeaderTablaLibros';
import useLibros from '../../hooks/useLibros';

export default function LibroScreen() {
 
  const { libros, loading, cargarLibros } = useLibros();
  
  useEffect(() => {
    cargarLibros();
  }, [])

  //console.log(usuarios);
  if (loading) return <Spiners />

  return (
    <>
      {/* {categorias.length ? <p>Si hay categorias</p> : <p>No hay categorias</p>} */}
      <HeaderTablaLibros />
        <TablaLibros />
    </>
  )
}
