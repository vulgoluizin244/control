import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import EntidadesScreen from "../screens/EntidadesScreen";
import ContasPagarScreen from "../screens/ContasPagarScreen";
import ContasReceberScreen from "../screens/ContasReceberScreen";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="home" component={HomeScreen}/>
            <Drawer.Screen name="Entidades" component={EntidadesScreen}/>
            <Drawer.Screen name="Contas a Pagar " component={ContasPagarScreen}/>
            <Drawer.Screen name="Contas a receber" component={ContasReceberScreen}/>



        </Drawer.Navigator>
    );
}
