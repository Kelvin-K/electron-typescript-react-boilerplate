import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import IRendererProps from "./interfaces/IRendererProps";
import "./styles/main";

class Renderer
{
    //external module dependencies like web and electron
    static InputProps: IRendererProps;
    //main function to start app
    static RenderApp = (InputProps: IRendererProps) =>
    {
        if (!InputProps)
            throw "Input props are not defined";
        Renderer.InputProps = InputProps;
        //Render Main Component
        ReactDOM.render(React.createElement(App), document.getElementById("app"));
    }
}

export default Renderer;