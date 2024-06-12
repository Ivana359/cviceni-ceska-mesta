import { render } from '@czechitas/render';
import { cities } from '../cz-cities.js'
import { City } from '../components/city/city';
import '../global.css';
import './index.css';

document.querySelector('#root').innerHTML = render(
  <div className="container">
    {cities.map(city => <City key={city.name} name={city.name} population={city.population} area={city.area} district={city.district} photo={city.photo} />)}
  </div>
);