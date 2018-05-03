import { StackNavigator } from "react-navigation";
import DubbyNavRoutes from "../routes/DubbyNavRoutes";

const DubbyStackNav = StackNavigator(DubbyNavRoutes, { headerMode: "screen" });

export default DubbyStackNav;