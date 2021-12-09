/** @format */

const Modal = ({ cancelModal, confirmModal }) => {
  return (
    <div className='modal'>
      <p>Are you sure?</p>
      <button className='btn' onClick={confirmModal}>
        confirm
      </button>
      <button className='btn btn--alt' onClick={cancelModal}>
        cancel
      </button>
    </div>
  );
};

export default Modal;
