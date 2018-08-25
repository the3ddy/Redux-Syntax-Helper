import React from 'react';

export default class ComponentFile extends React.Component {
    constructor(props) {
        super(props);
        this.handleEditing = this.handleEditing.bind(this);
        this.handleEditingNameChange = this.handleEditingNameChange.bind(this);
        this.handleEditingLogicChange = this.handleEditingLogicChange.bind(this);
        this.state = {
            editing: false,
            changedName: this.props.componentName
        }
    }

    handleEditing(e) {
        this.setState((prevState) => {
            return { editing: !prevState.editing }
        })
    }

    handleEditingNameChange(e) {
        this.setState({ changedName: e.target.value })
    }
    
    handleEditingLogicChange(e) {
        this.setState({ changedLogic: e.target.value })
    }

    render() {
        const viewStyle = {};
        const editStyle = {};
        
        if (this.state.editing) {
            viewStyle.display = 'none';
        } else {
            editStyle.display = 'none';
        }

        return (
            <div>
                <div style={viewStyle}>
                    {this.state.changedName} 
                    {this.state.changedLogic}
                </div>
                
                <div style={editStyle}>
                    <input type="text" value={this.state.changedName} onChange={this.handleEditingNameChange} />
                </div>

                <button type="button" onClick={this.handleEditing}>{this.state.editing ? 'Save' : 'Edit'}</button>
            </div>
        )
    }
}