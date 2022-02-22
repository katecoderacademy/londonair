import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default class AirQuality extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			isLoading: false,
			error:null
		};
	}

	componentDidMount() {

		this.apiHandler();

		setInterval(() => {
			console.log("update");
			this.apiHandler();
		}, 60000);
	}

	apiHandler(){
		this.setState({
			isLoading:true
		});

		this.getAPI().then( dataSet => {
			this.setState({
				data:dataSet,
				isLoading:false
			});
		}).catch( error => {
			this.setState({
				error, 
				isLoading:false
			});
		});
	}

	getAPI(){
		const url = "https://api.tfl.gov.uk/AirQuality";
		let get
		return get = new Promise( (resolve, reject) => {
			fetch(url)
				.then( response => {
					if(response.ok){
						return response.json();
					} else {
						reject("Something went wrong");
					}
				})
				.then( data => { 
					resolve(data);
				})
				.catch( error => reject(error) );
		});
	}

	render() {
		const { data, error, isLoading} = this.state;

		if(error) {
			return <p>{error.message}</p>;
		}
		if(isLoading){
			return <LoadingSpinner/>;
		} else {
			return(
				<ul>
					{
						data.map(item =>
							<li key={item.id}>
								<StatusRender 
									id={item.id}
									destinationName={item.destinationName}
									timeToStation={item.timeToStation}
									expectedArrival={item.expectedArrival}
									platform={item.platformName}
								/>
							</li>
						)
					}
				</ul>
			);
		}
	}
}

function LoadingSpinner(){
	return (
		<div>
			<p> Loading ... </p>
		</div>
	);
}

function PlatFormHandler(props) {
	if(props.platform == "Platform Unknown"){
		return (<p>To be announced later</p>);
	} else {
		return (<p>{props.platform}</p>);
	}
}

function TimeArrivals(props){
	let time = Math.floor(props.time/60);

	if(time < 0){
		return(<p>Arriving now </p>);
	} else {
		return(<p>Arriving in {time} minutes </p>);
	}
}

function StatusRender(props){
	return(
		<div id={props.id}>
			<p>
				Destination => {props.currentForecast[1].forecastID}
			</p>
			<p>
				Arrival Time => {(new Date(props.expectedArrival).toLocaleTimeString())}
			</p>
			<TimeArrivals time={props.timeToStation} />
			<PlatFormHandler platform={props.platform} />
		</div>
	);
}

// ReactDOM.render(<AirQuality/>, document.getElementById("app"));























