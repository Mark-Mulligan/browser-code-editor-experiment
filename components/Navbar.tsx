import Link from 'next/link';
import { Menu } from 'semantic-ui-react';

const Navbar = () => {
  return (
    <Menu style={{ marginBottom: 0, borderBottom: '2px solid rgb(50, 50, 50)' }} inverted secondary>
      <Link href="/" passHref>
        <Menu.Item header>Just Code</Menu.Item>
      </Link>

      <Link href="/coding-exercises" passHref>
        <Menu.Item name="coding-exercises" content="Coding Exercises" />
      </Link>
    </Menu>
  );
};

export default Navbar;
