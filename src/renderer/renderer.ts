import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import IRendererProps from "./interfaces/IRendererProps";
import "./styles/main";

class Renderer {
    // external module dependencies like web and electron
    public static InputProps: IRendererProps;
    // main function to start app
    public static RenderApp = (InputProps: IRendererProps) => {
        if (!InputProps) {
            throw new Error("Input props are not defined");
        }
        Renderer.InputProps = InputProps;
        // Render Main Component
        ReactDOM.render(React.createElement(App), document.getElementById("app"));
    }
}

export default Renderer;
