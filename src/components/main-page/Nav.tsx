import styled from 'styled-components';
import FoodMateLogo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { NAV_MENUS } from '../../constants/nav-menus';

const StyledNavContainer = styled.div`
  display: flex;
  z-index: 10;
  position: fixed;
  margin: 0 auto;
  width: 100%;
  padding: 12px auto;
  background-color: #fff;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);
`;

const NavContent = styled.div`
  display: flex;
  max-width: 1248px;
  width: 1248px;
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;

  h1 {
    margin-right: 87px;
  }
`;

const Links = styled.ul`
  display: flex;
  width: 35%;
  align-items: center;
  font-weight: 400;

  li {
    padding: 12px 12px;

    & a:hover {
      color: #f96223;
    }
  }
`;

const SignInUp = styled.div`
  position: absolute;
  right: 20px;

  button:first-child {
    margin-right: 10px;
  }
`;

const Nav = () => {
  return (
    <StyledNavContainer>
      <NavContent>
        <h1>
          <Link to="/">
            <img src={FoodMateLogo} alt="foodmate Logo" />
          </Link>
        </h1>
        <Links>
          {NAV_MENUS.map((menu) => {
            return (
              <li key={menu.path}>
                <Link to={`/${menu.path}`}>{menu.title}</Link>
              </li>
            );
          })}
        </Links>
        <SignInUp>
          <button className="btn btn-warning">로그인</button>
          <button className="btn btn-warning btn-outline">회원가입</button>
        </SignInUp>
      </NavContent>
    </StyledNavContainer>
  );
};

export default Nav;
