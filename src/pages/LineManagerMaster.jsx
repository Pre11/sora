import React from 'react'

function LineManagerMaster() {
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
                            <li  className="Ul_li--hover"><a href="dashboard.html"><i
                                         className="i-Bar-Chart text-20 mr-2 text-light"></i><span
                                         className="item-name text-15 text-light">Dashboard</span></a>
                            </li>
                            
                            <li  className="Ul_li--hover"><a  className="has-arrow" href="#"><i
                                         className="i-Library text-20 mr-2 text-light"></i><span
                                         className="item-name text-15 text-light">Safety Observation(PIOs) /
                                        Audits</span></a>
                                <ul  className="mm-collapse">
                                    <li  className="item-name"><a href="safety-observation.html"><i
                                                 className="nav-icon i-Letter-Open text-light"></i><span
                                                 className="item-name text-light">Safety Observation (PIOs)</span></a></li>
                                    <li  className="item-name"><a href="line-walk-audit.html"><i
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

                            <li  className="Ul_li--hover"><a href="my-raised-observ.html"><i
                                         className="i-File-Clipboard-File--Text text-20 mr-2 text-light"></i><span
                                         className="item-name text-15 text-light">My Raised Observation</span></a>
                            </li>

                            <li  className="Ul_li--hover"><a  className="has-arrow active" href="#"><i
                                         className="i-Administrator text-20 mr-2 text-light"></i><span
                                         className="item-name text-15 text-light">Admin</span></a>
                                <ul  className="mm-collapse">
                                    <li  className="item-name"><a href="line-manager-master.html"><i
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
            {/* <!--  side-nav-close --> */}
            {/* <!-- <div  className="text-white mx-2" style="position: absolute; bottom: 0;">
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
                    <h1  className="mr-2">Line Manager Master</h1>
                </div>
                <div  className="separator-breadcrumb border-top"></div>

                <div  className="row mt-2">
                    <div  className="col-md-12">
                        <div  className="card text-left">                            
                            <div  className="card-body">
                                <form action="" method="">
                                    <div  className="row">
                                        <div  className="col-md-3 form-group mb-3">
                                            <label for="deptName">Department Name</label>
                                            <select  className="form-select" id="deptName" name="deptName">
                                                <option value="">Choose Department</option>
                                                <option value="214">Administration</option>
                                                <option value="53">Angul-Information Technology</option>
                                                <option value="54">Asset Management</option>
                                                <option value="90">Aviation</option>
                                                <option value="74">Bar Mill</option>
                                                <option value="75">Blast Furnace</option>
                                                <option value="220">Blast Furnace Project</option>
                                                <option value="219">Caster Project</option>
                                                <option value="211">CDQ Project</option>
                                                <option value="55">Central Civil &amp; Structural Maint. Dept.</option>
                                                <option value="56">Central Crane Maintenance</option>
                                                <option value="209">CENTRAL ELECTRICAL</option>
                                                <option value="57">Central HVAC &amp; AC</option>
                                                <option value="58">Central Maintenance Department</option>
                                                <option value="59">Central Raw Material Handling System</option>
                                                <option value="60">Central Refractory</option>
                                                <option value="202">CHP</option>
                                                <option value="63">Civil - Infra</option>
                                                <option value="61">Coal gasification plant</option>
                                                <option value="64">Coal Washery</option>
                                                <option value="76">Coke Oven and By Product Plant</option>
                                                <option value="89">COMMERCIAL,FINANCE &amp; ACCOUNTS</option>
                                                <option value="91">CONTRACT CELL</option>
                                                <option value="65">Cross Country Pipe Line</option>
                                                <option value="92">CSR</option>
                                                <option value="66">DRI</option>
                                                <option value="201">ED Secreteriate</option>
                                                <option value="68">Environment Management Dept.</option>
                                                <option value="93">HR &amp; Employee Services</option>
                                                <option value="206">HSM Project</option>
                                                <option value="69">Industrial Engineering</option>
                                                <option value="94">Internal Audit</option>
                                                <option value="95">Liaison &amp; Public Relation</option>
                                                <option value="70">Lime &amp; Dolomite (O &amp; M)</option>
                                                <option value="71">Logistics</option>
                                                <option value="72">Management Assurance and Audit System</option>
                                                <option value="96">Medical Department</option>
                                                <option value="73">Oxygen Plant</option>
                                                <option value="215">Oxygen Plant Project</option>
                                                <option value="207">Pellet Plant</option>
                                                <option value="81">Plate Mill - O&amp;M</option>
                                                <option value="82">Power Plant</option>
                                                <option value="97">Production Planning &amp; Control</option>
                                                <option value="98">Purchase</option>
                                                <option value="83">Railway Siding</option>
                                                <option value="20286">RMHS Project</option>
                                                <option value="84">Safety </option>
                                                <option value="78">Sinter Plant</option>
                                                <option value="79">Slurry Pipeline</option>
                                                <option value="85">Steel Melting Shop -  O&amp;M</option>
                                                <option value="86">Stores</option>
                                                <option value="87">Structural Steel Division</option>
                                                <option value="88">Technical Services Department</option>
                                                <option value="203">Township</option>
                                                <option value="99">TQM</option>
                                                <option value="80">Utility</option>
                                                <option value="199">Utility-Projects</option>
                                                <option value="200">VPSA</option>
                                            </select>
                                            <small  className="form-text text-muted">Select the department of line manager</small>
                                        </div>
                                        <div  className="col-md-3 form-group mb-3">
                                            <label for="LmName">LM Name</label>
                                            <input  className="form-control" id="LmName" name="LmName" type="text" placeholder="LM Name"/>
                                        </div>
                                        <div  className="col-md-3 form-group mb-3">
                                            <label for="Designation">Designation</label>
                                            <select  className="form-select" id="Designation" name="Designation" required>
                                                <option value="">SELECT</option>
                                                <option value="1">Executive Director</option>
                                                <option value="2">President</option>
                                                <option value="3">Exec Vice President</option>
                                                <option value="4">Vice President</option>
                                                <option value="5">Asso Vice President</option>
                                                <option value="6">General Manager</option>
                                                <option value="7">Dy General Manager</option>
                                                <option value="8">Asst Gen Manager</option>
                                                <option value="9">Manager</option>
                                                <option value="10">Deputy Manager</option>
                                                <option value="11">Assistant Manager</option>
                                                <option value="12">Engineer</option>
                                                <option value="13">Assistant Engineer</option>
                                                <option value="14">Junior Engineer</option>
                                                <option value="15">Asst Foreman</option>
                                                <option value="16">Junior Foreman</option>
                                            </select>
                                            <small  className="form-text text-muted">Select the designation of line manager</small>
                                        </div>

                                        <div  className="col-md-3 form-group mb-3">
                                            <label for="LmEmail">LM Email ID</label>
                                            <input  className="form-control" type="email" name="LmEmail" placeholder="LM Email ID" required/>
                                        </div>
                                        
                                        <div  className="col-md-3 form-group mb-3">
                                            <label for="SectionID">Section Name</label>                                            
                                            <select  className="form-select" id="SectionID" name="SectionID" required="">
                                                <option value="">Choose Section</option>
                                                <option value="1">Operation</option>
                                                <option value="2">Mechanical</option>
                                                <option value="3">Electrical</option>
                                                <option value="4">Instrumentation</option>
                                                <option value="5">E &amp; I</option>
                                                <option value="6">MHS</option>
                                                <option value="7">O &amp; M</option>
                                                <option value="8">AHP,PB Operation &amp; DM</option>
                                                <option value="9">BPP</option>
                                                <option value="10">Civil</option>
                                                <option value="12">Project</option>
                                                <option value="13">Logistics</option>
                                                <option value="14">Utility</option>
                                                <option value="15">Quality</option>
                                                <option value="16">TSD- SMS</option>
                                                <option value="17">TSD- BF, DRI1,2, Sinter,Cockoven</option>
                                                <option value="18">TSD- Rail Mill</option>
                                                <option value="19">TSD- Plate Mill</option>
                                                <option value="20">TSD- BSM</option>
                                                <option value="21">TSD- TQM</option>
                                                <option value="22">EPS-PP1</option>
                                                <option value="23">EPS-PP2</option>
                                                <option value="24">EPS-PP2PH3, MRSS3</option>
                                                <option value="25">EPS-PP3</option>
                                                <option value="26">EPS-IRON</option>
                                                <option value="27">EPS-STEEL</option>
                                                <option value="28">EPS-ETL-T</option>
                                                <option value="29">EPS-ETL-C</option>
                                                <option value="30">EPS-SCADA</option>
                                                <option value="31">EPS-TRLINE</option>
                                                <option value="32">EPS-MRSS1</option>
                                                <option value="33">EPS-BALPUR PUMP HOUSE</option>
                                                <option value="34">EPS-MRSS2</option>
                                                <option value="35">EPS-MRSS4</option>
                                                <option value="36">EPS-TELEPHONE EXCHANGE</option>
                                                <option value="37">EPS-GENERAL ELECTRICAL</option>
                                                <option value="38">EPS-ERS</option>
                                            </select>
                                            <small  className="form-text text-muted">Select the Section of line manager</small>
                                        </div>
            
                                        <div  className="col-md-3 form-group mb-3">
                                            <label for="SectionHead">Is Section Head</label>
                                            <select  className="form-select" id="SectionHead" name="SectionHead" required="">
                                                <option value="0">No</option>
                                                <option value="1">Yes</option>
                                            </select>
                                        </div>
            
                                        <div  className="col-md-3 form-group mb-3">
                                            <label for="SecondarySectionHead">Is Secondary Section Head</label>
                                            <select  className="form-select" id="SecondarySectionHead" name="SecondarySectionHead" required="">
                                                <option value="0">No</option>
                                                <option value="1">Yes</option>
                                            </select>
                                        </div>
            
                                        <div  className="col-md-3 form-group mb-3">
                                            <label for="ccEmail">CC Email Ids</label>
                                            <textarea  className="form-control" id="ccEmail" rows="1" type="text" name="ccEmail" placeholder="Enter Email Ids separated by commas(,)"></textarea>
                                            <label for="ccUpdate">Update CC Email Ids For All LMs In This Department</label>
                                            <div  className="ul-form__radio-inline mt-2">
                                                <label  className="ul-radio__position radio radio-primary form-check-inline">
                                                    <input type="radio" name="ccradio" value="0"/><span  className="ul-form__radio-font">Yes</span><span  className="checkmark"></span>
                                                </label>
                                                <label  className="ul-radio__position radio radio-primary">
                                                    <input type="radio" name="ccradio" value="0"/><span  className="ul-form__radio-font">No</span><span  className="checkmark"></span>
                                                </label>                                                
                                            </div>
                                        </div>
            
                                        <div  className="col-md-12">
                                            <button type="button"  className="btn btn-secondary">Cancel</button>
                                            <button type="button"  className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div  className="row mt-2">
                    <div  className="col-md-12">
                        <div  className="card text-left">                            
                            <div  className="card-body">
                                <div  className="row mb-2">
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
                                <div  className="table-responsive">
                                    <table  className="display table table-bordered" id="deafult_ordering_table" style={{width:"100%"}}>
                                        <thead>
                                            <tr>
                                                <th>S. No.</th>
                                                <th>LM Name</th>
                                                <th>Designation</th>
                                                <th>LM Email</th>
                                                <th>Section</th>
                                                <th>Section Head</th>
                                                <th>Secondary Section Head</th>
                                                <th>Admin Enabled</th>
                                                <th>HOD Enabled</th>
                                                <th>Status</th>
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

export default LineManagerMaster
