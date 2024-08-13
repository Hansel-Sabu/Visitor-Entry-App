import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [data, changeData] = useState([])
    const fetchData=()=>{
        axios.get("http://172.16.12.153:4000/getvistors").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(
        ()=>{fetchData()},[]
    )
    return (
        <div>
            <Navbar />
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

                                {
                                    data.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{index+1}</th>
                                                <td>{value.firstname}</td>
                                                <td>{value.lastname}</td>
                                                <td>{value.purpose}</td>
                                                <td>{value.whomToMeet}</td>
                                                <td>{value.date}</td>
                                            </tr>
                                        }
                                    )
                                }

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>




        </div>
    )
}

export default ViewAll