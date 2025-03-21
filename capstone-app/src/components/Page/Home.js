import hero from '../../assets/hero.png';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <section className='hero'>
        <div className='hero-text'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p className="lead-text">We are a family owned  Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link to="/reservation" className='button'>Reserve a Table</Link>
        </div>
        <img src={hero}/>
      </section>
      <section>
        <h2>Special</h2>
      </section>
      <section>
        <h2>Testimonial</h2>
      </section>
      <section>
        <h2>About</h2>
      </section>
    </div>
  );
}

export default Home;
