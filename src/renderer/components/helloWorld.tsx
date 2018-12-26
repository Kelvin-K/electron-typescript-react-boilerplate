import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import IAppState from "../interfaces/IAppState";

interface StateProps
{
    userName: string;
}

interface DispatchProps
{

}

export class HelloWorld extends React.Component<StateProps & DispatchProps, any>
{
    render()
    {
        return (
            <div id="HelloWorld">
                <div className="userIcon icon_user" />
                <div className="userLabel">Hello { this.props.userName }</div>
            </div>
        );
    }
}

function connectStateToProps(state: IAppState): StateProps
{
    return {
        userName: state.user.name
    };
}

function connectDispatchToProps(dispatch: any): DispatchProps
{
    return bindActionCreators({}, dispatch);
}

export default connect(connectStateToProps, connectDispatchToProps)(HelloWorld);
