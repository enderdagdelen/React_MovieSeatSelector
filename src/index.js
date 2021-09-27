import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import reportWebVitals from './reportWebVitals';


class MovieSeatSelector extends React.Component {

  constructor(props){
    super(props);
    this.state={
      selected:false,
      numberOfSelectedSeats:0,
      selectedSeats:[],
      numberOfOccupiedSeats:'',
      occupiedSeats:[],
      ticketPrice:10,
      movieIndex:'0',
      cost:0
    }
  }
  


  componentDidMount(){
    const selectedseats = JSON.parse(localStorage.getItem('selectedseats'))
    const occupiedseats = JSON.parse(localStorage.getItem('occupiedseats'))
    const movieindex = JSON.parse(localStorage.getItem('movieindex'))
    
    if(selectedseats!==null){
      this.setState(()=>{
        return{
          selectedSeats:selectedseats
        }
      })
    }

    if(occupiedseats!==null){
      this.setState(()=>{
        return{
          occupiedSeats:occupiedseats
        }
      })
    }
    if(movieindex!==null){
      this.setState(()=>{
        return{
          movieIndex:movieindex
        }
      })
    }

    setTimeout(()=>{this.setState(()=>{
      return{
        numberOfOccupiedSeats:this.state.occupiedSeats.length,
        numberOfSelectedSeats:this.state.selectedSeats.length,
      }
    })},50)
    
    setTimeout(()=>{this.setSeats()},100)
    setTimeout(()=>{this.calcCost()},110)

  }

  calcCost(){
    this.setState(()=>{
      return{
        cost:this.state.numberOfSelectedSeats*this.state.ticketPrice
      }
    })
  }

  setSeats(){
    this.state.selectedSeats.forEach((seatId)=>{
      document.querySelectorAll('#rows .row .seat').forEach((div)=>{
        if(seatId === div.id){
          div.classList.add('selected')
        }
      })

    })

    this.state.occupiedSeats.forEach((seatId)=>{
      document.querySelectorAll('#rows .row .seat').forEach((div)=>{
        if(seatId === div.id){
          div.classList.add('occupied')
        }
      })
    })

    
  }

  setLocalStorage = () => {
    
    localStorage.setItem('numberofselectedseats',this.state.numberOfSelectedSeats)

    localStorage.setItem('selectedseats',JSON.stringify(this.state.selectedSeats))

    localStorage.setItem('movieindex',this.state.movieIndex)
  }



  numberOfSeats(){
    this.setState(()=>{
      return{
        numberOfSelectedSeats:this.state.selectedSeats.length
      }
    })
  }


  seatClicked = (e) => {


    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
      e.target.classList.toggle('selected')

      if(this.state.selectedSeats.includes(e.target.id)){
        this.setState(()=>{
          return{
            selectedSeats:this.state.selectedSeats.filter((id)=>{
              return id !== e.target.id
            })
          }
        })
      }else{
        this.setState(()=>{
          return{
  
            selectedSeats:[...this.state.selectedSeats,e.target.id],
          }
        })
      }

    }
    setTimeout(()=>{this.numberOfSeats()},100)
    setTimeout(()=>{this.setLocalStorage()},150)
    setTimeout(()=>{this.calcCost()},160)

  }

  selectMovie = (e) => {

    this.setState(()=>{
      return{
        ticketPrice:e.target.value,
        movieIndex:e.target.selectedIndex
      }
    })

    setTimeout(()=>{this.calcCost()},50)
    setTimeout(()=>{this.setLocalStorage()},100)
  }



  render(){
    
    return(
    <div id="movieSaloon">

      <div id="movieSelector">
        <span>Pick a Movie</span>
        <select onChange={this.selectMovie}>
          <option value="10">Die Hard 5</option>
          <option value="6">Police Academy</option>
          <option value="12">The Hobbit</option>
          <option value="8">Die Another Day</option>
        </select>
      </div>
      <div id="legend">
        <ul>
          <li>
            <div className="seat"></div>
            <small>N/A</small>
          </li>
          <li>
            <div className="seat selected"></div>
            <small>Selected</small>
          </li>
          <li>
            <div className="seat occupied"></div>
            <small>Occupied</small>
          </li>
        </ul>
      </div>
      <div id="summarySection">
        <p id="summary"></p>

      </div>
      <div id="rows" onClick={this.seatClicked}>
        <div id="screen">
        </div>
        <div className="row">
          <div className="seat" id="a1"></div>
          <div className="seat" id="a2"></div>
          <div className="seat" id="a3"></div>
          <div className="seat" id="a4"></div>
          <div className="seat" id="a5"></div>
          <div className="seat" id="a6"></div>
          <div className="seat" id="a7"></div>
          <div className="seat" id="a8"></div>
        </div>
        <div className="row">
          <div className="seat" id="b1"></div>
          <div className="seat" id="b2"></div>
          <div className="seat" id="b3"></div>
          <div className="seat" id="b4"></div>
          <div className="seat" id="b5"></div>
          <div className="seat" id="b6"></div>
          <div className="seat" id="b7"></div>
          <div className="seat" id="b8"></div>
        </div>

        <div className="row">
          <div className="seat"  id="c1"></div>
          <div className="seat" id="c2"></div>
          <div className="seat" id="c3"></div>
          <div className="seat" id="c4"></div>
          <div className="seat" id="c5"></div>
          <div className="seat" id="c6"></div>
          <div className="seat" id="c7"></div>
          <div className="seat" id="c8"></div>
        </div>

        <div className="row">
          <div className="seat" id="d1"></div>
          <div className="seat" id="d2"></div>
          <div className="seat" id="d3"></div>
          <div className="seat" id="d4"></div>
          <div className="seat" id="d5"></div>
          <div className="seat" id="d6"></div>
          <div className="seat" id="d7"></div>
          <div className="seat" id="d8"></div>
        </div>

        <div className="row">
          <div className="seat" id="e1"></div>
          <div className="seat" id="e2"></div>
          <div className="seat" id="e3"></div>
          <div className="seat" id="e4"></div>
          <div className="seat" id="e5"></div>
          <div className="seat" id="e6"></div>
          <div className="seat" id="e7"></div>
          <div className="seat" id="e8"></div>
        </div>

        <div className="row" >
          <div className="seat" id="f1"></div>
          <div className="seat" id="f2"></div>
          <div className="seat" id="f3"></div>
          <div className="seat" id="f4"></div>
          <div className="seat" id="f5"></div>
          <div className="seat" id="f6"></div>
          <div className="seat" id="f7"></div>
          <div className="seat" id="f8"></div>
        </div>
      </div>
      
    <div id="reciept">
      <p>You have selected {this.state.numberOfSelectedSeats} seats and cost is {this.state.cost}</p>
    </div>
    </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <MovieSeatSelector/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
