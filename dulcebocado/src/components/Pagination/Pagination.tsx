import { useState } from "react";
import Cards from "../Cards/Cards";
import "./Pagination.scss";

interface Item {
  id: number;
  name: string;
}

const Pagination = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // Tu lista de elementos (reemplaza esto con tus propios datos)
  const items: Item[] = [
    { id: 1, name: "Elemento 1" },
    { id: 2, name: "Elemento 2" },
    { id: 3, name: "Elemento 3" },
    { id: 4, name: "Elemento 4" },
    { id: 5, name: "Elemento 5" },
    { id: 6, name: "Elemento 6" },
    { id: 7, name: "Elemento 7" },
    { id: 8, name: "Elemento 8" },
    { id: 9, name: "Elemento 9" },
    { id: 10, name: "Elemento 10" },
    // Agrega más elementos según sea necesario
  ];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = items.slice(startIndex, endIndex);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); // Estado para almacenar la opción seleccionada

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="container">
      <div
        className={`custom-dropdown ${isOpen ? "open" : ""}`}
        onClick={toggleDropdown}
      >
        <div className="dropdown-header">
          {selectedOption || "Selecciona una opción"}
        </div>
        <div className="dropdown-options">
          <div className="option" onClick={() => handleOptionClick("Tortas")}>
            Tortas
          </div>
          <div
            className="option"
            onClick={() => handleOptionClick("Alfajores")}
          >
            Alfajores
          </div>
          <div className="option" onClick={() => handleOptionClick("Tartas")}>
            Tartas
          </div>
        </div>
      </div>
      <Cards items={displayedItems} />
      {/* Paginación */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          className="button"
          onClick={() =>
            handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
          }
        >
          {"<<"}
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={"button"}
            style={{
              backgroundColor:
                currentPage === index + 1 ? "#976988" : "#d291bc",
            }}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="button"
          disabled={currentPage === 2}
          onClick={() =>
            handlePageChange(currentPage < 2 ? currentPage + 1 : 2)
          }
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
