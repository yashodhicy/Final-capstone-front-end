import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteHouseThunk } from '../Redux/deleteSlice.js';
import { Link, useNavigate } from 'react-router-dom';
import { userHouses } from '../Redux/HouseSlice.js';

const DeleteHouse = () => {
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(userHouses());
  },[dispatch]);

  const userhouses = useSelector((state) => state.Houses.userhouses);
  const navigate = useNavigate();

  const handleDelete = (houseId) => {
    dispatch(deleteHouseThunk(houseId)).then((action) => {
      navigate('/delete');
      console.log('deleteHouseThunk action:', action);
    });
  };

  return (
    <div>
      <section className="houses">
      <div className="header">
        <h2>Need a House to Delete ?</h2>
        <p>checkout our available Houses</p>
      </div>

      <div className="all">
       {userhouses.map((e) => (
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
              <li><i className="fa-brands fa-twitter" /></li>
              <li><i className="fa-brands fa-facebook-f" /></li>
              <li><i className="fa-brands fa-instagram" /></li>
            </ul>

            <div>
              <button type = "button" className="btn" onClick={() => handleDelete(e.id)}>Delete House</button>
            </div>

          </div>

        ))}
      </div>
      {/* <div className="btn">
        <button className="prev" type="button" disabled={prevdis} onClick={prev}>
          <i className="fa-solid fa-caret-left" />
        </button>
        <button className="next" type="button" disabled={buttondis} onClick={next}>
          <i className="fa-solid fa-caret-right" />
        </button>
      </div> */}
    </section>
    </div>
  );
}

export default DeleteHouse;