import React, { useState, useEffect } from 'react';
import './Nav1.css';
import classNames from 'classnames';

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
  const largeIcon = "" 
  const smallIcon = "" 

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
      <img></img> 
      </div>
      <div className="main-logo-container">
        <img></img>
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
