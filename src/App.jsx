import FastFood from "./practice-apps/fastfood-app/fastfood.jsx";
import ClientPaginationApp from "./practice-apps/client-pagination-app/client-pagination-app.jsx";
import ServerPaginationApp from "./practice-apps/server-pagination-app/server-pagination-app.jsx";
import ChangeTheme from "./practice-apps/change-theme/change-theme.jsx";
import {ThemeProvider} from "./practice-apps/change-theme/context.jsx";
import CartIntroduction from "./practice-apps/cart-introduction/cart-introduction.jsx";
import {CartProvider} from "./practice-apps/cart-introduction/context/context.jsx";

function App() {

    return (
        // <FastFood/>
        // <ClientPaginationApp/>
        // <ServerPaginationApp/>
        // <ThemeProvider>
        //     <ChangeTheme/>
        // </ThemeProvider>
        <CartProvider>
            <CartIntroduction/>
        </CartProvider>
    )
}

export default App
