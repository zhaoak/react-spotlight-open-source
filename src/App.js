import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';

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

// rsuite-table table/data setup and configuration
const tableData = [
  { id: 1, name: 'Tux', product: 'Linux' },
  { id: 2, name: 'Bud Ice Penguin', product: 'Bud Ice Beer' },
  { id: 3, name: 'K.C. Penguin', product: 'Kid Cuisine' },
  { id: 4, name: 'Iceburgh', product: 'Pittsburgh Penguins (hockey team)' },
  { id: 5, name: 'The Amigos', product: 'Happy Feet (movie)' },
  { id: 6, name: 'Cody Maverick', product: "Surf's Up (movie)" },
  { id: 7, name: 'PenPen', product: 'Neon Genesis Evangelion (TV show)' },
];

// chartjs chart/data configuration
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
          <h1 className="title is-1 is-warning">Interesting...Very Interesting!!</h1>
          <Table data={tableData} bordered cellBordered height={500} width={700}>
            <Column width={50} fixed align="center">
              <HeaderCell>ID</HeaderCell>
              <Cell dataKey="id" />
            </Column>

            <Column width={300} align="center">
              <HeaderCell>Name</HeaderCell>
              <Cell dataKey="name" />
            </Column>

            <Column width={400} align="center">
              <HeaderCell>Product</HeaderCell>
              <Cell dataKey="product" />
            </Column>
          </Table>
          <h1 className="title is-3 is-danger">Do you see the connection yet?!</h1>
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
