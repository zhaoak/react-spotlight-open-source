import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Annual Quarts of Ice Cream Consumed vs Annual Deaths Due to Penguin-Related Incidents',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
  labels,
  datasets: [
    {
      label: 'Ice Cream Quarts Consumed (millions)',
      data: [5, 4, 8, 9, 12, 20, 40],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Penguin-Related Deaths (hundreds)',
      data: [0.4, 1.2, 4, 5.3, 12, 46, 76],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table" className="button">
          Table
        </Link>
        <Link to="/charts" className="button">
          Charts
        </Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Table Libary</h1>
        </Route>
        <Route path="/charts">
          <h1 className="title is-1">LOOK AT THIS!!</h1>
          <Line options={options} data={data} />
          <h3 className="subtitle is-3">Believe the data!</h3>
          <h1 className="title is-1">THEY ARE TAKING US FOR ABSOLUTE FOOLS</h1>
        </Route>
        <Route path="/">
          <section className="columns">
            <div className="message is-danger column is-half is-offset-one-quarter">
              Please choose either Table or Charts.
              <p className="message-body is-danger">Then you&#39;ll see the TRUTH!</p>
            </div>
          </section>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
