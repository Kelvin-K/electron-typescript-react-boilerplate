import IRendererProps from "./interfaces/IRendererProps";

class Renderer
{
    static InputProps: IRendererProps;
    static RenderApp = (InputProps: IRendererProps) =>
    {
        if (!InputProps)
            throw "Input props are not defined";
    }
}

export default Renderer;