import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../Redux/store';
import Navbar from '../Navbar'

describe('Test Navbar Component', () => {
    test ('it renders correctly', () => {
        const tree = renderer
        .create(
            <Provider store={store}>
                <Router>
                    <Navbar />
                </Router>
            </Provider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
});
