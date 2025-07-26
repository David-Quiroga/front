import { Link, useNavigate } from "react-router-dom";
import "../styles/Sidebars.css"; // Ensure your CSS has the flex styles
import {
  FaSignOutAlt, // Already in use for logout
  FaHome, // For Home/Dashboard
  FaClinicMedical, // For Mis Veterinaria (Veterinary Clinic)
  FaStethoscope, // For Servicios (Services)
  FaUserTie, // For Propietarios (Owners)
  FaPaw, // For Mascotas (Pets)
  FaPills, // For Medicinas y Productos (Medicines & Products)
  FaFileInvoiceDollar, // For Facturacion (Invoicing)
  FaCalendarAlt // For Citas (Appointments)
} from 'react-icons/fa'; // Import specific icons

const Sidebar = ({ isOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Elimina el token
    navigate("/login"); // Redirige al login
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* Use flex column for the ul to push the last item to the bottom */}
      <ul className="sidebar-nav d-flex flex-column h-100">
        <li className="sidebar-brand">
          PetPocket
        </li>
        <li>
          <Link to="/dashboard">
            <FaHome /> {/* Home icon */}
            <span>Home/Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/misVeterinaria">
            <FaClinicMedical /> {/* Clinic icon */}
            <span>Mis Veterinaria</span>
          </Link>
        </li>
        <li>
          <Link to="/servicios">
            <FaStethoscope /> {/* Stethoscope icon */}
            <span>Servicios</span>
          </Link>
        </li>
        <li>
          <Link to="/propietarios">
            <FaUserTie /> {/* User tie icon for owners */}
            <span>Propietarios</span>
          </Link>
        </li>
        <li>
          <Link to="/mascotas">
            <FaPaw /> {/* Paw print icon for pets */}
            <span>Mascotas</span>
          </Link>
        </li>
        <li>
          <Link to="/medicinas">
            <FaPills /> {/* Pills icon for medicines */}
            <span>Medicinas y Productos</span>
          </Link>
        </li>
        <li>
          <Link to="/facturacion">
            <FaFileInvoiceDollar /> {/* Invoice/billing icon */}
            <span>Facturacion</span>
          </Link>
        </li>
        <li>
          <Link to="/citas">
            <FaCalendarAlt /> {/* Calendar icon for appointments */}
            <span>Citas</span>
          </Link>
        </li>

        {/* Opción de Cerrar Sesión - This is the item we want at the bottom */}
        <li className="logout mt-auto" onClick={handleLogout}> {/* Added mt-auto here */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px", cursor: "pointer" }}>
            <span>Cerrar Sesión</span>
            <FaSignOutAlt />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;