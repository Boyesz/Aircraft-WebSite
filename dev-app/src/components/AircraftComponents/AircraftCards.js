import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { InputText } from 'primereact/inputtext';
import { Growl } from 'primereact/growl';
import { actionCreators } from '../../store/AircraftStore/Aircraft';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

class AircraftList extends Component {

    constructor() {
        super();
        this.state = {};
        this.onAircraftSelect = this.onAircraftSelect.bind(this);
        this.dialogHide = this.dialogHide.bind(this);
        this.addNew = this.addNew.bind(this);
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
        this.error = this.error.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate() {
        // This method is called when the route parameters change
        if (this.props.forceReload) {
            this.fetchData();
        }
    }

    fetchData() {
        this.props.requestAircrafts();
    }

    updateProperty(property, value) {
        let aircraft = this.state.aircraft;
        aircraft[property] = value;
        this.setState({ aircraft: aircraft });
    }

    onAircraftSelect() {
        this.setState({
            displayDialog: true
        });
    }

    dialogHide() {
        this.setState({ displayDialog: false });
    }

    addNew() {
        this.newAircraft = true;
        this.setState({
            aircraft: { name: '', location: '', organization: '', description: '' },
            displayDialog: true
        });
    }

    save() {
        this.props.saveAircraft(this.state.aircraft);
        this.dialogHide();
        this.growl.show({ severity: 'success', detail: this.newAircraft ? "Data Saved Successfully" : "Data Updated Successfully" });
    }

    delete() {
        this.props.deleteAircraft(this.state.aircraft.id);
        this.dialogHide();
        this.growl.show({ severity: 'error', detail: "Data Deleted Successfully" });
    }

    error() {
        this.props.err
    }

    render() {
        const items = this.props.aircrafts.map(function(item){
            const dollar = item.price + ' dollar'
            var myImage = './../../images/' + item.name + '.jpg'
            console.log(myImage);
            return (<Card style={{maxWidth: 345}}>
            <CardHeader
            title={item.name}
            subheader={dollar}
            />
            <CardMedia
            style={{height: 0, paddingTop: '56.25%'}}
            image={require('./../../images/F22.jpg')}
            title=""
            />
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                <p>Manufacturer: {item.manufacturer}</p>
                <p>Country: {item.country}</p>
            </Typography>
            </CardContent>
        </Card>);
          });
        let dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
            <Button label="Close"  onClick={this.dialogHide} />
            <Button label="Delete" hidden={this.newAircraft ? true : false}  onClick={this.delete} />
            <Button label={this.newAircraft ? "Save" : "Update"} onClick={this.save} />
        </div>;
        return (
            <div>
                <Growl ref={(el) => this.growl = el} />
                <img src={require("./../../images/fighter-jet.jpg")}  width="300" height="200"></img>
                <div className="p-clearfix" style={{ width: '100%' }}>
                <Button style={{ float: 'left' }} label="Control Panel" onClick={this.addNew} />
                </div>
                <div>
                {items}
                </div>
                <Dialog visible={this.state.displayDialog} style={{ 'width': '380px' }} header="Aircraft Details" modal={true} footer={dialogFooter} onHide={() => this.setState({ displayDialog: false })}>
                    {
                        this.state.aircraft &&

                        <div className="p-grid p-fluid">

                            <div><label htmlFor="name">Name</label></div>
                            <div>
                                <InputText id="name" onChange={(e) => { this.updateProperty('name', e.target.value) }} value={this.state.aircraft.name} />
                            </div>

                            <div style={{ paddingTop: '10px' }}><label htmlFor="location">Price</label></div>
                            <div>
                                <InputText id="price" onChange={(e) => { this.updateProperty('price', e.target.value) }} value={this.state.aircraft.price} />
                            </div>

                            <div style={{ paddingTop: '10px' }}><label htmlFor="location">Country</label></div>
                            <div>
                                <InputText id="country" onChange={(e) => { this.updateProperty('country', e.target.value) }} value={this.state.aircraft.country} />
                            </div>

                            <div style={{ paddingTop: '10px' }}><label htmlFor="location">Manufacturer</label></div>
                            <div>
                                <InputText id="manufacturer" onChange={(e) => { this.updateProperty('manufacturer', e.target.value) }} value={this.state.aircraft.manufacturer} />
                            </div>
                        </div>
                    }
                </Dialog>
            </div>
        )
    }
}

// Make aircrafts array available in props
function mapStateToProps(state) {
    return {
        aircrafts: state.aircrafts.aircrafts,
        loading: state.aircrafts.loading,
        errors: state.aircrafts.errors,
        forceReload: state.aircrafts.forceReload
    }
}

export default connect(
    mapStateToProps,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(AircraftList);