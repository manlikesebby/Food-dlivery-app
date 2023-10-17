import Section from "../section"
const Explanation = () =>{

    const sections =[
        {
            heading: "Create an account", 
            subHeading:"Create/login to an existing account to get started", 
            body:"An account is created with your email and a desired password",
            img:"/section-img-1.png",
            imgLeft: true,
        }, 

        {
            heading: "Explore Varieties", 
            subHeading:"Shop for your favourite meals as e dey hot", 
            body:"Shop for your favourite meal or drinks and enjoy while doing it",
            img:"/section-img-2.png",
            imgLeft:false,   
        },

        {
            heading: "Checkout", 
            subHeading: "when you're done check out and get it delivered", 
            body: "When you're done checkout and get it delivered with ease",
            img:"/section-img-3.png",
            imgLeft: true,   
        }
        
    ];

    return(
        <div>
           <h1 className="text-center text-[24px] md:text-[44px] mb-[60px] font-['Montserrat'] tracking-[0.5px]">How The App Works</h1>

          {sections.map((section) =>{
            return(
                <Section
                  heading={section.heading}
                  subHeading={section.subHeading}
                  body={section.body}
                  img={section.img}
                  imgLeft={section.imgLeft}
                />
            )
          })}
        </div>
    )
}
export default Explanation