import React, { Component } from 'react'

class MarkerManager extends Component {
  constructor(map, handleMarkerClick) {
    super(map)
    this.map = map 
    this.markers = {}
    this.handleMarkerClick = handleMarkerClick
    this.updateMarkers = this.updateMarkers.bind(this); 
    this.addIncomingBenchesToMap = this.addIncomingBenchesToMap.bind(this); 
    this.addMarkerToMapAndMarkers = this.addMarkerToMapAndMarkers.bind(this); 
    this.removeBenchesNotOnMap = this.removeBenchesNotOnMap.bind(this); 
    this.removeMarker = this.removeMarker.bind(this); 
  }

  updateMarkers(newBenches) {
   
    this.addIncomingBenchesToMap(newBenches)
    this.removeBenchesNotOnMap(newBenches)
  }
  
  addIncomingBenchesToMap(benches) {
    benches.forEach(bench => {
      if (!this.markers[bench.id]) {
        this.addMarkerToMapAndMarkers(bench)
      }
    });
  }

  addMarkerToMapAndMarkers(bench) {
    console.log('marker_manager', bench)
    let marker = new google.maps.Marker({
      position: { lat: bench.lat, lng: bench.lng },
      map: this.map,
      animation: google.maps.Animation.DROP,
      title: bench.description
    });

    marker.addListener('click', (event) => {
      this.handleMarkerClick(bench)
    })

    this.markers[bench.id] = marker;
    
  }


  removeBenchesNotOnMap(benchesArray) {
    let newBenchesObj = this.arrayToObject(benchesArray)

    for (let benchId in this.markers) { 
      if (!newBenchesObj[benchId]) { 
        this.removeMarker(benchId);
      }
    }
  }

  arrayToObject(array) { 
   return array.reduce((object, item) => {
      object[item.id] = item
      return object
    }, {})
  }

  removeMarker(benchId) { 
    this.markers[benchId].setMap(null)
    delete this.markers[benchId];
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default MarkerManager;