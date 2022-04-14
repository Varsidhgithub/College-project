import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Route, useLocation } from 'react-router-dom';
import { AppTopbar } from './AppTopbar';
import { AppFooter } from './AppFooter';
import { AppMenu } from './AppMenu';
import { AppConfig } from './AppConfig';
import { ViewStudent } from './components/ViewStudent';
import { Dashboard } from './components/Dashboard';
import { ViewCourses } from './components/ViewCourses';
import { Workimage } from './components/viewworkimage';
import { Student } from './components/student';
import { AddStudent } from './components/AddStudent';
import { Faculty } from './components/Faculty';
import { AddFaculty } from './components/AddFaculty';
import { ViewFaculty } from './components/ViewFaculty';
import { Tooltip } from 'primereact/tooltip';
import { Feesmanagement } from './components/Feesmanagement';
import { ExamModule } from './components/ExamModule';
import { Timetable } from './components/Timetable';
import { Resultmodule } from './components/Resultmodule';
import { Createresult } from './components/Createresult';
import { Studentprofile } from './components/Studentprofile';
import { Onlineclassesstudent } from './components/Onlineclassesstudent';
import { Staffsalary } from './components/Staffsalary';
import { Attendecemanagement } from './components/Attendecemanagement';
import { Attandance } from './components/Attandance';
import { ExamModulestudent } from './components/ExamModulestudent';
import { Resultstudent } from './components/Resultstudent';
import { Viewstudentresult } from './components/Viewstudentresult';
import { Timetablestudent } from './components/Timetablestudent';
import { MakeComplaint } from './components/MakeComplaint';
import { InterestforInquiry } from './components/InterestforInquiry ';
import { Studentactivitys } from './components/Studentactivitys';
import { SubjectSyallbus } from './components/Subjectsyallbus';
import { Onlineclasses } from './components/Onlineclasses';
import { Createclasses } from './components/Createclasses';
import { Complaint } from './components/Complaint';
import { Inquiry } from './components/Inquiry';
import { Studentactivityadmin } from './components/Studentactivityadmin';
import { Institutemanagement } from './components/Institutemanagement';
import { Addinstitute } from './components/Addinstitute';
import { FeesPayment } from './components/Feespayment';
import { Subjectsyallbusadmin } from './components/Subjectsyallbusadmin';
import { Subjectmanage } from './components/Subjectmanage';
// import Signup from './Signup';
// import { Login } from './Login';

// primereact 
import PrimeReact from 'primereact/api';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'prismjs/themes/prism-coy.css';
import './assets/demo/flags/flags.css';
import './assets/demo/Demos.scss';
import './assets/layout/layout.scss';
import './App.scss';


const App = () => {
    {/* {email: 'sojitraayush301@gmail.com', password: 'Aayush@123'} for super-admin
            {email: 'vradadiya34@gmail.com', password: 'Vivek@123'} for admin
            {email: 'varsidhmangroliya@gmail.com', password: 'Varsidh@123'} for student */}
    {/* <Route path='/login' ><Login /></Route> */ }

    // const [user, setUser] = useState(false)
    // const [userData, setUserData] = useState({ data: { message: { usertype: "" } } })
    // let usertype = userData.data.message.usertype;
    // console.log(usertype);

    const [layoutMode, setLayoutMode] = useState('static');
    const [layoutColorMode, setLayoutColorMode] = useState('dark')
    const [inputStyle, setInputStyle] = useState('outlined');
    const [ripple, setRipple] = useState(true);
    const [staticMenuInactive, setStaticMenuInactive] = useState(false);
    const [overlayMenuActive, setOverlayMenuActive] = useState(false);
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const [mobileTopbarMenuActive, setMobileTopbarMenuActive] = useState(false);
    const copyTooltipRef = useRef();
    const location = useLocation();

    PrimeReact.ripple = true;

    let menuClick = false;
    let mobileTopbarMenuClick = false;


    useEffect(() => {
        if (mobileMenuActive) {
            addClass(document.body, "body-overflow-hidden");
        } else {
            removeClass(document.body, "body-overflow-hidden");
        }
    }, [mobileMenuActive]);

    useEffect(() => {
        copyTooltipRef && copyTooltipRef.current && copyTooltipRef.current.updateTargetEvents();
    }, [location]);

    const onInputStyleChange = (inputStyle) => {
        setInputStyle(inputStyle);
    }

    const onRipple = (e) => {
        PrimeReact.ripple = e.value;
        setRipple(e.value)
    }

    const onLayoutModeChange = (mode) => {
        setLayoutMode(mode)
    }

    const onColorModeChange = (mode) => {
        setLayoutColorMode(mode)
    }

    const onWrapperClick = (event) => {
        if (!menuClick) {
            setOverlayMenuActive(false);
            setMobileMenuActive(false);
        }

        if (!mobileTopbarMenuClick) {
            setMobileTopbarMenuActive(false);
        }

        mobileTopbarMenuClick = false;
        menuClick = false;
    }

    const onToggleMenuClick = (event) => {
        menuClick = true;

        if (isDesktop()) {
            if (layoutMode === 'overlay') {
                if (mobileMenuActive === true) {
                    setOverlayMenuActive(true);
                }

                setOverlayMenuActive((prevState) => !prevState);
                setMobileMenuActive(false);
            }
            else if (layoutMode === 'static') {
                setStaticMenuInactive((prevState) => !prevState);
            }
        }
        else {
            setMobileMenuActive((prevState) => !prevState);
        }

        event.preventDefault();
    }

    const onSidebarClick = () => {
        menuClick = true;
    }

    const onMobileTopbarMenuClick = (event) => {
        mobileTopbarMenuClick = true;

        setMobileTopbarMenuActive((prevState) => !prevState);
        event.preventDefault();
    }

    const onMobileSubTopbarMenuClick = (event) => {
        mobileTopbarMenuClick = true;

        event.preventDefault();
    }

    const onMenuItemClick = (event) => {
        if (!event.item.items) {
            setOverlayMenuActive(false);
            setMobileMenuActive(false);
        }
    }
    const isDesktop = () => {
        return window.innerWidth >= 992;
    }

    const su_menu = [
        {
            label: 'Home',
            items: [{
                label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/super-admin'
            }]
        },
        {
            label: 'Pages', icon: 'pi pi-fw pi-sitemap',
            items: [
                { label: 'Classes Management', icon: ' pi pi-eject', to: '/super-admin/Institutemanagement' },

            ]
        },
    ];
    const admin_menu = [
        {
            label: 'Home',
            items: [{
                label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/admin'
            }]
        },
        {
            label: 'Pages', icon: 'pi pi-fw pi-sitemap',
            items: [

                { label: 'Student Management', icon: 'pi pi-fw pi-user-plus', to: '/admin/Students' },
                { label: 'Faculty Management', icon: 'pi pi-fw pi-users', to: '/admin/Facultys' },
                { label: 'Subject Management', icon: 'pi pi-fw pi-file-o', to: '/admin/subjectmanage' },
                { label: 'Fees Management', icon: 'pi  pi-fw pi-dollar', to: '/admin/feesmanagement' },
                { label: 'Attendece Management', icon: 'pi  pi-fw pi-user', to: '/admin/attendecemanagement' },
                { label: 'Exam Management', icon: 'pi  pi-fw pi-book', to: '/admin/exammodule' },
                { label: 'Result Management', icon: 'pi  pi-fw pi-percentage', to: '/admin/resultmodules' },
                { label: 'Timetable Management', icon: 'pi  pi-fw pi-table', to: '/admin/timetable' },
                { label: 'Subject Syallbus', icon: 'pi  pi-fw pi-book', to: '/admin/subjectsyallbusadmin' },
                { label: 'Staff Salary Management', icon: 'pi pi-credit-card', to: '/admin/Staffsalary' },
                { label: 'Online Classes Management ', icon: ' pi pi-video', to: '/admin/onlineclass' },
                { label: 'Student Complaints', icon: ' pi pi-exclamation-triangle', to: '/admin/complaints' },
                { label: 'Manage Student Inquiry', icon: ' pi pi-info-circle', to: '/admin/inquiry' },
                { label: 'Student Activity', icon: ' pi pi-cog', to: '/admin/studentactivitys' },

            ]
        },
    ];
    const std_menu = [
        {
            label: 'Home',
            items: [{
                label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/student'
            }]
        },
        {
            label: 'Pages',
            items: [
                { label: 'Student Profile', icon: 'pi pi-fw pi-user-plus', to: '/student/profile' },
                { label: 'Attandance', icon: 'pi pi-fw pi-user', to: '/student/attandance' },
                { label: 'Exam Module', icon: 'pi pi-fw pi-book', to: '/student/ExamModulestudent' },
                { label: 'Time Table', icon: 'pi pi-fw pi-table', to: '/student/Timetablestudent' },
                { label: 'Subject Syallbus', icon: 'pi pi-fw pi-book', to: '/student/subjectsyallbus' },
                { label: 'Result', icon: 'pi pi-fw pi-percentage', to: '/student/Resultstudent' },
                { label: 'Fees Payment', icon: 'pi pi-fw pi-dollar', to: '/student/Feespayment' },
                { label: 'Online Classes', icon: 'pi pi-fw pi-video', to: '/student/onlineclasses' },
                { label: 'Make Complaint', icon: 'pi pi-fw pi-exclamation-triangle', to: '/student/MakeComplaint' },
                { label: 'Interest for Inquiry', icon: 'pi pi-fw pi-exclamation-circle', to: '/student/InterestforInquiry' },
                { label: 'Student Activity', icon: 'pi pi-fw pi-cog', to: '/student/studentactivitys' },
            ]
        }
    ];

    const addClass = (element, className) => {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }

    const removeClass = (element, className) => {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    const wrapperClass = classNames('layout-wrapper', {
        'layout-overlay': layoutMode === 'overlay',
        'layout-static': layoutMode === 'static',
        'layout-static-sidebar-inactive': staticMenuInactive && layoutMode === 'static',
        'layout-overlay-sidebar-active': overlayMenuActive && layoutMode === 'overlay',
        'layout-mobile-sidebar-active': mobileMenuActive,
        'p-input-filled': inputStyle === 'filled',
        'p-ripple-disabled': ripple === false,
        'layout-theme-light': layoutColorMode === 'light'
    });

    return (
        <>

            <div className={wrapperClass} onClick={onWrapperClick}>

                <Tooltip ref={copyTooltipRef} target=".block-action-copy" position="bottom" content="Copied to clipboard" event="focus" />
                {/* {user === true ? <> */}
                <div className="layout-sidebar" onClick={onSidebarClick}>
                    <AppTopbar onToggleMenuClick={onToggleMenuClick} layoutColorMode={layoutColorMode}
                        mobileTopbarMenuActive={mobileTopbarMenuActive} onMobileTopbarMenuClick={onMobileTopbarMenuClick} onMobileSubTopbarMenuClick={onMobileSubTopbarMenuClick} />

                    {/* <div className="layout-sidebar" onClick={onSidebarClick}> */}
                    {/* {usertype === "super admin" ? */}
                    <Route path="/super-admin/:page?/:action?" exact render={() => <AppMenu model={su_menu} onMenuItemClick={onMenuItemClick} layoutColorMode={layoutColorMode} />} />
                    {/* : ""} */}
                    {/* {usertype === "admin" ? <> */}
                    <Route path="/admin/:page?/:action?" exact render={() => <AppMenu model={admin_menu} onMenuItemClick={onMenuItemClick} layoutColorMode={layoutColorMode} />} />
                    {/* </> : <></>} */}
                    {/* {usertype === "student" ? <> */}
                    <Route path="/student/:page?/:action?" exact render={() => <AppMenu model={std_menu} onMenuItemClick={onMenuItemClick} layoutColorMode={layoutColorMode} />} />
                    {/* </> : <></>} */}
                    {/* </div> */}
                </div>

                <div className="layout-main-container">
                    <div className="layout-main">

                        {/* login page */}

                        {/* <Route path="/login" component={Login} /> */}
                        {/* super-admin dashboard */}
                        {/* {usertype === "super admin" ? <> */}
                        <Route path="/super-admin" exact render={() => <Dashboard colorMode={layoutColorMode} />} />

                        {/* super-admin components */}
                        <Route path="/super-admin/Institutemanagement" component={Institutemanagement} />
                        <Route path="/super-admin/institutemanage/addinstitute" component={Addinstitute} />
                        {/* </> : <></>} */}


                        {/* admin dashboard */}
                        {/* {usertype === "admin" ? <> */}
                        <Route path="/admin" exact render={() => <Dashboard colorMode={layoutColorMode} />} />

                        {/* admin components */}
                        <Route path="/admin/exammodule" component={ExamModule} />
                        <Route path="/admin/resultmodules" component={Resultmodule} />
                        <Route path="/admin/resultmodule/createresult" component={Createresult} />
                        <Route path="/admin/timetable" component={Timetable} />
                        <Route path="/admin/feesmanagement" component={Feesmanagement} />
                        <Route path="/admin/Students" component={Student} />
                        <Route path="/admin/addStudent" component={AddStudent} />
                        <Route path="/admin/ViewStudent" component={ViewStudent} />
                        <Route path="/admin/Facultys" component={Faculty} />
                        <Route path="/admin/Faculty/addFaculty" component={AddFaculty} />
                        <Route path="/admin/viewfaculty" component={ViewFaculty} />
                        <Route path="/admin/Staffsalary" component={Staffsalary} />
                        {/* <Route path="/admin/Courses" component={Courses} /> */}
                        <Route path="/admin/viewcourses" component={ViewCourses} />
                        <Route path="/admin/attendecemanagement" component={Attendecemanagement} />
                        <Route path="/admin/studentactivitys" component={Studentactivityadmin} />
                        <Route path="/admin/studentactivity/work-image" component={Workimage} />
                        <Route path="/admin/onlineclass" component={Onlineclasses} />
                        <Route path="/admin/onlineclasses/createclasses" component={Createclasses} />
                        <Route path="/admin/complaints" component={Complaint} />
                        <Route path="/admin/inquiry" component={Inquiry} />
                        <Route path="/admin/subjectsyallbusadmin" component={Subjectsyallbusadmin} />
                        <Route path="/admin/subjectmanage" component={Subjectmanage} />
                        {/* </> : <></>} */}




                        {/* student dashboard */}
                        {/* {usertype === "student" ? <> */}
                        <Route path="/student" exact render={() => <Dashboard colorMode={layoutColorMode} />} />

                        {/* student components */}
                        <Route path="/student/profile" component={Studentprofile} />
                        <Route path="/student/Attandance" component={Attandance} />
                        <Route path="/student/exammodulestudent" component={ExamModulestudent} />
                        <Route path="/student/Timetablestudent" component={Timetablestudent} />
                        <Route path="/student/Resultstudent" component={Resultstudent} />
                        <Route path="/student/viewstudentresult" component={Viewstudentresult} />
                        <Route path="/student/feespayment" component={FeesPayment} />
                        <Route path="/student/onlineclasses" component={Onlineclassesstudent} />
                        <Route path="/student/MakeComplaint" component={MakeComplaint} />
                        <Route path="/student/InterestforInquiry" component={InterestforInquiry} />
                        <Route path="/student/subjectsyallbus" component={SubjectSyallbus} />
                        <Route path="/student/studentactivitys" component={Studentactivitys} />
                        {/* </> : <></>} */}

                    </div>

                    <AppFooter layoutColorMode={layoutColorMode} />
                </div>
                {/* </> : <> */}
                {/* <Route path='/login' ><Login setUser={setUser} setUserData={setUserData} /></Route> */}
                {/* <Route path='/signup' ><Signup setUser={setUser} /></Route> */}
                {/* </>} */}


                <AppConfig rippleEffect={ripple} onRippleEffect={onRipple} inputStyle={inputStyle} onInputStyleChange={onInputStyleChange}
                    layoutMode={layoutMode} onLayoutModeChange={onLayoutModeChange} layoutColorMode={layoutColorMode} onColorModeChange={onColorModeChange} />

                {/* <CSSTransition classNames="layout-mask" timeout={{ enter: 200, exit: 200 }} in={mobileMenuActive} unmountOnExit>
                <div className="layout-mask p-component-overlay"></div>
            </CSSTransition> */}

            </div>
        </>
    );

}

export default App;
