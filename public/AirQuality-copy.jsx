import React, { useState, useEffect } from 'react';
import axios from 'axios';


// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// }


// const baseURL = "https://api.tfl.gov.uk/AirQuality";

// export default function App() {
//   const [quality, setQuality] = React.useState(null);




//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setQuality(response.data);
      
//       console.log(response)
//       console.log('quality', quality)
//     });
//   }, []);

//   if (!quality) return null;


//     <div>
//       <h1> {
//   quality?.results.length && quality.results.map(el => {
//       return <p>{el.name}</p>
//   })
// }</h1>
//       <p></p>
//     </div>

// }



// export default class AirQuality extends React.Component {
//   state = {
//     quality: []
//   }

//   componentDidMount() {
//     axios.get(`https://api.tfl.gov.uk/AirQuality`)
//       .then(res => {
//         const quality = res.data;
//         this.setState({ quality });
//       })
//   }



//   render() {
//     return (
//       <ul>
//         {
//         //   this.state.quality
//         //     .map(quality =>
//         //       <li key={quality}>{quality.forecastBand}</li>
//         //     )
//         }
//       </ul>
//     )
//   }
// }


// export default class AirQuality extends React.Component {
//   state = {
//     quality: []
//   }

//   componentDidMount() {
//     axios.get(`https://api.tfl.gov.uk/AirQuality`)
//       .then(res => {
//         const quality = res.data;
//         this.setState({ quality });
//       })
//   }



//   render() {
//     return (
//       <ul>
//         {
//         //   this.state.quality
//         //     .map(quality =>
//         //       <li key={quality}>{quality.forecastBand}</li>
//         //     )
//         }
//       </ul>
//     )
//   }
// }







// export default function AirQuality() {


//   const data = {
//     "$id": "1",
//     "$type": "Tfl.Api.Presentation.Entities.LondonAirForecast, Tfl.Api.Presentation.Entities",
//     "updatePeriod": "hourly",
//     "updateFrequency": "1",
//     "forecastURL": "http://londonair.org.uk/forecast",
//     "disclaimerText": "This forecast is intended to provide information on expected pollution levels in areas of significant public exposure. It may not apply in very specific locations close to unusually strong or short-lived local sources of pollution.",
//     "currentForecast": [
//         {
//             "$id": "2",
//             "$type": "Tfl.Api.Presentation.Entities.CurrentForecast, Tfl.Api.Presentation.Entities",
//             "forecastType": "Current",
//             "forecastID": "35268",
//             "forecastBand": "Low",
//             "forecastSummary": "Low air pollution forecast valid from Monday 21 February to end of Wednesday 23 February GMT",
//             "nO2Band": "Low",
//             "o3Band": "Low",
//             "pM10Band": "Low",
//             "pM25Band": "Low",
//             "sO2Band": "Low",
//             "forecastText": "Unsettled conditions will remain. Changeable and often windy with occasional showers. Little by way of imported pollution is expected. &lt;br/&gt;&lt;br/&gt;Air pollution is expected to remain &#39;Low&#39; throughout the forecast period for the following pollutants:&lt;br/&gt;&lt;br/&gt;Ozone&lt;br/&gt;PM10 Particulates&lt;br/&gt;PM2.5 Particulates&lt;br/&gt;Sulphur Dioxide&lt;br/&gt;Nitrogen Dioxide&lt;br/&gt;"
//         },
//         {
//             "$id": "3",
//             "$type": "Tfl.Api.Presentation.Entities.CurrentForecast, Tfl.Api.Presentation.Entities",
//             "forecastType": "Future",
//             "forecastID": "35268",
//             "forecastBand": "Low",
//             "forecastSummary": "Low air pollution forecast valid from Monday 21 February to end of Wednesday 23 February GMT",
//             "nO2Band": "Low",
//             "o3Band": "Low",
//             "pM10Band": "Low",
//             "pM25Band": "Low",
//             "sO2Band": "Low",
//             "forecastText": "Unsettled conditions will remain. Changeable and often windy with occasional showers. Little by way of imported pollution is expected. &lt;br/&gt;&lt;br/&gt;Air pollution is expected to remain &#39;Low&#39; throughout the forecast period for the following pollutants:&lt;br/&gt;&lt;br/&gt;Ozone&lt;br/&gt;PM10 Particulates&lt;br/&gt;PM2.5 Particulates&lt;br/&gt;Sulphur Dioxide&lt;br/&gt;Nitrogen Dioxide&lt;br/&gt;"
//         }
//     ]
//   }

//   return (
//     <ul>
//         {data.currentForecast.map((name, index) => {
//         {index.$id}
//         {$type}
      
      
//       })}
//         </ul>

//   );
// }



// // export default class AirQuality extends React.Component {
// // return ( { data })}







// // export default function AirQuality() {

// //     const [data,setData]=useState([]);
// //     const getData=()=>{
// //       fetch('response.json'
// //       ,{
// //         headers : { 
// //           'Content-Type': 'application/json',
// //           'Accept': 'application/json'
// //          }
// //       }
// //       )
// //         .then(function(response){
// //           console.log(response)
// //           return response.json();
// //         })
// //         .then(function(myJson) {
// //           console.log(myJson);
// //           setData(myJson)
// //         });
// //     }
// //     useEffect(()=>{
// //       getData()
// //     },[])
   
// //     // Style here
// //         return (
// //           <main style={{ padding: "1rem 0" }}>
// //             <h2>Blog</h2>
// //               <div className="blog-container">
// //                     {data.map((item)=>
// //                     <><p><h3>{item.title}</h3></p>
// //                         <p /><b>{item.date}</b> <i>{item.time}</i>
// //                         <p /><img src={item.imageURL} alt={item.title} width="60px" />
// //                         <p />{item.content}
                      
// // </>
  
// //                           )}
  
//                         </div>
//         </main>
//       );
//   }

// componentDidMount(){
//     axios.get(baseURL)
//       .then((response) => {
//         console.log(response)
//         this.setState({
//           values: response.data
//         })
//       })
//     }

//     const data = response.data.currentForecast

// export default class AirQuality extends React.Component {
//     state = {
//         values: []
//       }
    



//       render(){
//         {socialMediaList.map(s => (<li>{s}</li>))}
//         );
//       }
//     }