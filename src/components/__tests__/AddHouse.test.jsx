/* eslint-env jest */
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../Redux/store';
import AddHouse from '../AddHouse';

describe('Test AddHouse Component', () => {
    test ('it renders correctly', () => {
        const tree = renderer
        .create(
            <Provider store={store}>
                <Router>
                    <AddHouse />
                </Router>
            </Provider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
});
