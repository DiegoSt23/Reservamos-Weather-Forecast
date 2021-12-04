import { useState } from "react";

// Components
import Backdrop from "./Backdrop";

// Framer Motion
import { motion } from "framer-motion";

const ResponsiveSearchBar = ({handleClose, setSearch, navigate}) => {
  const [value, setValue] = useState("");

  const dropIn = {
    hidden: {
      x: "100vh",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 35,
        stiffness: 300,
      },
    },
    exit: {
      x: "100vh",
      opacity: 0,
    },
  };

  const handleSetSearch = (e) => {
    e.preventDefault();
    if (value) {
      setSearch(value);
      navigate("/");
      handleClose();
    }
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="responsive-search-bar"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <form>
          <input
            type="text"
            placeholder="Busca cualquier ciudad en Mexico o EUA"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={handleSetSearch}>Buscar</button>
        </form>
      </motion.div>
    </Backdrop>   
  )
};

export default ResponsiveSearchBar