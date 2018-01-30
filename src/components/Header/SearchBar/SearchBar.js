import React from "react";
import "./SearchBar.css";
import {
    NavbarItem,
    Field,
    Control,
    Input
} from "bloomer";

class SearchBar extends React.Component {
    state = {
        inputValue: ""
    }

    handleInputChange = (event) => {
        this.setState({ inputValue: event.target.value })
    }

    render() {
        return (
            <NavbarItem className="SearchBar">
                <form action="">
                    <Field>
                        <Control>
                            <Input 
                                className="InputSearch" 
                                type="text" 
                                placeholder='🔍 Search' 
                                value={this.state.inputValue} 
                                onChange={this.handleInputChange}
                            />
                        </Control>
                    </Field>
                </form>
            </NavbarItem>
        );
    }
};

export default SearchBar;