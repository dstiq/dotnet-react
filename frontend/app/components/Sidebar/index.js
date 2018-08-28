import React, {Component} from 'react';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';
import {
    switchTitle,
} from '../../actions/appActions';
import CSVDownloadButton from '../../components/CSVDownloadButton';

class Sidebar extends Component {

    constructor(props) {
        super(props);
        let selectedFeature = this.props.app.containerTitle;
        this.state = {
            showMenu: false,
            selectedFeature
        };
    }

    handleClick(item, event) {
        event.preventDefault();

        const capitalizeFirstLetter = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };

        this.props.switchTitle(capitalizeFirstLetter(item));
        this.props.changeRoute('/' + item);
    }

    render() {
        const menuStyle = {
            'display': this.props.app.isShowMenu ? 'block' : 'none'
        };
        const {containerTitles} = this.props.app;
        const listItems = containerTitles.map((containerTitle) => {
            let boundClick = this.handleClick.bind(this, containerTitle);
            if (this.state.selectedFeature === containerTitle)
                return (<li key={containerTitle}>
                    <button onClick={boundClick} className="gridButton"><p className="gridLabel">{containerTitle}</p>
                    </button>
                </li>)
            else
                return (<li key={containerTitle}>
                    <button onClick={boundClick} className="gridButton"><p className="gridLabel">{containerTitle}</p>
                    </button>
                </li>)
        });
        return (
            <div style={menuStyle} className="sidebarContainer examplesContainer">
                <h2 className="gridH2"> Sidebar Menu </h2>
                <ul>
                    {listItems}
                    <CSVDownloadButton />
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    app: state.app,
});


const mapDispatchToProps = (dispatch) => {
    return {
        changeRoute: (url) => dispatch(push(url)),
        switchTitle: (containerTitle) => dispatch(switchTitle(containerTitle)),
        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);