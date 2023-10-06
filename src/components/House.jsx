import './componentsCss/houses.css';
import 'font-awesome/css/font-awesome.min.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Houses = () => {

  const houses = useSelector((state) => state.Houses.houses);

  const [buttondis, setbuttondis] = useState(false);
  const [prevdis, setprev] = useState(false);
  const [house, setcar] = useState(1);
  const [perpage, setPerPage] = useState(1);
  
  const handleResize = () => {
    // Check the window width and update perpage accordingly
    if (window.innerWidth <= 768) {
      setPerPage(1);
    } else {
      setPerPage(3);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    // Call handleResize initially to set perpage based on the current window width
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const last = house * perpage;
  const first = last - perpage;
  const each = houses.slice(first, last);
  const next = () => {
    const totalPages = Math.ceil(houses.length / perpage);
  
    if (house >= totalPages) {
      setbuttondis(true);
    } else {
      setbuttondis(false);
      setcar(house + 1);
      setprev(false);
    }
  };

  const prev = () => {
    if (house <= 1) {
      setprev(true);
    } else {
      setprev(false);
      setcar(house - 1);
      setbuttondis(false);
    }
  };

  return (
    <section className="houses">
      <div className="header">
        <h2>Need a House to rent ?</h2>
        <p>checkout our available Houses</p>
      </div>

      <div className="all">
        {each.map((e) => (
          <div className="each" key={e.id}>
            <div className="image">
              <img src={e.image} alt={e.name} crossOrigin="anonymous | use-credentials" />
            </div>
            <Link to={`/houses/${e.id}`} className="link">{e.name}</Link>
            <p>
              {e.description.split(' ').slice(0, 15).join(' ')}
              . . .
            </p>
            <ul>
              <li><i className="fa fa-brands fa-twitter" /></li>
              <li><i className="fa fa-brands fa-facebook-f" /></li>
              <li><i className="fa fa-brands fa-instagram" /></li>
            </ul>
          </div>
        ))}
      </div>
      <div className="btn">
        <button className="prev" type="button" disabled={prevdis} onClick={prev}>
          <i className="fa fa-caret-left" />
        </button>
        <button className="next" type="button" disabled={buttondis} onClick={next}>
          <i className="fa fa-caret-right" />
        </button>
      </div>
    </section>
  );
};

export default Houses;
