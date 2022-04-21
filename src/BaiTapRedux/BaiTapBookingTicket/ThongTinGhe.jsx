import React, { Component } from 'react'

export default class ThongTinGhe extends Component {
    render() {
        return (
            <div>
                <div className='mt-5'>
                    <button className='gheDuocChon'></button><span className='text-light' style={{ fontSize: '30px' }}>Ghế đã đặt</span>
                    <br />
                    <button className='gheDangChon'></button><span className='text-light' style={{ fontSize: '30px' }}>Ghế đang đặt</span>
                    <br />
                    <button className='ghe' style={{ marginLeft: 0 }}></button><span className='text-light' style={{ fontSize: '30px' }}>Ghế chưa đặt</span>
                </div>
                <div className='mt-5'>
                    <table className="table" border="2">
                        <thead>
                            <tr className='text-light' style={{fontSize:'25px'}}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Hủy</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}
