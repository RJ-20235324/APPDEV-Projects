import PropTypes from 'prop-types'
export default function Body(props){
    return(
        <div class="aboutme">

        <div class="Photos">
           <div class="Overlay"></div>
           <div class="Background"></div>
           <h2 class="Name">R J G. Salcedo</h2>
           <div class="photo-of-me"><img src="../Files\Profile.jpg" alt=""/>
           <p class="Bio">"Ad asta per aspera"</p>
           <div class="Horizontal-Line"></div>
         </div>
        </div>
        
        
        <p class="Message">R J G. Salcedo is my name. I'm a student at the University of Baguio, but you can call me Riley. If you'd want more information, click my name above.
        <br />
        Allow me to properly introduce myself, my name is R J Guerero Salcedo , I Am 18 years old born in the city of Dagupan. I am a student currently enrolled in the University of Baguio, <br />
        under the course of Bachelor in Science in Computer Science.

            My favorite hobby is baking, some people think baking is a challenging hobby but, on my opinion, I think it is easy as long <br /> as you have a basic background information to start with. Its like creating a website you must know the basics and improve with practice.
            
            Right now, while experiencing my <br /> remaining young adult years, I have realized that in college you will meet new people that are different from high school, like literally. I miss my old friends but during this time <br />  I am also glad that I met some people that are almost similar to them on how they think and perceive things.
            
            </p>

        <div class="Center-Line"></div>
       
   </div>
    )
}
Body.propTypes = {
    name: PropTypes.string,
    food: PropTypes.string,
    Healthy: PropTypes.bool,
    age: PropTypes.number
}
 Body.defaultProps = {
    name: "Guest",
    food:"Unknown",
    isHealthy: false,
    age: 0
 }