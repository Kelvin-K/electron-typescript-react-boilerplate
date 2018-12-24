import IRendererProps from "../interfaces/IRendererProps";
import Renderer from "../renderer";

class ElectronRendererProps implements IRendererProps
{

}

Renderer.RenderApp(new ElectronRendererProps());