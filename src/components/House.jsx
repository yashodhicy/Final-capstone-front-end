import './componentsCss/houses.css';
import 'font-awesome/css/font-awesome.min.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Houses = () => {

  const houses = useSelector((state) => state.Houses.houses);

  const [buttondis, setbuttondis] = useState(false);
  const [prevdis, setprev] = useState(false);
  const [house, setcar] = useState(1);
  const perpage = 3;
  const last = house * perpage;
  const first = last - perpage;
  const each = houses.slice(first, last);
  const next = () => {
    if (house >= Math.round(houses.length / 3)) {
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
              <li><i className=" fa fa-brands fa-twitter" /></li>
              <li><i className=" fa fa-brands fa-facebook-f" /></li>
              <li><i className=" fa fa-brands fa-instagram" /></li>
            </ul>
          </div>
        ))}
      </div>
      <div className="btn">
        <button className="prev" type="button" disabled={prevdis} onClick={prev}>
          <i className="fa fa-solid fa-caret-left" />
        </button>
        <button className="next" type="button" disabled={buttondis} onClick={next}>
          <i className="fa fa-solid fa-caret-right" />
        </button>
      </div>
    </section>
  );
};

export default Houses;
