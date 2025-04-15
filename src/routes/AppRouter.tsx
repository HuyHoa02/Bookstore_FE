import { Routes, Route } from 'react-router-dom';
import routes from './index';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';


export default function AppRouter() {
    return (
        <Routes>
            {routes.map(({ path, element, header }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        header ? (
                            <>
                                <Header />
                                {element}
                                <Footer />
                            </>
                        ) : (
                            element
                        )
                    }
                />
            ))}
        </Routes>
    );
}
