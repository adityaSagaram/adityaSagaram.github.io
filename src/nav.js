import React from 'react';
import {Link} from 'react-router-dom';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';
export default class Mynav extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<Navbar color="dark" dark expand="md">
			<NavbarBrand><Link to="/"><NavLink>AdityaSagaram</NavLink></Link></NavbarBrand>
				
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<Link to="/books"><NavLink >Books</NavLink></Link>
						</NavItem>
						<NavItem>
							<NavLink href="https://github.com/reactstrap/reactstrap">Bihaar suchna</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Options
					</DropdownToggle>
							<DropdownMenu right>
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
				</Collapse>
			</Navbar >)
	}
}