import "../styles/modalStyle.css";

const Modal = ({ currprojek, closeModal }) => {
  if (!currprojek) return null;

  return (
    <div className="modal-overlay">
      <div className="isi-modal">
            <h4>{currprojek.topik}</h4>
            <h3>{currprojek.judul}</h3>
          <button className="close-btn" onClick={closeModal}>&times;</button>
        <div className="bahasa-projek">
          {currprojek.guna.map((bahasa, idx) => (
            <div className="perbahasa" key={idx}>
              {bahasa}
            </div>
          ))}
        </div>
        <p>{currprojek.deskripsi}</p>
        <div className="link">
          <a href={currprojek.linkgithub} target="_blank" rel="noopener noreferrer">Github</a>
          <a href={currprojek.documentation} target="_blank" rel="noopener noreferrer">Documentation</a>
          <a href={currprojek.linkfigma} target="_blank" rel="noopener noreferrer">Figma</a>
        </div>
        <h4 className="preview">Preview</h4>
        <img src={currprojek.preview} alt="preview" />
      </div>
    </div>
  );
};

export default Modal;