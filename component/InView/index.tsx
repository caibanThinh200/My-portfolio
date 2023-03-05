import handleViewport from "react-in-viewport";

interface IInViewComponent extends JSX.Element {}

const InViewComponent: React.FC<IInViewComponent> = props => {
    return <div className={props.className}>
        {props.children}
    </div>
}

export default handleViewport(InViewComponent);