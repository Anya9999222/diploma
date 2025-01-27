import { useSelector } from "react-redux";

export function formatDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    var yy = date.getFullYear();
  
    return dd + '.' + mm + '.' + yy;
  }


  export function formatUrl () {
    let result = {
      
    };
    
    const state = useSelector(state => state.route);
    const options = useSelector(state => state.sidebarSelect)
    
    state.opts = 'djkdjk'
    console.log(state)
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