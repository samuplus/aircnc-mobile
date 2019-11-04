import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Listing from './pages/Listing';
import Book from './pages/Book';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Listing,
        Book
    })
);

export default Routes;