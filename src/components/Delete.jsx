import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteHouseThunk } from '../Redux/deleteSlice.js';
import { Link, useNavigate } from 'react-router-dom';
import { userHouses } from '../Redux/HouseSlice.js';
import '../components/componentsCss/delete.css'
import { Button } from 'react-bootstrap';

const DeleteHouse = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userHouses());
  }, [dispatch]);

  const userhouses = useSelector((state) => state.Houses.userhouses);
  const navigate = useNavigate();

  const handleDelete = async (houseId) => {
    await dispatch(deleteHouseThunk(houseId)).then(() => {
      dispatch(userHouses());
      navigate("/delete");
    });
  };

  return (
    <>
      <section className="houses w-100 gap-2">
      <div className="header">
        <h2>Need to delete your house?</h2>
        <p>After deleting others can not reserve your house</p>
      </div>
      {userhouses.length === 0 ? (
      <p>You have no houses yet. Add a new house.</p>
      ) : (
      <div className="all">
       {userhouses.map((e) => (
          <div className="each d-flex house-div" key={e.id}>
            <div className="image delete-image">
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

            <div>
              <Button type ="button" variant='danger' onClick={() => handleDelete(e.id)}>Delete House</Button>
            </div>
          </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default DeleteHouse;
