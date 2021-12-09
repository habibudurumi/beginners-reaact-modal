/** @format */

import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todos = ({ heading }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleDelete = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='card'>
      <h2>{heading}</h2>
      <div className='action'>
        <button className='btn' onClick={handleDelete}>
          Delete
        </button>
        {modalOpen && (
          <Modal cancelModal={closeModal} confirmModal={closeModal} />
        )}
        {modalOpen && <Backdrop closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default Todos;
