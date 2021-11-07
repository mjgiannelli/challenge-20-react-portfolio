import { createContext, useContext } from "react";
import { useColorThemeReducer } from "./reducers";

const StoreContext = createContext();

console.log('store context', StoreContext);

const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useColorThemeReducer({
        colorTheme: 'dark'
    });

    console.log('state', state);

    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
