import React ,{useState} from 'react'
import * as strap from 'reactstrap'

export default function Nav() {
    const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        
        <div>
        <strap.Navbar color="black" light>
          <strap.NavbarBrand href="/" className="mr-auto">Mars</strap.NavbarBrand>
          <strap.NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <strap.Collapse isOpen={!collapsed} navbar>
            <strap.Nav navbar>
              <strap.NavItem>
                <strap.NavLink href="/components/">Travel Today 🌍</strap.NavLink>
              </strap.NavItem>
              <strap.NavItem>
                <strap.NavLink href="https://github.com/hobsond">GitHub ⚛</strap.NavLink>
              </strap.NavItem>
            </strap.Nav>
          </strap.Collapse>
        </strap.Navbar>
      </div>
        
    )
}
