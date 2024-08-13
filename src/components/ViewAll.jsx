import React from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">Slno</th>
                                    <th scope="col">First name</th>
                                    <th scope="col">Last name</th>
                                    <th scope="col">Purpose</th>
                                    <th scope="col">Whom to meet</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Visit</td>
                                    <td>Principal</td>
                                    <td>21-8-2024</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>Internship</td>
                                    <td>CS Deepartment HOD</td>
                                    <td>13-8-2024</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Hansel</td>
                                    <td>Sabu</td>
                                    <td>Internship</td>
                                    <td>HOD</td>
                                    <td>13-8-2024</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>




        </div>
    )
}

export default ViewAll