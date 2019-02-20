export default class Pod {
  constructor(data) {
    this.id = data.id
    this.cameraname = data.cameraname || data.camera.full_name
    this.img = data.img || data.img_src
    this.date = data.date || data.earth_date
    this.sol = data.sol
  }
  getTemplate() {
    return `
    <div class="col-12 col-md-4">
      <div class="card my-2">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5>Earth Date: ${this.date}</h5>
          <h5>Mars Sol: ${this.sol}</h5>
          <p class="card-text">Camera: ${this.cameraname}</p>
        </div>
      </div>
    </div>
    `
  }
}