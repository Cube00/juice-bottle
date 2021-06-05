//bottle images
import Image1 from '../assets/images/bottle1.png'
import Image2 from '../assets/images/bottle2.png'
import Image3 from '../assets/images/bottle3.png'
//fruit images
import Fruit1 from '../assets/images/fruit/peach.png'
import Fruit2 from '../assets/images/fruit/peach2.png'
import Fruit3 from '../assets/images/fruit/green-apple.png'
import Fruit4 from '../assets/images/fruit/green-apple2.png'
import Fruit5 from '../assets/images/fruit/cherry2.png'
import Fruit6 from '../assets/images/fruit/cherry1.png'


export const data = [
  {
    name: 'PEACH',
    img: Image1,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever`,
    slogan: 'A day without juice is like a day without sunshine',
    id: 1,
    background: 'yellow',
    price: '50.50$',
    fruit: {
      img1: Fruit1,
      img2: Fruit2
    }
  },
  {
    name: 'APPLE',
    img: Image2,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever`,
    slogan: 'A day without juice is like a day without sunshine',
    id: 2,
    background: 'green',
    price: '50.50$',
    fruit: {
      img1: Fruit3,
      img2: Fruit4
    }
  },
  {
    name: 'CHERRY',
    img: Image3,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever`,
    slogan: 'A day without juice is like a day without sunshine',
    id: 3,
    background: 'red',
    price: '50.50$',
    fruit: {
      img1: Fruit5,
      img2: Fruit6
    }
  }
]
