import NasaService from "./nasaService.js";

//private
let _ns = new NasaService()

function drawPhotos() {
  let template = ''
  let photo = _ns.PodList
  photo.forEach(p => {
    template += p.getTemplate()
  })
  document.getElementById('pic-list').innerHTML = template
}

//public
export default class NasaController {
  constructor() {
    _ns.addSubscriber('podlist', drawPhotos)
    _ns.getNasaData()
  }
  editDate(event) {
    event.preventDefault();
    let form = event.target
    let data = form.date.value
    _ns.editDate(data)
  }
}