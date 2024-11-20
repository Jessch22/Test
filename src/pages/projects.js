import projek from "../data/projek";
import "../styles/projectStyle.css";
import React, { useState } from 'react';
import Modal from "../components/modals";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currprojek, setCurrprojek] = useState(null);

  const openModal = (projek) => {
    setCurrprojek(projek);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrprojek(null);
  };

  return (
    <>
    <h2 className="judulhalaman" id="projects">Projects</h2>

    <div className="kotakprojek">
      {projek.map((projek, index) => (
        <div 
          className="perkotak" 
          key={index} 
          onClick={() => openModal(projek)}>
            <h4>{projek.topik}</h4>
            <h3>{projek.judul}</h3>
            {projek.guna.map((bahasa, idx) => (
              <div className="bahasa" key={idx}>
                {bahasa}
              </div>
            ))}
        </div>
      ))}
    </div>

    {modalOpen && <Modal currprojek={currprojek} closeModal={closeModal} />}
    </>
  )
}

<Modal/>

export default Projects