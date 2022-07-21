import './AppBar.scss';
import Navigation from '../Navigation/Navigation';
import Container from '../Container/Container';
import Social from '../Social/Social';
import { useContext } from 'react';
import contextNav from '../../context/contextNav';
export default function AppBar() {
  const { showNav } = useContext(contextNav);
  return (
    <header className="header">
      <Container className="container header_container">
        {showNav && (
          <>
            <Navigation />
            <Social />
          </>
        )}
      </Container>
    </header>
  );
}
