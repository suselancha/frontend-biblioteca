//import PageComponent from '../../components/Ui/PageComponent'
import SinRegistro from '../../components/Ui/SinRegistro';
import HeaderTablaUsuarios from '../../components/Usuarios/TablaUsuarios/HeaderTablaUsuarios';
import TablaUsuarios from '../../components/Usuarios/TablaUsuarios/TablaUsuarios';
import Spiners from '../../helpers/Spiners';
import { useUsuario } from '../../hooks/useUsuario';

export default function UsuarioScreen() {
 
  const { usuarios, loading } = useUsuario();
  //console.log(usuarios);
  if (loading) return <Spiners />

  return (
    <>
      {/* {categorias.length ? <p>Si hay categorias</p> : <p>No hay categorias</p>} */}
      <HeaderTablaUsuarios />
      {usuarios.length === 0 ? (
        <SinRegistro />
      ) : (
        <TablaUsuarios usuarios={usuarios} />
      )}
    </>
  )
}
