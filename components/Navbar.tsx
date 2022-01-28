import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu } from 'semantic-ui-react';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
  const router = useRouter();

  return (
    <Menu
      className={styles.navbar}
      style={{ marginBottom: 0, borderBottom: '2px solid rgb(50, 50, 50)' }}
      inverted
      secondary
    >
      <Link href="/" passHref>
        <Menu.Item header active={router.asPath === '/'}>
          Just Code
        </Menu.Item>
      </Link>

      <Link href="/coding-exercises" passHref>
        <Menu.Item name="coding-exercises" active={router.asPath === '/coding-exercises'} content="Coding Exercises" />
      </Link>
    </Menu>
  );
};

export default Navbar;
