import Card from "../src/components/Card";

const App = () => {
  
  
   
    const jobs = [
  {
    
    companyLogo: "https://imgs.search.brave.com/uL9PbdEAz1lOtNb7gtCv9yyLWgMWLJP9GTj-P1eRkGg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc1L2Fk/LzI1Lzc1YWQyNTVl/YmJmNDdmOTQ5YTc5/ZWZhMjZlMjhjYmJl/LmpwZw",
    companyName: "Google",
    jobRole: "Frontend Developer",
    employmentType: "Full-time",
    level: "Junior",
    payPerHourUSD: 135,
    location: "Bangalore, India",
    datePosted: "2 days ago",
  },
  {
    
    companyLogo: "https://imgs.search.brave.com/FpnyRNRoovwDAwTfn4Un-es4uQ_6nByUIFalpA3R9EE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTg2/MC8xNjM3NS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE2Mzc1NzYz/Mi1zdG9jay1waG90/by1hbWF6b24tbG9n/by1vbi1hLXdoaXRl/LmpwZw",
    companyName: "Amazon",
    jobRole: "Backend Engineer",
    employmentType: "Part-time",
    level: "Senior",
    payPerHourUSD: 205,
    location: "Seattle, USA",
    datePosted: "5 days ago",
  },
  {
    
    companyLogo: "https://imgs.search.brave.com/ODyQdfJ7pQZAH7ROsmWW6WVln0wDUg6LGfsWA59riAg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDY4MTA4/NTcucG5n",
    companyName: "Microsoft",
    jobRole: "Software Engineer",
    employmentType: "Full-time",
    level: "Junior",
    payPerHourUSD: 132,
    location: "Hyderabad, India",
    datePosted: "1 week ago",
  },
  {
 
    companyLogo: "https://imgs.search.brave.com/kuInYCg_eL2AKYnGgq6W9VOJQBF_17KB3N3R_wJQ0Eg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/Mjk3NjRiODdlYzc2/YjgyZmIyMWZjZTQu/cG5n",
    companyName: "Netflix",
    jobRole: "UI/UX Designer",
    employmentType: "Part-time",
    level: "Senior",
    payPerHourUSD: 120,
    location: "Los Angeles, USA",
    datePosted: "3 days ago",
  },
  {
  
    companyLogo: "https://imgs.search.brave.com/eIi_jMe58xKhDs6XoBv5-8EVbjyHKMn8fzzgQKGKc2E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9icmFu/ZGluZ2ZvcnVtLm9y/Zy93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8xMC9TcG90aWZ5/LWxvZ28tNTAweDI4/MS0xLnBuZw",
    companyName: "Spotify",
    jobRole: "Mobile App Developer",
    employmentType: "Full-time",
    level: "Junior",
    payPerHourUSD: 190,
    location: "Stockholm, Sweden",
    datePosted: "2 weeks ago",
  },
  {
    
    companyLogo: "https://imgs.search.brave.com/dKb-sRwOK1Mc60UFpvJIdmUxPSncJt7Yo9Jdat16Wrg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aGF0Y2h3aXNlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8wNy9pbWFnZS0y/LmpwZWcud2VicA",
    companyName: "Airbnb",
    jobRole: "Full Stack Developer",
    employmentType: "Part-time",
    level: "Senior",
    payPerHourUSD: 220,
    location: "Toronto, Canada",
    datePosted: "5 weeks ago",
  },
  {
 
    companyLogo: "https://imgs.search.brave.com/FW4sk8FpU5ns-P1LJPbOjkzlssi0ctzrAIEy2nSHD7w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ibG9n/LmxvZ29tYXN0ZXIu/YWkvaHMtZnMvaHVi/ZnMvYWRvYmUtbG9n/by0zLmpwZz93aWR0/aD02NjImaGVpZ2h0/PTQ0MSZuYW1lPWFk/b2JlLWxvZ28tMy5q/cGc",
    companyName: "Adobe",
    jobRole: "Product Designer",
    employmentType: "Full-time",
    level: "Junior",
    payPerHourUSD: 140,
    location: "Sydney, Australia",
    datePosted: "4 days ago",
  },
  {
  
    companyLogo: "https://imgs.search.brave.com/F5OTIiXQsj1Oyc_QZ1Pcf1XFN1HfraeROF6QZqwmMHw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9UZXNsYSxf/SW5jLi9UZXNsYSxf/SW5jLi1Mb2dvLndp/bmUuc3Zn",
    companyName: "Tesla",
    jobRole: "Software QA Engineer",
    employmentType: "Part-time",
    level: "Junior",
    payPerHourUSD: 130,
    location: "Berlin, Germany",
    datePosted: "6 days ago",
  },
  {
 
    companyLogo: "https://imgs.search.brave.com/QpQQaUkD0bIAekvPR1Y9cIRFHxNbH1rwZlIsi2kz2D4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTUv/MjEwLzg5MC9zbWFs/bC9tZXRhLWxvZ28t/c3F1YXJlLXJvdW5k/ZWQtbWV0YS1sb2dv/LW1ldGEtbG9nby1m/cmVlLWRvd25sb2Fk/LWZyZWUtcG5nLnBu/Zw",
    companyName: "Meta",
    jobRole: "AR/VR Developer",
    employmentType: "Full-time",
    level: "Senior",
    payPerHourUSD: 90,
    location: "London, UK",
    datePosted: "1 day ago",
  },
  {
    
    companyLogo: "https://imgs.search.brave.com/_WWdKDqb_8JCzrGsctBMSf_72SSzltAuyudQl_NO5ns/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9TYWxlc2Zv/cmNlLmNvbS9TYWxl/c2ZvcmNlLmNvbS1M/b2dvLndpbmUuc3Zn",
    companyName: "Salesforce",
    jobRole: "Cloud Engineer",
    employmentType: "Full-time",
    level: "Senior",
    payPerHourUSD: 148,
    location: "Singapore",
    datePosted: "3 weeks ago",
  }
];





  return (
    <div className="parent">
      {jobs.map(function(elem){
        return <Card  company = {elem.companyName} post ={elem.jobRole} Etype={elem.employmentType} level={elem.level} pay = {elem.payPerHourUSD} location = {elem.location} datePosted={elem.datePosted} logo = {elem.companyLogo}/>
      })}
      
     
     
   
    </div>
 
  )
}

export default App
