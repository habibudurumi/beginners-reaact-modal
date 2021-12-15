/** @format */
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className='about'>
      <p>created by Habibu Haruna inspired by Traversy Media</p>
      <h4>Version 1.0.0</h4>
      <Link to='/'>Go Back</Link>
    </div>
  );
};

export default About;
