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
        <div className="row">
          <table className="table table-bordered">
            <tr>
              <th>Programme</th>
              <th>No of Sections</th>
              <th>Syllabus</th>
              <th>Commencement of the Programme</th>
            </tr>
            <tr>
              <td>B.COM(GENERAL)</td>
              <td>-</td>
              <td>2021</td>
              <td>2012</td>
            </tr>
            <tr>
              <td>B.COM(CA)</td>
              <td>-</td>
              <td>2021</td>
              <td>2012</td>
            </tr>
            <tr>
              <td>M.COM</td>
              <td>-</td>
              <td>2021</td>
              <td>2016</td>
            </tr>
          </table>
        </div>
    </section>
    );
  }
}

export default Editorialboard;
