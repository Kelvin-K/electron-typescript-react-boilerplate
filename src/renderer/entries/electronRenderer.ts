import IRendererProps from "../interfaces/IRendererProps";
import Renderer from "../renderer";

// define all electron specific dependencies
class ElectronRendererProps implements IRendererProps {
    public target: "electron";
}

Renderer.RenderApp(new ElectronRendererProps());
