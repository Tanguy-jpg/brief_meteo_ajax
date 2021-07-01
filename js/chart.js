const labels = [
  "Aujourd'hui",
  'Demain',
  'Après-demain',
  'Dans 3 jours',
  'Dans 4 jours',
];
const data = {
  labels: labels,
  datasets: [
    {
    label: 'Matin',
    backgroundColor: 'rgb(94 43 255)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
      label: 'Midi',
      backgroundColor: 'rgb(192 76 253)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
      label: 'Après-midi',
      backgroundColor: 'rgb(252 109 171)',
      borderColor: 'rgb(255, 99, 132)',
      data: [5, 10, 5, 2, 20, 30, 45],
    },
    {
      label: 'Soir',
      backgroundColor: 'rgb(247 246 197)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ]
};

const config = {
  type: 'bar',
  data,
  options: {}
};

var myChart = new Chart(
  document.getElementById('myChart'),
  config
);