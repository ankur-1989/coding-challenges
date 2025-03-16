// app/components/Navbar.tsx
import Link from "next/link";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1>JUCR GraphQL Nextjs Challenge</h1>
      <ul className={styles.navbar}>
        <li className={styles.navItem}>
          <Link href="/repo">Repository List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
