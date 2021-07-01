import React, { useState } from 'react';
import Link from 'next/link'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  InputGroup,
  InputGroupAddon,
  Button
} from 'reactstrap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link href="/">
            <a className="mr-4 navbar-brand">Home</a>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
                <NavItem className="mr-4">
                    <InputGroup className="mt-2" size="sm">                        
                        <Input placeholder="Search"
                            // onChange={e => updateQuery(e.target.value.toLocaleLowerCase())}
                            // value={query}
                        />
                        <InputGroupAddon addonType="append">
                            <Button>Search</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </NavItem>
                <NavItem>
                    <Link href="/components/"><a className="nav-link">Components</a></Link>
                </NavItem>
                <NavItem>
                    <NavLink href="https://github.com/somanyjuice">GitHub</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Options
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                        Option 1
                        </DropdownItem>
                        <DropdownItem>
                        Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        Reset
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
            <Nav>
                <Link href="/login">
                    <a className="nav-link">Sign in</a>
                </Link>
            </Nav>
            <Nav>
                <Link href="/register">
                    <a className="nav-link">Sign up</a>
                </Link>
            </Nav>        
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;