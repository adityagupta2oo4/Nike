/*
min-h-screen - make sure the hero section is taking entire hieght of the screen

*/

import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../Constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
const Hero = () => {
  return (
    //ading the semantic html tag
    <section
      id="home" // for the click option 
      className="
      w-full flex 
      xl:flex-row flex-col 
      justify-center min-h-screen 
      gap-10 max-container  "
    >

      <div className="
      relative xl:w-2/5 
      flex flex-col justify-center
      items-start w-full
      max-xl:padding-x pt-28
      ">
        <p className="text-xl text-coral-red font-montserrat">Our Summer Collection</p>
        <h1 className="
        font-palanquin text-8xl 
        font-bold mt-10
        max-sm:text-xl{72px} 
        max-sm:leading -[82]">
          {/*--- mx-sm: is for small devices and leading is the line hieght ---*/}
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red mt-3 inline-block mr-5">Nike </span>
          Shoes
        </h1>
        <p className="
        font-montserrat 
        text-lg text-slate-400 
        leading-8 sm:max-w-sm mt-6 mb-9"
        > Discover stylish Nike
          arrivals, qaulity comfort,
          and innovation for your active life.
        </p>

        {/* sm:max-w-sm - to make the width small on small device */}

        <Button label="Shop Now"
          iconURL={arrowRight}></Button>

        <div
          className="
         flex flex-wrap gap-16
         justify-items-start items-start
         w-full mt-20
         "
        >
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="  text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="text-slate-400 font-montserrat leading-7">{stat.label}</p>
            </div>
          ))}

        </div>


      </div>

      <div className="relative flex-1 flex justify-center  items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center" >
        <img
          src={bigShoe1}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain  relative z-10"
        />
      </div>

      <div className="flex gap-4 sm:gap-6 ">
      
        {shoes.map((shoe, index) => (
          <div key={shoe}>
            <ShoeCard
              imageURL={shoe}
              changeBigShoeImage={() => { }}
              BigShoeImage=""

            />
          </div>
        ))}
      </div>



    </section>
  )
}

export default Hero;
