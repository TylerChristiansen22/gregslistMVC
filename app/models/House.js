import { generateId } from "../utils/generateId.js"

export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.year = data.year
    this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }

  get houseTemplate() {
    return /*html*/ `
    <section class="row justify-content-center my-3">
      <div class="col-8 bg-dark text-light">
        <div class="row">
          <div class="col-4">
            <img class = "w-100 h-100" src="${this.imgUrl}" alt="String interpolate house image">
          </div>
          <div class="col-8">
            <span>$${this.price}</span>
            <span>${this.bedrooms} Bedrooms</span>
            <span>${this.bathrooms} Bathrooms</span>
            <span>${this.sqft} SqFt</span> <br>
            <span>${this.description}</span>
          </div>
        </div>
      </div>
    </section>`
  }
}