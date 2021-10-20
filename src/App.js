import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import BlogPost from './components/BlogPost/BlogPost';
import Blogs from './components/Blogs/Blogs';
import ContactUs from './components/ContactUs/ContactUs';
import DoctorsProfile from './components/DoctorsProfile/DoctorsProfile';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Service from './components/Service/Service';
import Services from './components/Services/Services';
import Shop from './components/Shop/Shop';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute exact path="/services/:serviceID">
              <Service></Service>
            </PrivateRoute>
            <Route exact path="/blogs">
              <Blogs></Blogs>
            </Route>
            <PrivateRoute exact path="/blogs/:blogID">
              <BlogPost></BlogPost>
            </PrivateRoute>
            <Route exact path="/shop">
              <Shop></Shop>
            </Route>
            <Route exact path="/shop/:productID">
              <ProductDetails></ProductDetails>
            </Route>
            <Route exact path="/about-us">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="/doctors/:doctorID">
              <DoctorsProfile></DoctorsProfile>
            </Route>
            <Route exact path="/contact-us">
              <ContactUs></ContactUs>
            </Route>
            <Route exact path="/sign-in">
              <SignIn></SignIn>
            </Route>
            <Route exact path="/sign-up">
              <SignUp></SignUp>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
