import React, { Component } from 'react';

class Editorialboard extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="editorialboard">

      <div className="row education">

      <div className="tab-content bg-white col-sm-12">
      <div className="table table-responsive ">
                            <table className="table table-bordered">
                              <tbody><tr>
                                  <td width="50">Programme</td>
                                  <td width="50">No of Sections</td>
                                  <td width="50">Syllabus</td>
                                  <td width="50">Commencement of the Programme</td>
                                </tr>
                                <tr>
                                    <td>B.COM(GENERAL)</td>
                                    <td>-</td>
                                    <td><a href="#" target="_blank">2021</a></td>
                                    <td>2012</td>
                                    </tr>
                                  <tr>
                                    <td>B.COM(CA)</td>
                                    <td>-</td>
                                    <td><a href="#" target="_blank">2021</a></td>
                                    <td>2012</td>
                                  </tr>
                                  <tr>
                                    <td>M.COM</td>
                                    <td>-</td>
                                    <td><a href="#" target="_blank">2021</a></td>
                                    <td>2016</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>


       </div>
      </div>


      {/* <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div> */}



      {/* <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div> */}
   </section>
    );
  }
}

export default Editorialboard;
