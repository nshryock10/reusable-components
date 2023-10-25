import React, { useState, useEffect } from 'react';
import './Nav1.css';
import tsunami from './images/tsunami.svg'
import largeLogo from './images/MAKE_WAVES.png'
import classNames from 'classnames';
import * as Icon from 'react-bootstrap-icons';

function Nav1() {

  //Review steps 1-X below to customize the menu

  // Step 1 --- Menu Variables --- //

  //Enter menu links below in object
  const links = [
    {
      name: "Home",
      link: "#100", //enter home link
      type: 'href' //enter href for sections or external to use url
    },
    {
      name: "About",
      link: "https://app.tryfiit.com/", //add you home link here. A link is not require and may just group sub-links
      type: 'href',
      subMenu: [
        {
          name: "Our Mission",
          link: "",
          type: 'href'
        },
        {
          name: "Our Culture",
          link: ""
        },
        {
          name: "Our Team",
          link: ""
        }
      ] //Add any sub-links below with the same object structure. Only one level of sub-links can be included 
    },
    //Add additional links to your menu by copying the object structures below
  ]

  // Step 2 --- Go to Nav1.css to adjust your style variables -- //
  

  //add the link or path for your small icon. This icon will be in the middle and dissapear on mobile navs
  const largeIcon = largeLogo; //Add in icons for examples;
  const smallIcon =tsunami;

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  const [menuVisible, setMenuVisible] = useState(false);
  const [buttonRotate, setButtonRotate] = useState(false);
  
  const displayNav = classNames('nav', {
    show: navVisible
  });

  const displayMenu = classNames('nav-links', {
    open: menuVisible
  });
  const rotateButton = classNames('menu-button', {
    open: menuVisible
  });

  //Debounce helper function to help smooth scroll up transition
  const debounce = (func, wait, immediate) => {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setNavVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 30 || currentScrollPos < 20 ));

    setPrevScrollPos(currentScrollPos)
  }, 40)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
    
  }, [prevScrollPos, navVisible, handleScroll])

  useEffect(() => {

  }, [displayNav])

  //Next up: transition button

  return (
    <div className={displayNav}>
      <div className="icon-container"> 
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tsunami" viewBox="0 0 16 16">
          <path d="M.036 12.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65zm0 2a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65zM2.662 8.08c-.456 1.063-.994 2.098-1.842 2.804a.5.5 0 0 1-.64-.768c.652-.544 1.114-1.384 1.564-2.43.14-.328.281-.68.427-1.044.302-.754.624-1.559 1.01-2.308C3.763 3.2 4.528 2.105 5.7 1.299 6.877.49 8.418 0 10.5 0c1.463 0 2.511.4 3.179 1.058.67.66.893 1.518.819 2.302-.074.771-.441 1.516-1.02 1.965a1.878 1.878 0 0 1-1.904.27c-.65.642-.907 1.679-.71 2.614C11.076 9.215 11.784 10 13 10h2.5a.5.5 0 0 1 0 1H13c-1.784 0-2.826-1.215-3.114-2.585-.232-1.1.005-2.373.758-3.284L10.5 5.06l-.777.388a.5.5 0 0 1-.447 0l-1-.5a.5.5 0 0 1 .447-.894l.777.388.776-.388a.5.5 0 0 1 .447 0l1 .5a.493.493 0 0 1 .034.018c.44.264.81.195 1.108-.036.328-.255.586-.729.637-1.27.05-.529-.1-1.076-.525-1.495-.426-.42-1.19-.77-2.477-.77-1.918 0-3.252.448-4.232 1.123C5.283 2.8 4.61 3.738 4.07 4.79c-.365.71-.655 1.433-.945 2.16-.15.376-.301.753-.463 1.13z"/>
        </svg>
      <img ></img> 
      </div>
      <div className="main-logo-container">
        
        <img src={largeIcon}></img>
      </div>
      <div className="nav-container">
        <span>
          <button className={rotateButton}
            onClick={() => {
              setMenuVisible((menuVisible) => !menuVisible)
            }}
          >
            <div className='bar-one' ></div>
            <div className='bar-two' ></div>
            <div className='bar-three'></div>
          </button>
        </span>
        <ul className={displayMenu}>
          {
            links.length > 0 && links.map( (link, index) => {
              if(link.type == 'href'){
                return (
                  <li 
                    className="nav-item" key={index}
                    onClick={() => setMenuVisible((menuVisible) => !menuVisible)}
                  >
                    <a href={link.link} className='nav-link'
                    >{link.name}</a>
                  </li>
                )
              }else{
                return(
                <li className="nav-item" key={index}>
                    <a url={link.link} className='nav-link'>{link.name}</a>
                </li>)
              }
              
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default Nav1;
