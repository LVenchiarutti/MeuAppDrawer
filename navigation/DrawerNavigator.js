import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../app/home';
import ProfileScreen from '../app/perfil';
import SettingsScreen from '../app/configuracoes';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Pagina inicial" component={HomeScreen} />
      <Drawer.Screen name="Perfil" component={ProfileScreen} />
      <Drawer.Screen name="configurações" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
