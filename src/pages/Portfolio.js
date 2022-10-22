import React from 'react'
import FirstProjectImg from '../assets/firstproject.jpg'
import CrudOperationImg from '../assets/CrudImgs.jpg'

const PortfolioPage = () => {
  return (
    <React.Fragment>
      <h2 style={{ paddingTop: '100px' }}>These are my All Portfolio Websites</h2>
      <div style={{ marginTop: '20px' }}>

        <div className="CardDiv">
        <img className="CardImgOne" src={CrudOperationImg} alt="Loading Animation"/>
          <h5>Crud Operations Website</h5>
          <button className='GithubBtn'><a className="nav-link text-white" href="https://github.com/shadabraza0786/React-Crud-Operation" style={{color : 'white', textDecoration : 'none'}}>Git Hub</a></button>
           <button className='GoLiveBtn'><a className="nav-link text-white" href="https://first-crud-operations.netlify.app" style={{color : 'white', textDecoration : 'none'}}>Go Live</a></button>
        </div>

        <div className="CardDiv">
        <img className="CardImg" src={FirstProjectImg} alt="Loading Animation"/>
          <p>Eazy Pymentz</p>
          <button className='GithubBtn'><a className="nav-link text-white" href="https://github.com/shadabraza0786/Personal-Presentation-Website" style={{color : 'white', textDecoration : 'none'}}>Git Hub</a></button>
           <button className='GoLiveBtn'><a className="nav-link text-white" href="https://hdmeet.com/" style={{color : 'white', textDecoration : 'none'}}>Go Live</a></button>
        </div>

        <div className="CardDiv">
        <img className="CardImg" src={FirstProjectImg} alt="Loading Animation"/>
          <p>Eazy Pymentz</p>
          <button className='GithubBtn'><a className="nav-link text-white" href="https://github.com/shadabraza0786/Personal-Presentation-Website" style={{color : 'white', textDecoration : 'none'}}>Git Hub</a></button>
           <button className='GoLiveBtn'><a className="nav-link text-white" href="https://hdmeet.com/" style={{color : 'white', textDecoration : 'none'}}>Go Live</a></button>
        </div>

        <div className="CardDiv">
        <img className="CardImg" src={FirstProjectImg} alt="Loading Animation"/>
          <p>Eazy Pymentz</p>
          <button className='GithubBtn'><a className="nav-link text-white" href="https://github.com/shadabraza0786/Personal-Presentation-Website" style={{color : 'white', textDecoration : 'none'}}>Git Hub</a></button>
           <button className='GoLiveBtn'><a className="nav-link text-white" href="https://hdmeet.com/" style={{color : 'white', textDecoration : 'none'}}>Go Live</a></button>
        </div>

       
        
      </div>
    </React.Fragment >
  )
}
export default PortfolioPage;