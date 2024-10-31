import "./RecentWork.css"

const RecentWork = () => {
  return (
    <div className='container'>
      <div className='text-content'>

      <p>RECENT WORK</p>
      <div className='events'>
        WE RECENTLY COMPLETE OUR SOME EVENTS
        </div>
      </div>
        <div className='img_section'>
          <img src="/images/Arrowleft.png" alt="" />
          <div className='img-content'>
          <img src="/images/Iiec.jpeg" alt="" />
          <div className='text'>
            
            <h4>Innovation <br /> Competition 2019</h4>
            <p>Life was for my family in 1989. My father was the well-paid president of a marketing company</p>

            <p>Theresa Graves</p>
            <p style={{color:'#23B6AE'}}>June 2,2020</p>
          </div>
          </div>
          <img src="/images/Arrowright.png" alt="" />
        </div>
        <div className='btn'>

      <button>Read More <img src="/images/Arrowright.png" alt="" /></button>
        </div>
    </div>
  )
}

export default RecentWork
