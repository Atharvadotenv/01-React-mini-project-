
import {Bookmark} from "lucide-react";
const Cards = () => {
  return (
 <div className="card">
        <div><div className="top">
          <img src="https://imgs.search.brave.com/FpnyRNRoovwDAwTfn4Un-es4uQ_6nByUIFalpA3R9EE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTg2/MC8xNjM3NS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE2Mzc1NzYz/Mi1zdG9jay1waG90/by1hbWF6b24tbG9n/by1vbi1hLXdoaXRl/LmpwZw" alt="" />
          <button> Save <Bookmark size = {11} /> </button>
        </div>
        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div className="tag">
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>

        </div></div>
        <div className="bottom">
          <div>
            
              <h3>$120/hr</h3>
              <p>Mumbai , India</p>
            </div>
            <button>Apply Now </button>
          
           
        </div>
      </div>
  )
}

export default Cards
