/**
 * Created by samar.ferchichi on 17/10/2019.
 */

import React from 'react';

function Sidebar() {
    return (
        <div className="app-sidebar sidebar-shadow" >
            <div className="app-header__logo" >
                <div className="logo-src" ></div >
                <div className="header__pane ml-auto" >
                    <div >
                        <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-classname="closed-sidebar" >
                                <span className="hamburger-box" >
                                    <span className="hamburger-inner" ></span >
                                </span >
                        </button >
                    </div >
                </div >
            </div >
            <div className="app-header__mobile-menu" >
                <div >
                    <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav" >
                            <span className="hamburger-box" >
                                <span className="hamburger-inner" ></span >
                            </span >
                    </button >
                </div >
            </div >
            <div className="app-header__menu" >
                    <span >
                        <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav" >
                            <span className="btn-icon-wrapper" >
                                <i className="fa fa-ellipsis-v fa-w-6" ></i >
                            </span >
                        </button >
                    </span >
            </div >
            <div className="scrollbar-sidebar" >
                <div className="app-sidebar__inner" >
                    <ul className="vertical-nav-menu" >
                        <li className="app-sidebar__heading" >Menu</li >
                        <li className="mm-active" >
                            <a href="#" >
                                <i className="metismenu-icon pe-7s-rocket" ></i >
                                Dashboards
                                <i className="metismenu-state-icon pe-7s-angle-down caret-left" ></i >
                            </a >
                            <ul>
                                <li >
                                    <a href="index-2.html" className="mm-active" >
                                        <i className="metismenu-icon" >
                                        </i >Analytics
                                    </a >
                                </li >
                                <li >
                                    <a href="dashboards-commerce.html" >
                                        <i className="metismenu-icon" >
                                        </i >Commerce
                                    </a >
                                </li >
                                <li >
                                    <a href="dashboards-sales.html" >
                                        <i className="metismenu-icon" >
                                        </i >Sales
                                    </a >
                                </li >
                                <li>
                                    <a href="#" >
                                        <i className="metismenu-icon" ></i >
                                        Minimal
                                        <i className="metismenu-state-icon pe-7s-angle-down caret-left" ></i >
                                    </a >
                                    <ul>
                                        <li >
                                            <a href="dashboards-minimal-1.html" >
                                                <i className="metismenu-icon" >
                                                </i >Variation 1
                                            </a >
                                        </li >
                                        <li >
                                            <a href="dashboards-minimal-2.html" >
                                                <i className="metismenu-icon" >
                                                </i >Variation 2
                                            </a >
                                        </li >
                                    </ul >
                                </li >
                                <li >
                                    <a href="dashboards-crm.html" >
                                        <i className="metismenu-icon" ></i >
                                        CRM
                                    </a >
                                </li >
                            </ul >
                        </li >
                        <li>
                            <a href="#" >
                                <i className="metismenu-icon pe-7s-browser" ></i >
                                Pages
                                <i className="metismenu-state-icon pe-7s-angle-down caret-left" ></i >
                            </a >
                            <ul>
                                <li >
                                    <a href="pages-login.html" >
                                        <i className="metismenu-icon" ></i >
                                        Login
                                    </a >
                                </li >
                                <li >
                                    <a href="pages-login-boxed.html" >
                                        <i className="metismenu-icon" >
                                        </i >Login Boxed
                                    </a >
                                </li >
                                <li >
                                    <a href="pages-register.html" >
                                        <i className="metismenu-icon" >
                                        </i >Register
                                    </a >
                                </li >
                                <li >
                                    <a href="pages-register-boxed.html" >
                                        <i className="metismenu-icon" >
                                        </i >Register Boxed
                                    </a >
                                </li >
                                <li >
                                    <a href="pages-forgot-password.html" >
                                        <i className="metismenu-icon" >
                                        </i >Forgot Password
                                    </a >
                                </li >
                                <li >
                                    <a href="pages-forgot-password-boxed.html" >
                                        <i className="metismenu-icon" >
                                        </i >Forgot Password Boxed
                                    </a >
                                </li >
                            </ul >
                        </li >
                        <li>
                            <a href="#" >
                                <i className="metismenu-icon pe-7s-plugin" ></i >
                                Applications
                                <i className="metismenu-state-icon pe-7s-angle-down caret-left" ></i >
                            </a >
                            <ul>
                                <li >
                                    <a href="apps-mailbox.html" >
                                        <i className="metismenu-icon" >
                                        </i >Mailbox
                                    </a >
                                </li >
                                <li >
                                    <a href="apps-chat.html" >
                                        <i className="metismenu-icon" >
                                        </i >Chat
                                    </a >
                                </li >
                                <li >
                                    <a href="apps-faq-section.html" >
                                        <i className="metismenu-icon" >
                                        </i >FAQ Section
                                    </a >
                                </li >
                                <li>
                                    <a href="#" >
                                        <i className="metismenu-icon" ></i >
                                        Forums
                                        <i className="metismenu-state-icon pe-7s-angle-down caret-left" ></i >
                                    </a >
                                    <ul>
                                        <li >
                                            <a href="apps-forum-list.html" >
                                                <i className="metismenu-icon" >
                                                </i >Forum Listing
                                            </a >
                                        </li >
                                        <li >
                                            <a href="apps-forum-threads.html" >
                                                <i className="metismenu-icon" >
                                                </i >Forum Threads
                                            </a >
                                        </li >
                                        <li >
                                            <a href="apps-forum-discussion.html" >
                                                <i className="metismenu-icon" >
                                                </i >Forum Discussion
                                            </a >
                                        </li >
                                    </ul >
                                </li >
                            </ul >
                        </li >
                    </ul >
                </div >
            </div >
        </div >
    );
}

export default Sidebar;
