import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', colaboradores: 3 },
    { name: 'Fev', colaboradores: 5 },
    { name: 'Mar', colaboradores: 5 },
    { name: 'Abr', colaboradores: 7 },
    { name: 'Mai', colaboradores: 12 },
    { name: 'Jun', colaboradores: 8 },
    { name: 'Jul', colaboradores: 7 },
    { name: 'Ago', colaboradores: 13 },
    { name: 'Set', colaboradores: 5 },
    { name: 'Out', colaboradores: 5 },
    { name: 'Nov', colaboradores: 6 },
    { name: 'Dez', colaboradores: 8 },
];

const UserCharts = () => (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <div style={{ width: '100%', marginBottom: '50px' }}>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="colaboradores" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
);

export default UserCharts;
