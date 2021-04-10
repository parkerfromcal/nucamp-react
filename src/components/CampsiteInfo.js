import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
    renderCampsite(campsite){
        return(<div className="col-md-5 and m-1">< Card /><CardImg /><CardImgOverlay /><CardText /> <CardBody /><CardTitle /></div>)
    }
    render() {
        if(this.props.campsite !== undefined && null) {
            return <div className="row"></div>
        } else {
            return <div></div>
        }
    }
}

export default CampsiteInfo;