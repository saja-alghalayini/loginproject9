import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import "./userInfo.css";


function Userinfo(props) {
//   const [id, setId] = useState('1');
  const [user, setUsers] = useState([]);
  useEffect(() => {
    // $id='1';
    axios.get(`http://localhost/redux-project9/API/updateUser.php?`)//.$id
    //1&firstName=duaa&lastName=dua&email=dua@mail.com&phone=0771020304&password=asdf1234
      .then((res) => {
        //  console.log(res)
        const data = res.data;
        setUsers(data);
      });

  })

  return (
    <>

      {/* <div class="single-slider section-overly slider-height2 d-flex align-items-center" data-background="assets/img/hero/about.jpg"> */}
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="hero-cap text-center">
                <p className='hero-text'>Your Profile</p>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}



      {user.map((data) =>
          <div className="centeruser mb-5" style={{ marginTop: '14%', marginBottom: '60%' }}>
            <div className="containerUser mb-5">
              <div className="left">
                <div className="photo">
                  <div className="circle"></div>
                  <div className="circle2"></div>
                  <img alt="user_photo" src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_640.png" />
                </div>
                <div className="title__contain">
                  <div className="username">{data.firstname + ' ' + data.lastname}</div>
                </div>
                <Link to="/updateInfo" className="updateinfo">&emsp;Update info</Link>
              </div>
              <div className="right">
                <div className="rightbox">
                  <span className="large">Email</span>
                  <span className="small">{data.email}</span>
                </div>
                <div className="rightbox">
                  <span className="large">Phone</span>
                  <span className="small">{data.phone}</span>
                </div><br />
                <div className="rightbox">
                  <span className="large">Address</span>
                  {/* <span className="small">{data.address}</span> */}
                </div>
              </div>
            </div>
          </div>
      )}
    </>
  );
}
export default Userinfo;