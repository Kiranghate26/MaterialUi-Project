import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';
import { Switch, Route, Redirect } from 'react-router-dom';
import PerfectScrollbar from 'perfect-scrollbar';
import "perfect-scrollbar/css/perfect-scrollbar.css";

import { Header, Footer, Sidebar } from 'components';

import appRoutes from 'routes/app.jsx';

import { appStyle } from 'variables/styles';

import image from 'assets/img/sidebar-2.jpg';
import logo from 'assets/img/kiran.png';

const switchRoutes = (
    <Switch>
        {appRoutes.map((prop, key) => {
            if(prop.redirect) {
                return <Redirect from={prop.path} to={prop.to} key={key} />;
            }
            return <Route path={prop.path} component={prop.component} key={key} />;
        })}
    </Switch>
);

const App = (props) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const mainPanel = useRef(null);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const getRoute = () => {
        return props.location.pathname !== "/maps";
    };

    useEffect(() => {
        if (window.innerWidth > 991 && mainPanel.current) {
            // eslint-disable-next-line
            const ps = new PerfectScrollbar(mainPanel.current);
        }
        // Cleanup function to avoid memory leaks
        return () => {
            // Here you could destroy the PerfectScrollbar instance if needed
            // ps.destroy() for example, if ps is stored in a ref
        };
    }, []); // Empty array means this runs once on mount

    useEffect(() => {
        if (mainPanel.current) {
            mainPanel.current.scrollTop = 0;
        }
    }); // This runs on every update

    const { classes, ...rest } = props;

    return (
        <div className={classes.wrapper}>
            <Sidebar
                routes={appRoutes}
                logoText={"Dashboard"}
                logo={logo}
                image={image}
                handleDrawerToggle={handleDrawerToggle}
                open={mobileOpen}
                color="blue"
                {...rest}
            />
            <div className={classes.mainPanel} ref={mainPanel}>
                <Header
                    routes={appRoutes}
                    handleDrawerToggle={handleDrawerToggle}
                    {...rest}
                />
                {
                    getRoute() ? (
                        <div className={classes.content}>
                            <div className={classes.container}>{switchRoutes}</div>
                        </div>
                    ) : (
                        <div className={classes.map}>{switchRoutes}</div>
                    )
                }
                {getRoute() && <Footer />}
            </div>
        </div>
    );
};

App.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(appStyle, { withTheme: true })(App);
