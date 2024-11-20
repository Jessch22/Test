import projek from "../data/projek";
import "../styles/projectStyle.css";

const Projects = () => {
  return (
    <>
    <h2 className="judulhalaman">Projects</h2>

    {/* Kotak 2x3 */}
    <div className="kotakprojek">
      {projek.map((projek, index) => (
        <div className="perkotak" key={index}>
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
    </>
  )
}

export default Projects