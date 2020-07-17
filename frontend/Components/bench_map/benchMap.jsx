import MarkerManager from '../../Util/marker_manager';
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'; 

class BenchMap extends Component {
   constructor(props) { 
     super(props)
      this.updateMapBounds = this.updateMapBounds.bind(this); 
      this.addMapAndMarkers = this.addMapAndMarkers.bind(this); 
      this.handleMapClick = this.handleMapClick.bind(this)
      this.handleMarkerClick = this.handleMarkerClick.bind(this)
      this.addSingleMarkerToMap = this.addSingleMarkerToMap.bind(this)
    }
    
  
  componentDidMount() {
    if (this.props.singleBench) { 
      this.addSingleMarkerToMap()
    }

    if (this.props.benches) { 
      this.addMapAndMarkers()
      this.updateMapBounds()
      this.handleMapClick()
    }
  }

  componentDidUpdate(prevProps) { 
    if (this.props !== prevProps) { 
      this.MarkerManager.updateMarkers(this.props.benches)
    }
    
  }

  addSingleMarkerToMap() { 
    let bench = this.props.singleBench
    const position = {
       lat: bench.lat, lng: bench.lng 
    } 

    this.map = new google.maps.Map(this.mapNode, { 
      center: position, 
      zoom: 13, 
      gestureHandling: 'none',
      zoomControl: false
    })
  
    let marker = new google.maps.Marker({
      position,
      map: this.map,
      animation: google.maps.Animation.DROP,
      title: bench.description,
    });
  
  }

  addMapAndMarkers() { 
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    }

    this.map = new google.maps.Map(this.mapNode, mapOptions)
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick)
    console.log('benchMap', this.props.benches)
    this.MarkerManager.updateMarkers(this.props.benches)
  }

  handleMarkerClick(bench) { 
    this.props.history.push(`/bench/${bench.id}`)
  }

  updateMapBounds() { 
     
    this.map.addListener('idle', () => {
      let bounds = this.map.getBounds()
      this.props.updateFilter('bounds', {
        northEast: {
          lat: bounds.getNorthEast().lat(),
          lng: bounds.getNorthEast().lng()
        },
        southWest: {
          lat: bounds.getSouthWest().lat(),
          lng: bounds.getSouthWest().lng()
        }
      })
    })
  }


  handleMapClick() { 
    this.map.addListener('click', (e) => { 
      this.props.history.push({ 
        pathname: '/bench/new', 
        search: `lat=${e.latLng.lat()}&lng=${e.latLng.lng()}`
      })
    })
  }

  render() {
    return (
    <div id='map-container' ref={map => this.mapNode = map}>
        
    </div>
    )
  }
}

export default withRouter(BenchMap)