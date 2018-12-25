import React from 'react';
import { Table } from 'reactstrap';

import TableHeader from '../components/TableHeader.js';
import TableBody from '../components/TableBody.js';
import './Dashboard.scss';

const Dashboard = () => {
    let userData = {};
    return (
        <div>
            <Table hover>
                <thead>
                    <TableHeader />
                </thead>
                <tbody>
                    <TableBody userData={userData}/>
                </tbody>
            </Table>
        </div>
    );
}

export default Dashboard;