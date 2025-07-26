import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoginForm from "./components/Login/Login";
import Register from "./components/Login/Registro";
import Veterinaria from "./components/admin/Veterinaria";
import FormularioVeterinaria from "./components/admin/crearVeterinaria";
import Dashboard from "./components/admin/DashboardAdmin";
import MisVeterinarias from "./components/admin/misVeterinarias";
import LayoutPrincipal from "./LayoutPrincipal"; 
import ServiciosVeterinarios from "./components/admin/servicios";
import FormularioServicio from "./components/admin/crearServicio"
import MisPropietarios from './components/admin/propietarios'
import FormularioPropietario from "./components/admin/crearPropietario";
import VistaMascotas from "./components/admin/mascotas";
import FormularioMascota from "./components/admin/crearMascota";
import MedicinasYProductos from './components/admin/medicinas'
import FormMedicinasProductos from "./components/admin/crearMedicina";
import FacturacionVeterinaria from './components/admin/facturacion'
import GestionCitas from "./components/admin/citas";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Rutas públicas */}
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registro" element={<Register />} /> 

        {/* Rutas protegidas (requieren navegación con LayoutPrincipal) */}
        <Route path="/inicio" element={<Veterinaria />} />
        <Route path="/crear-veterinaria" element={<FormularioVeterinaria />} />
        <Route path="/misVeterinaria" element={<LayoutPrincipal><MisVeterinarias /></LayoutPrincipal>} />
        <Route path="/dashboard" element={<LayoutPrincipal><Dashboard /></LayoutPrincipal>} />
        <Route path="/servicios" element={<LayoutPrincipal><ServiciosVeterinarios /></LayoutPrincipal>} />
        <Route path="/crear-servicio" element={<LayoutPrincipal><FormularioServicio /></LayoutPrincipal>} />
        <Route path="/propietarios" element={<LayoutPrincipal><MisPropietarios /></LayoutPrincipal>} />
        <Route path="/crear-propietario" element={<LayoutPrincipal><FormularioPropietario /></LayoutPrincipal>} />
        <Route path="/mascotas" element={<LayoutPrincipal><VistaMascotas /></LayoutPrincipal>} />
        <Route path="/crear-mascota" element={<LayoutPrincipal><FormularioMascota /></LayoutPrincipal>} />
        <Route path="/medicinas" element={<LayoutPrincipal><MedicinasYProductos /></LayoutPrincipal>} />
        <Route path="/crear-medicina" element={<LayoutPrincipal><FormMedicinasProductos /></LayoutPrincipal>} />
        <Route path="/facturacion" element={<LayoutPrincipal><FacturacionVeterinaria /></LayoutPrincipal>} />
        <Route path="/citas" element={<LayoutPrincipal><GestionCitas /></LayoutPrincipal>} />
{/*         <Route path="/empleados" element={<LayoutPrincipal><Empleado /></LayoutPrincipal>} />
        <Route path="/empleados/nuevo" element={<LayoutPrincipal><CrearEmpleado /></LayoutPrincipal>} />
        <Route path="/restaurantes" element={<LayoutPrincipal><Restaurantes /></LayoutPrincipal>} />
        <Route path="/inventario" element={<LayoutPrincipal><Inventario /></LayoutPrincipal>} />
        <Route path="/inventario/nuevo" element={<LayoutPrincipal><CrearInventario /></LayoutPrincipal>} />
        <Route path="/proveedores" element={<LayoutPrincipal><Proveedores /></LayoutPrincipal>} />
        <Route path="/proveedores/nuevo" element={<LayoutPrincipal><CrearProveedor /></LayoutPrincipal>} />
        <Route path="/platos" element={<LayoutPrincipal><Platos /></LayoutPrincipal>} />
        <Route path="/bebidas" element={<LayoutPrincipal><Bebidas /></LayoutPrincipal>} />
        <Route path="/postres" element={<LayoutPrincipal><Postres /></LayoutPrincipal>} />
        <Route path="/crear-postre" element={<LayoutPrincipal><CrearPostre /></LayoutPrincipal>} />
        <Route path="/crear-bebida" element={<LayoutPrincipal><CrearBebida /></LayoutPrincipal>} />
        <Route path="/crear-plato" element={<LayoutPrincipal><CrearPlato /></LayoutPrincipal>} />
        <Route path="/repertorio" element={<LayoutPrincipal><Repertorio /></LayoutPrincipal>} />
        <Route path="/crear-menu" element={<LayoutPrincipal><CrearMenu /></LayoutPrincipal>} />
        <Route path="/reservas" element={<LayoutPrincipal><Reservas /></LayoutPrincipal>} />
        <Route path="/crear-reservas" element={<LayoutPrincipal><CrearReservas /></LayoutPrincipal>} />
        <Route path="/comentarios" element={<LayoutPrincipal><Comentario /></LayoutPrincipal>} />
        <Route path="/crear-restaurantes" element={<CrearRestaurante />} */}
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
