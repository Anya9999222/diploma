import { useSelector } from "react-redux";

export function formatDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    var yy = date.getFullYear();
  
    return dd + '.' + mm + '.' + yy;
  }


  export function formatUrl (state) {
    
    const opts = {
      price_from: state.prices.min,
      price_to: state.prices.max,
      start_departure_hour_from: state.time.to.departure.min,
      start_departure_hour_to: state.time.to.departure.max,
      start_arrival_hour_to: state.time.to.arrival.max,
      start_arrival_hour_from: state.time.to.arrival.min,
      end_departure_hour_from:  state.time.from.departure.min,
      end_departure_hour_to: state.time.from.departure.max,
      end_arrival_hour_from:  state.time.from.arrival.min,
      end_arrival_hour_to:  state.time.from.arrival.max,
}

    
   state.options.firstClass === true ? opts.have_first_class = true : ''
    state.options.secondClass === true ? opts.have_second_class = true : ''
    state.options.thirdClass === true ? opts.have_third_class = true : ''
    state.options.fourthClass === true ? opts.have_fourth_class = true : ''
    state.options.wifi === true ? opts.have_wifi = true : ''
    state.options.express === true ? opts.have_express = true : ''
    const params = new URLSearchParams(opts);
    return params
    
  }

  export function sToStr(s) {
    console.log(s)
    let m = Math.trunc(s / 60) + ''
    s = (s % 60) + ''
    let h = Math.trunc(m / 60) + ''
    return {
      hours:  h.padStart(2, 0),
      mins:  m.substring(2, 0)
    }
  }