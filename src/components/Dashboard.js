import React from 'react';



export const Dashboard = () => {


    return (
        <div className="grid">
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-5">
                        <div>
                            <span className="block text-500 font-medium mb-3">Active Students</span>
                            <div className="text-900 font-medium text-xl">68</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '3rem', height: '3rem' }}>
                            <img className='stu' src='assets/layout/images/student.png' alt="logo" />

                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-5   ">
                        <div>
                            <span className="block text-500 font-medium mb-3">Unactive Students</span>
                            <div className="text-900 font-medium text-xl">15</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '3rem', height: '3rem' }}>

                            <img className='stu' src='assets/layout/images/vv.png' alt="logo" />

                        </div>
                    </div>

                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Present Student</span>
                            <div className="text-900 font-medium text-xl">65</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '3rem', height: '3rem' }}>

                            <img className='stu' src='assets/layout/images/attendance.png' alt="logo" />

                        </div>
                    </div>
                    <span className="text-green-500 font-medium">This Timezone</span>
                    <span className="text-500"></span>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">On Leave Students</span>
                            <div className="text-900 font-medium text-xl">10</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '3rem', height: '3rem' }}>

                            <img className='stu' src='assets/layout/images/exit.png' alt="logo" />

                        </div>
                    </div>
                    <span className="text-green-500 font-medium">Today </span>

                </div>
            </div>

        </div>
    );
}
