import SplashMainView from "./views/SplashMainView";

const Splash = (props) => {
    const {
        navigation,

    } = props;

    const propsSplash = {
        navigation,

    };

    return <SplashMainView{...propsSplash} />
}

export default Splash;