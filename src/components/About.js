import '../styles/wrkinStyle.css'; // Asegúrate de que la ruta sea correcta
import Working from '../images/Working.jpg'


function About() {
  return (
    <div className="container">
      <img className="image"  src={Working} alt="thx 4 wait, we r working" />
      <h2 className="text">Working...</h2>
    </div>
  );
  }
  
  export default About;