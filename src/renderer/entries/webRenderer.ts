import IRendererProps from "../interfaces/IRendererProps";
import Renderer from "../renderer";

// define all web specific dependencies
class WebRendererProps implements IRendererProps
{
    public target: "web";
}

Renderer.RenderApp(new WebRendererProps());
