import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {  useSelector } from 'react-redux';

const Houses = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const message = queryParams.get('message');

  const houses = useSelector((state) => state.houses.houses);

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
      <div>
      {message && <p>{message}</p>}
      </div>
      <div className="header">
        <h2>Need a House to rent ?</h2>
        <p>checkout our available Houses</p>
      </div>
      
      
      <div className="all">
        {each.map((e) => (
          <Link to={`/houses/${e.id}`} className="link">
          <div className="each" key={e.id}>
            <div className="image">
              <img src={e.image} alt={e.name} crossOrigin="anonymous | use-credentials" />
            </div>
            <Link to={`/${e.id}`} className="link">{e.name}</Link>
            <p>
              {e.description.split(' ').slice(0, 15).join(' ')}
              . . .
            </p>
            <ul>
              <li><i className="fa-brands fa-twitter" /></li>
              <li><i className="fa-brands fa-facebook-f" /></li>
              <li><i className="fa-brands fa-instagram" /></li>
            </ul>
          </div>
          </Link>
        ))}
      </div>
      <div className="btn">
        <button className="prev" type="button" disabled={prevdis} onClick={prev}>
          <i className="fa-solid fa-caret-left" />
        </button>
        <button className="next" type="button" disabled={buttondis} onClick={next}>
          <i className="fa-solid fa-caret-right" />
        </button>
      </div>
    </section>
  );
};

export default Houses;