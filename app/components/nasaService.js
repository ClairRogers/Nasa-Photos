import Pod from "../models/pod.js";

//private
let _nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity'
})

let _date = '2015-6-3'
let _key = 'd8beiniKe9FIK7m2rx6gksmLyDnjHNzUrYxILo6a'

let _state = {
  podlist: []
}

let _subscribers = {
  podlist: []
}

function setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())
}


//public
export default class NasaService {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get PodList() {
    return _state.podlist.map(p => new Pod(p))
  }

  getNasaData() {
    _nasaApi(`photos?earth_date=${_date}&api_key=${_key}`)
      .then(res => {
        let data = res.data.photos.map(d => new Pod(d))
        setState('podlist', data)
      })
      .catch(err => {
        console.error(err)
      })
  }
  editDate(data) {
    _date = data
    this.getNasaData()
  }

}