import React, { Component } from 'react'
import './Table.css'

export default class Table extends Component {

    render() {
        const table_data = [
            {
                image: "https://i.pinimg.com/originals/a3/7b/e5/a37be5b9709175f1527761157463ec38.jpg",
                email: "markotto@email.com",
                added: "01/03/2020",
                username: "Markotto89",
                status: "Active"
            },
            {
                image: "https://passport.immigration.gov.mv/images/PPS/sample.png",
                email: "jacobthornton@email.com",
                added: "01/03/2020",
                username: "Jacobthornton",
                status: "Waiting for Reassignment"
            },
            {
                image: "https://static.vecteezy.com/system/resources/thumbnails/036/553/207/small_2x/as-on-passport-young-man-with-stylish-haircut-glasses-blue-eyes-look-straight-little-smiling-and-self-collected-dressed-in-white-shirt-and-blue-tie-unshaven-over-white-background-photo.jpg",
                email: "larrybird@email.com",
                added: "01/03/2020",
                username: "Larry_bird",
                status: "pending"
            },
            {
                image: "https://t4.ftcdn.net/jpg/03/78/43/25/360_F_378432516_6IlKiCLDAqSCGcfc6o8VqWhND51XqfFm.jpg",
                email: "johndoe@email.com",
                added: "01/03/2020",
                username: "Johndoe1990",
                status: "Active"
            },
            {
                image: "https://media.istockphoto.com/id/1176772006/photo/portrait-of-man-looking-at-camera-over-white-background.jpg?s=612x612&w=0&k=20&c=hhlfr_8TgalVqSMprxcXHKhCnqixB3sxKDUXnr7IfT8=",
                email: "garybird@email.com",
                added: "01/03/2020",
                username: "Garybird_2020",
                status: "Waiting for Reassignment"
            }
        ];

        return (
            <>
                <section className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 text-center mb-5">
                                <h2 className="heading-section">Customer Data</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="table-wrap">
                                    <table className="table table-responsive-xl">
                                        <thead>
                                            <tr>
                                                <th>&nbsp;</th>
                                                <th>Email</th>
                                                <th>Username</th>
                                                <th>Status</th>
                                                <th>&nbsp;</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {table_data.map((item) => {
                                                // console.log(item)
                                                return (
                                                    <tr className="alert" role="alert">
                                                        <td>
                                                            <label className="checkbox-wrap checkbox-primary">
                                                                <input type="checkbox" defaultChecked />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </td>
                                                        <td className="d-flex align-items-center">
                                                            <div className="img" style={{ backgroundImage: `url(${item.image})` }} />
                                                            <div className="pl-3 email gap-3 d-flex">
                                                                <span>{item.email}</span>
                                                                <span>Added: {item.added}</span>
                                                            </div>
                                                        </td>
                                                        <td>{item.username}</td>
                                                        <td className="status">
                                                            {
                                                                (item.status == "Active") ? <span className="active">{item.status}</span> : <span className="waiting">{item.status}</span>
                                                            }</td>
                                                        <td>
                                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                                <span aria-hidden="true"><i className="fa fa-close" /></span>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
