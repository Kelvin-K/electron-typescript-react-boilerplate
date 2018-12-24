import IRendererProps from "../interfaces/IRendererProps";
import Renderer from "../renderer";

class WebRendererProps implements IRendererProps
{

}

Renderer.RenderApp(new WebRendererProps());