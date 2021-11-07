import { createContext, useContext } from "react";
import { useColorThemeReducer } from "./reducers";

const StoreContext = createContext();

const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useColorThemeReducer({
        colorTheme: 'dark'
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
