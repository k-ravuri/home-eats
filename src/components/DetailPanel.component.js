import React, { Component, PropTypes } from 'react'
import { Button, Table } from 'react-bootstrap'
import './../styles/App.css'

class DetailPanel extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const activeEvents = this.props.activeEvents
    console.log(activeEvents);
    const tableInstance = (
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Lat</th>
                <th>Long</th>
                <th>Cusine</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{activeEvents[0]}</td>
                <td>{activeEvents[0]}</td>
                <td>activeEvents[0][2]</td>
                <td>activeEvents[0][3]</td>
              </tr>
              <tr>
                <td>2</td>
                <td>activeEvents[1][0]</td>
                <td>activeEvents[1][1]</td>
                <td>activeEvents[1][2]</td>
                <td>activeEvents[1][3]</td>
              </tr>
              <tr>
                <td>3</td>
                <td>activeEvents[2][0]</td>
                <td>activeEvents[2][1]</td>
                <td>activeEvents[2][2]</td>
                <td>activeEvents[2][3]</td>
              </tr>
              <tr>
                <td>4</td>
                <td>activeEvents[3][0]</td>
                <td>activeEvents[3][1]</td>
                <td>activeEvents[3][2]</td>
                <td>activeEvents[3][3]</td>
              </tr>
              <tr>
                <td>5</td>
                <td>activeEvents[4][0]</td>
                <td>activeEvents[4][1]</td>
                <td>activeEvents[4][2]</td>
                <td>activeEvents[4][3]</td>
              </tr>
              <tr>
                <td>6</td>
                <td>activeEvents[5][0]</td>
                <td>activeEvents[5][1]</td>
                <td>activeEvents[5][2]</td>
                <td>activeEvents[5][3]</td>
              </tr>
              <tr>
                <td>7</td>
                <td>activeEvents[6][0]</td>
                <td>activeEvents[6][1]</td>
                <td>activeEvents[6][2]</td>
                <td>activeEvents[6][3]</td>
              </tr>
              <tr>
                <td>8</td>
                <td>activeEvents[7][0]</td>
                <td>activeEvents[7][1]</td>
                <td>activeEvents[7][2]</td>
                <td>activeEvents[7][3]</td>
              </tr>
              <tr>
                <td>9</td>
                <td>activeEvents[8][0]</td>
                <td>activeEvents[8][1]</td>
                <td>activeEvents[8][2]</td>
                <td>activeEvents[8][3]</td>
              </tr>
              <tr>
                <td>10</td>
                <td>activeEvents[9][0]</td>
                <td>activeEvents[9][1]</td>
                <td>activeEvents[9][2]</td>
                <td>activeEvents[9][3]</td>
              </tr>
              <tr>
                <td>11</td>
                <td>activeEvents[10][0]</td>
                <td>activeEvents[10][1]</td>
                <td>activeEvents[10][2]</td>
                <td>activeEvents[10][3]</td>
              </tr>
              <tr>
                <td>12</td>
                <td>activeEvents[11][0]</td>
                <td>activeEvents[11][1]</td>
                <td>activeEvents[11][2]</td>
                <td>activeEvents[11][3]</td>
              </tr>
              <tr>
                <td>13</td>
                <td>activeEvents[12][0]</td>
                <td>activeEvents[12][1]</td>
                <td>activeEvents[12][2]</td>
                <td>activeEvents[12][3]</td>
              </tr>
            </tbody>
          </Table>
          )

    return (
      <div className="detail-panel">
        {tableInstance}
      </div>
    )
  }
}

export default DetailPanel

/*
import React, { Component } from 'react'
import { Image, Button, Carousel } from 'react-bootstrap'
import './../styles/App.css'

class InfoPanel extends Component {
  constructor(props) {
    super(props)
    this.onClickPrevious = this.onClickPrevious.bind(this)
    this.onClickNext = this.onClickNext.bind(this)
  }

  onClickPrevious() {
    const { activeEvents, selectedEvent, setSelectedPOI } = this.props
    const curIndex = activeEvents.findIndex(poi => poi.id === selectedEvent.id)
    setSelectedPOI(activeEvents[curIndex - 1].id)
  }

  onClickNext() {
    const { activeEvents, selectedEvent, setSelectedPOI } = this.props
    const curIndex = activeEvents.findIndex(poi => poi.id === selectedEvent.id)
    setSelectedPOI(activeEvents[curIndex + 1].id)
  }

  render() {
    const {
      activeEvents,
      selectedEvent,
      setSelectedPOI,
      isStorySelected
    } = this.props
    const curIndex = activeEvents.findIndex(poi => poi.id === selectedEvent.id)
    const isShownNext = curIndex < activeEvents.length - 1
    const isShownPrev = curIndex > 0

    const carousel = (
      <Carousel>
        {activeEvents.map(selectedEvent => (
          <Carousel.Item>
            <Image
              width={500}
              height={500}
              alt={selectedEvent.caption}
              src={selectedEvent.content_url}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    )

    if (!selectedEvent) {
      return (
        <div className="info-panel">
          <h1>No POI Selected</h1>
        </div>
      )
    }

    return (
      <div className="info-panel">
        <h1>
          <u>
            <b>{selectedEvent.title} </b>
          </u>
        </h1>
        <div>
          <div>
            <Image
              src={selectedEvent.image}
              alt={selectedEvent.title}
              responsive
            />
            <hr />
            {carousel}
            <hr />
            <h3>Description:</h3>
            <p>{selectedEvent.description}</p>
            <hr />
            <h3>Additional Links:</h3>
            <ul>
              {selectedEvent.links.map(link => (
                <li key={link}>
                  <a href={link}>{link}</a>
                </li>
              ))}
            </ul>
            <h4>
              POI: {curIndex + 1}/{activeEvents.length}
            </h4>
            {isShownPrev && (
              <Button bsStyle="primary" onClick={this.onClickPrevious}>
                Previous
              </Button>
            )}
            {isShownNext && (
              <Button bsStyle="primary" onClick={this.onClickNext}>
                Next
              </Button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default InfoPanel

*/
