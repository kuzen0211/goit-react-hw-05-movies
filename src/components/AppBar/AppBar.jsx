import { Header, LinkStyled } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <Header>
      <nav>
        {navItems.map(({ href, text }) => (
          <LinkStyled to={href} key={href}>
            {text}
          </LinkStyled>
        ))}
      </nav>
    </Header>
  );
};
