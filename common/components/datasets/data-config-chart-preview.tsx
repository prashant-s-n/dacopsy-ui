"use client";
import { CategoryScale, Chart, Legend, LineElement, LinearScale, PointElement, Title, Tooltip, elements } from 'chart.js'
import {
    Bar, Line,
} from 'react-chartjs-2'

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


export default function DataSetChartPreview() {


    const mean = 0;
    const stdDev = 1;
    const size = 100;

    // Generate x values from -3 to 3
    const xValues = Array.from({ length: size }, (_, i) => (i - size / 2) / (size / 6));

    // Calculate corresponding y values for the bell curve
    const yValues = xValues.map(x => (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * ((x - mean) / stdDev) ** 2));

    const data = {
        labels: xValues,
        datasets: [
            {
                label: 'Bell Curve',
                data: yValues,
                borderColor: '#509bff',
                fill: true,

            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false
            }
        },
        elements: {
            line: {
                tension: 0,
                borderWidth: 4,
                fill: 'start',
                backgroundColor: '#509bff'
            },
            point: {
                radius: 0,
                hitRadius: 0,
            }
        },
        scales: {
            x: {
                display: false
            },
            y: {
                display: true
            }
        }

    };

    return (
        <div className='flex min-w-full min-h-full p-4 rounded-md border items-center'>
            <Line data={data} options={options} />
        </div>
    )
}