import GreatDesign from '../../screens/greatdesign';
import Home from '../../screens/home';
import {HOME, SCREEN1, SCREEN2, DESIGN} from '../../constants/navigation';
import Screen1 from '../../screens/Screen1';
import Screen2 from '../../screens/Screen2';

// replace the components with you desired screens or you can add more screens dynamically
export const authScreens = [
  {
    id: 1,
    name: HOME,
    component: Home,
  },
  {
    id: 2,
    name: SCREEN1,
    component: Screen1,
  },
  {
    id: 3,
    name: SCREEN2,
    component: Screen2,
  },
  {
    name: DESIGN,
    component: GreatDesign,
  },
];
