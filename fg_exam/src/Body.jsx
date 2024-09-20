import PropTypes from 'prop-types'
export default function Body(props){
    return(
        <div className="Keboard">
            <img className="Keyboard Picture" src="https://th.bing.com/th/id/OIP.G7s628PA1W8jg5vPc_sY_gHaE8?rs=1&pid=ImgDetMain" alt="profile=icon" />
            <p><h5>Product:</h5> {props.KeyBoardName} </p>
            <p><h5>Overview:</h5> {props.OverView} </p>
            <p><h5>Specifications:</h5> {props.Specifications} </p>
            <p><h5>In the Box:</h5> {props.InsideBox}</p>
            <p><h5>Key Features:</h5> {props.KeyFeatures}</p>
            <p><h5>Setup Instructions:</h5> {props.Setup}</p>
            <p><h5>Using the Keyboard:</h5> {props.HowToUse}</p>
            <p><h5>Troubleshooting:</h5> {props.Troubleshoot}</p>
            <p><h5>Maintenance and Care:</h5> {props.Maintenance}</p>
        </div>
    )

   
}
Body.propTypes = {
    KeyBoardName: PropTypes.string,
    OverView: PropTypes.string,
    Specifications: PropTypes.string,
    InsideBox: PropTypes.string,
    KeyFeatures: PropTypes.string,
    Setup: PropTypes.string,
    HowToUse: PropTypes.string,
    Troubleshoot: PropTypes.string,
    Maintenance: PropTypes.string

}
 Body.defaultProps = {
    KeyBoardName: "Null",
    OverView: "Null",
    Specifications: "Null",
    InsideBox: "Null",
    KeyFeatures: "Null",
    Setup: "IDK",
    HowToUse:"IDK",
    Troubleshoot:"IDK",
    Maintenance: "NOt Free"
    
 }