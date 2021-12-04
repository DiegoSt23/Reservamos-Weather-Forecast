import { useState } from "react";

// React Router
import { useNavigate } from "react-router";

// Components
import ResponsiveSearchBar from "./responsiveSearchBar/ResponsiveSearchBar";

// Icons
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

// Framer Motion
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ setSearch }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const handleModalOpen = () => {
    modalOpen ? close() : open();
  };

  const handleSetSearch = (e) => {
    e.preventDefault();
    if (value) {
      setSearch(value);
      navigate("/");
    }
  };

  return (
    <header className="header">
      <div className="logo-container">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "just", duration: 1 }}
        >
          Reservamos
        </motion.h1>
      </div>
      {modalOpen ? (
        <AiOutlineClose
          className="responsive-search-icon"
          onClick={handleModalOpen}
        />
      ) : (
        <BsSearch
          className="responsive-search-icon"
          onClick={handleModalOpen}
        />
      )}
      <div className="search-box-container">
        <form>
          <BsSearch className="search-icon" />
          <input
            type="text"
            placeholder="Busca cualquier ciudad en Mexico o EUA"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={handleSetSearch}>Buscar</button>
        </form>
      </div>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <ResponsiveSearchBar 
            modalOpen={modalOpen} 
            handleClose={close}
            setSearch={setSearch}
            navigate={navigate} 
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
