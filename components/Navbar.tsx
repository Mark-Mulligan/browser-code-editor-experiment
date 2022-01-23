import Link from 'next/link';
import { Menu } from 'semantic-ui-react';

const Navbar = () => {
  return (
    <Menu>
      <Link href="/" passHref>
        <Menu.Item header>Just Code</Menu.Item>
      </Link>

      <Link href="/coding-practice" passHref>
        <Menu.Item name="coding-exercises" content="Coding Exercises" />
      </Link>
    </Menu>
  );
};

export default Navbar;
