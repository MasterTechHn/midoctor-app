export interface Doctor {
  name: String,
  lastname: String,
  email: String,
  password: String,
  phone: Number,
  sex: Boolean,
  address: {
    country: String,
    city: String,
    street: String
  },
  speciality: String,
  experience: String
}