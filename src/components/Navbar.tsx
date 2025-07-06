/** @format */

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Link } from "react-router";
import { AddBookModal } from "./AddBookModal";
import { ModeToggle } from "./ToggleThem";

const Navbar = () => {
  return (
    <div className="md:flex justify-between">
      <div>
        <h2 className="text-xl font-semibold">Library Management</h2>
      </div>
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}>
              <Link to="/">HOME</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}>
              <Link to="/books">ALL BOOKS</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}>
              <Link to="/borrow-summary">BORROW SUMMARY</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex justify-center items-center gap-4">
        <AddBookModal />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
