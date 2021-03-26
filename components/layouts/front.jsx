import Navbar from "../navbar";
const FrontLayout = (props) => {
    return (
        <div className="container-fluid p-0 m-0">
            <div className="row m-0 p-0">
                <div className="col-12 p-0">
                    <Navbar />
                </div>
            </div>
            <div className="row m-0 p-0">
                <div className="col-12">
                    {props.children}
                </div>
            </div>
            <div className="row m-0 p-0">
                <div className="col-12">
                </div>
            </div>
        </div>
    );
}
export default FrontLayout;