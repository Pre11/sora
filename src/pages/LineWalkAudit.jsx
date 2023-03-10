import React from 'react'

function LineWalkAudit() {
  return (
    <div>

<div  className="app-admin-wrap layout-sidebar-vertical sidebar-full">
        <div  className="sidebar-panel">
            <div  className="jindal-brand pr-3 text-center mt-4 mb-4 d-flex justify-content-center align-items-center">
                <a href="/">
                    <img  className="pl-3" src="dist-assets/images/Jindal logo-light.png" alt="alt" />
                </a>
            </div>
            {/* <!--  user --> */}
            <div  className="scroll-nav ps ps--active-y" data-perfect-scrollbar="data-perfect-scrollbar"
                data-suppress-scroll-x="true">
                <div  className="side-nav">
                    <div  className="main-menu">
                        <ul  className="metismenu" id="menu">
                            <li  className="Ul_li--hover"><a href="dashboard. "><i
                                         className="i-Bar-Chart text-20 mr-2 text-light"></i><span
                                         className="item-name text-15 text-light">Dashboard</span></a>
                            </li>
                            
                            <li  className="Ul_li--hover"><a  className="has-arrow active" href="#"><i
                                         className="i-Library text-20 mr-2 text-light"></i><span
                                         className="item-name text-15 text-light">Safety Observation(PIOs) /
                                        Audits</span></a>
                                <ul  className="mm-collapse">
                                    <li  className="item-name"><a href="safety-observation. "><i
                                                 className="nav-icon i-Letter-Open text-light"></i><span
                                                 className="item-name text-light">Safety Observation (PIOs)</span></a></li>
                                    <li  className="item-name"><a href="line-walk-audit. "><i
                                                 className="nav-icon i-File-Clipboard-File--Text text-light"></i><span
                                                 className="item-name text-light">Line Walk (Individual Audit)</span></a>
                                    </li>
                                    <li  className="item-name"><a href="#"><i  className="nav-icon i-Receipt text-light"></i><span
                                                 className="item-name text-light">Cross Functional Team Audit</span></a></li>
                                    <li  className="item-name"><a href="#"><i  className="nav-icon i-Receipt text-light"></i><span
                                                 className="item-name text-light">Group Safety Audit</span></a></li>
                                    <li  className="item-name"><a href="#"><i  className="nav-icon i-Receipt text-light"></i><span
                                                 className="item-name text-light">FRCP Proactive</span></a></li>
                                    <li  className="item-name"><a href="#"><i  className="nav-icon i-Receipt text-light"></i><span
                                                 className="item-name text-light">Internal Audit</span></a></li>
                                    <li  className="item-name"><a href="#"><i  className="nav-icon i-Receipt text-light"></i><span
                                                 className="item-name text-light">External Audit</span></a></li>
                                </ul>
                            </li>

                            <li  className="Ul_li--hover"><a href="#"><i
                                         className="i-File-Clipboard-File--Text text-20 mr-2 text-light"></i><span
                                         className="item-name text-15 text-light">Action To Be Taken <span
                                             className="outline-round-success px-1 py-1">06</span></span></a>
                            </li>

                            <li  className="Ul_li--hover"><a href="my-raised-observ. "><i
                                         className="i-File-Clipboard-File--Text text-20 mr-2 text-light"></i><span
                                         className="item-name text-15 text-light">My Raised Observation</span></a>
                            </li>

                            <li  className="Ul_li--hover"><a  className="has-arrow" href="#"><i
                                         className="i-Administrator text-20 mr-2 text-light"></i><span
                                         className="item-name text-15 text-light">Admin</span></a>
                                <ul  className="mm-collapse">
                                    <li  className="item-name"><a href="line-manager-master. "><i
                                                 className="nav-icon i-File-Clipboard-Text--Image text-light"></i><span
                                                 className="item-name text-light">Line Manager Master</span></a></li>
                                </ul>
                            </li>

                            <li  className="Ul_li--hover"><a  className="has-arrow" href="#"><i
                                         className="i-Double-Tap text-20 mr-2 text-light"></i><span
                                         className="item-name text-15 text-light">Help</span></a>
                                <ul  className="mm-collapse">
                                    <li  className="item-name"><a href=""><i
                                                 className="nav-icon i-Computer-Secure text-light"></i><span
                                                 className="item-name text-light">User Manual</span></a></li>
                                </ul>
                            </li>
                            <li  className="Ul_li--hover">
                                <div  className="text-light text-12 mx-2">
                                    Version 3.0.1
                                    <br />
                                    Released On 15th Dec 2022
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div  className="ps__rail-x" style={{left: "0px ", bottom: "0px"}}>
                    <div  className="ps__thumb-x" tabIndex="0" style={{left: "0px " , width: "0px"}}></div>
                </div>

                
                
                <div  className="ps__rail-x" style={{left: "0px ", bottom: "0px"}}>
                    <div  className="ps__thumb-x" tabIndex="0" style={{left: "0px " , width: "0px"}}></div>
                </div>

                

            </div>
            {/* <!--  side-nav-close -->
            <!-- <div  className="text-white mx-2" style="position: absolute; bottom: 0;">
                Version 3.0.1
                <br />
                Released On 15th Dec 2022
            </div> --> */}
        </div>
        <div  className="switch-overlay"></div>
        <div  className="main-content-wrap mobile-menu-content bg-off-white m-0">
            <header  className="main-header bg-white d-flex justify-content-between p-2">
                <div  className="header-toggle">
                    <div  className="menu-toggle mobile-menu-icon">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <p  className="mr-3 mb-0"><i  className="fas fa-map-location-dot text-20 cursor-pointer" data-toggle="tooltip"
                            data-placement="top" title="" data-original-title="Location"></i>
                        &nbsp;<strong>Location:</strong> Angul</p>
                    <p  className="mr-3 mb-0"><i  className="fas fa-building-user text-20 cursor-pointer" data-toggle="tooltip"
                            data-placement="top" title="" data-original-title="Department"></i>
                        &nbsp;<strong>Department:</strong> Angul IT</p>
                    <p  className="mr-3 mb-0"><i  className="fas fa-user-plus text-20 cursor-pointer" data-toggle="tooltip"
                            data-placement="top" title="" data-original-title="Logged In As"></i> &nbsp;<strong>Logged
                            In As:</strong> Suraj Kumar Dash</p>
                    <p  className="mr-3 mb-0"><i  className="fas fa-user-group text-20 cursor-pointer" data-toggle="tooltip"
                            data-placement="top" title="" data-original-title="User Category"></i> &nbsp;<strong>User
                            Category:</strong> LM</p>
                </div>
                <div  className="header-part-right">
                    {/* <!-- Full screen toggle--> */}
                    <i  className="i-Full-Screen header-icon d-none d-sm-inline-block" data-fullscreen=""></i>
                    {/* <!-- Grid menu Dropdown--> */}
                    <div  className="dropdown dropleft">
                        <img  className="header-icon" src="dist-assets/images/profile.png" id="dropdownMenuButton"
                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />

                        <div  className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div  className="menu-icon-grid">
                                <a href="#"><i  className="fas fa-arrow-right-from-bracket"></i> Logout</a>
                                <a href="#"><i  className="i-Checked-User"></i> Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- ============ Body content start ============= --> */}
            <div  className="main-content pt-4">
                <div  className="breadcrumb">
                    <h1  className="mr-2">Line Walk (Individual Audit)</h1>
                </div>
                <div  className="separator-breadcrumb border-top"></div>

                <div  className="row mb-4">
                    <div  className="col-md-12 mb-4">
                        <div  className="card text-left">
                            <div  className="card-body">
                                <ul  className="nav nav-tabs" id="myIconTab" role="tablist">
                                    <li  className="nav-item">
                                        <a  className="nav-link active" id="pending-icon-tab" data-toggle="tab" href="#pending" role="tab" aria-controls="pending" aria-selected="true"><i  className="nav-icon i-Library mr-1"></i> Pending Audits</a>
                                    </li>
                                    <li  className="nav-item">
                                        <a  className="nav-link" id="resolved-icon-tab" data-toggle="tab" href="#resolved" role="tab" aria-controls="resolved" aria-selected="false"><i  className="nav-icon i-Library mr-1"></i> Finished Audits</a>
                                    </li>
                                </ul>
                                <div  className="tab-content" id="myIconTabContent">
                                    <div  className="tab-pane fade show active" id="pending" role="tabpanel"
                                        aria-labelledby="pending-icon-tab">
                                        <div  className="row">
                                            <div  className="col-md-8 col-sm-12">
                                                <div>
                                                    <button  className="btn btn-info m-1" type="button">Copy</button>
                                                    <button  className="btn btn-info m-1" type="button">CSV</button>
                                                    <button  className="btn btn-info m-1" type="button">Excel</button>
                                                    <button  className="btn btn-info m-1" type="button">PDF</button>
                                                    <button  className="btn btn-info m-1" type="button">Print</button>                                                    
                                                </div>
                                            </div>
                                            <div  className="col-md-4 col-sm-12 pr-4">
                                                <input type="text"  className="form-control m-1" name="daterange" value="" placeholder="Select date range"/>
                                            </div>
                                        </div>
                                        <div  className="row mt-2">
                                            <div  className="col-md-12">
                                                <div  className="card text-left">
                                                    <div  className="card-body">
                                                        <div  className="table-responsive">
                                                            <table  className="display table table-bordered" id="deafult_ordering_table" style={{width:"100%"}}>
                                                                <thead>
                                                                    <tr>
                                                                        <th>S. No.</th>
                                                                        <th>Audit Date & Time</th>
                                                                        <th>Min. observations To Be Report</th>
                                                                        <th>No. Of observations Reported</th>
                                                                        <th>Audit By</th>
                                                                        <th>Added On</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>                                                                        
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="tab-pane fade" id="resolved" role="tabpanel"
                                        aria-labelledby="resolved-icon-tab">
                                        <div  className="row">
                                            <div  className="col-md-8 col-sm-12">
                                                <div>
                                                    <button  className="btn btn-info m-1" type="button">Copy</button>
                                                    <button  className="btn btn-info m-1" type="button">CSV</button>
                                                    <button  className="btn btn-info m-1" type="button">Excel</button>
                                                    <button  className="btn btn-info m-1" type="button">PDF</button>
                                                    <button  className="btn btn-info m-1" type="button">Print</button>                                                    
                                                </div>
                                            </div>
                                            <div  className="col-md-4 col-sm-12 pr-4">
                                                <input type="text"  className="form-control m-1" name="daterange" value="" placeholder="Select date range"/>
                                            </div>
                                        </div>
                                        <div  className="row mt-2">
                                            <div  className="col-md-12">
                                                <div  className="card text-left">
                                                    <div  className="card-body">
                                                        <div  className="table-responsive">
                                                            <table  className="display table table-bordered" id="zero_configuration_table" style={{width:"100%"}}>
                                                                <thead>
                                                                    <tr>
                                                                        <th>S. No.</th>
                                                                        <th>Audit Date & Time</th>
                                                                        <th>No. Of observations Reported</th>
                                                                        <th>Audit By</th>
                                                                        <th>Added On</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>                                                                      
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-----------New Audit Start------------>   */}
                <div id="app"  className="container py-0">
                    <div>
                        <button type="button"  className="btn btn-info btn-sm safety" data-toggle="modal" data-target="#reportSafetyObservation"><i  className="fas fa-file-lines mr-2"></i> New Audit</button>
                    </div>
                    <div  className="py-0">
                        <div  className="modal" id="reportSafetyObservation">
                            <div  className="modal-dialog modal-lg">
                                <div  className="modal-content">
                                    <div  className="modal-header">
                                        <h5  className="modal-title">New Audit</h5>
                                        <button type="button"  className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">??</span>
                                        </button>
                                    </div>
                                    <div  className="modal-body">
                                        <form action="" method="post">
                                            <div  className="row">
                                                <div  className="col-md-6 form-group mb-3">
                                                    <label for="auditDT">Audit Date & Time</label>
                                                    <input  className="form-control" id="auditDT" type="datetime-local" name="auditDT" placeholder="Audit Date & Time"/>
                                                </div>
                                                <div  className="col-md-6 form-group mb-3">
                                                    <label for="observation">No. Of Observations</label>
                                                    <input  className="form-control" id="observation" name="observation" type="number" placeholder="No. Of Observations" required/>
                                                    <small  className="form-text text-muted">Put the no of observation for audit report that you have.</small>
                                                </div>

                                                <div  className="col-md-12">
                                                    <button type="button"  className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button"  className="btn btn-primary">Save Audit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    {/* <!-----------------Report Safety Observation End--------------> */}

            </div>
            <div  className="sidebar-overlay open"></div>
            {/* <!-- Footer Start --> */}
            <div  className="flex-grow-1"></div>
            <div  className="app-footer">
                <div  className="footer-bottom d-flex justify-content-center align-items-center">
                    <div  className="align-items-center">
                        <div>
                            <p  className="m-0">&copy;
                                <script>
                                    document.write(new Date().getFullYear())
                                </script> Jindal Steel & Power | All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- fotter end --> */}
        </div>
    </div>
      
    </div>
  )
}

export default LineWalkAudit
