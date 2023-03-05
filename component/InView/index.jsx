import handleViewport from "react-in-viewport";

const InViewComponent = props => {
    return <div className={props.className}>
        {props.children}
    </div>
}

export default handleViewport(InViewComponent);