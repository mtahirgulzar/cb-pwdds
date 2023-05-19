import React, { useEffect } from "react";
import ReviewsCards from "./ReviewsCards";
import Header from "../../components/Testimonial/testimonial-header";
import Blogcards from "../Testimonial/blogCards";

const index = () => {
  const CardsData = [
    {
      id: 1,
      profileimg: "/static/images/S.png",
      title: "Steve Gutfeld",
      subtitle: "August 13, 2022.",
      logo: "/static/images/G.svg",
      starimg: "/static/images/star.svg",
      tickimg: "/static/images/tick.svg",
      description: "Excellent work! Very thorough!",
      btn: "Read more",
    },
    {
      id: 2,
      profileimg: "/static/images/S.png",
      title: "Steve Gutfeld",
      subtitle: "August 13, 2022.",
      logo: "/static/images/G.svg",
      starimg: "/static/images/star.svg",
      tickimg: "/static/images/tick.svg",
      description: "Excellent work! Very thorough!",
      btn: "Read more",
    },
    {
      id: 3,
      profileimg: "/static/images/S.png",
      title: "Steve Gutfeld",
      subtitle: "August 13, 2022.",
      logo: "/static/images/G.svg",
      starimg: "/static/images/star.svg",
      tickimg: "/static/images/tick.svg",
      description: "Excellent work! Very thorough!",
      btn: "Read more",
    },
    {
      id: 4,
      profileimg: "/static/images/S.png",
      title: "Steve Gutfeld",
      subtitle: "August 13, 2022.",
      logo: "/static/images/G.svg",
      starimg: "/static/images/star.svg",
      tickimg: "/static/images/tick.svg",
      description: "Excellent work! Very thorough!",
      btn: "Read more",
    },
  ];
  const CardsData2 = [
    {
      id: 1,
      profileimg: "/static/images/pro.jpg",
      title: "Steve Gutfeld",
      subtitle: "August 13, 2022.",
      logo: "/static/images/P.svg",
      starimg: "/static/images/redstar.svg",
      tickimg: "/static/images/tick.svg",
      description: "Excellent work! Very thorough!",
      btn: "Read more",
    },
    {
      id: 2,
      profileimg: "/static/images/pro.jpg",
      title: "Steve Gutfeld",
      subtitle: "August 13, 2022.",
      logo: "/static/images/P.svg",
      starimg: "/static/images/redstar.svg",
      tickimg: "/static/images/tick.svg",
      description: "Excellent work! Very thorough!",
      btn: "Read more",
    },
    {
      id: 3,
      profileimg: "/static/images/pro.jpg",
      title: "Steve Gutfeld",
      subtitle: "August 13, 2022.",
      logo: "/static/images/P.svg",
      starimg: "/static/images/redstar.svg",
      tickimg: "/static/images/tick.svg",
      description: "Excellent work! Very thorough!",
      btn: "Read more",
    },
    {
      id: 4,
      profileimg: "/static/images/pro.jpg",
      title: "Steve Gutfeld",
      subtitle: "August 13, 2022.",
      logo: "/static/images/P.svg",
      starimg: "/static/images/redstar.svg",
      tickimg: "/static/images/tick.svg",
      description: "Excellent work! Very thorough!",
      btn: "Read more",
    },
  ];
  const CardsData3 = [
    {
      id: "1",
      description:
        "“Excellent experience. High quality, professional & efficient & friendly service. Meticulous adherence to Covid protection guidelines.”",
      title: "— Karen N",
    },
    {
      id: "2",
      description:
        "“I’ve been a patient for nine years and have absolutely no complaints. They are unbelievably honest in their diagnosis. Where other dentists wanted to do expensive work they informed me after several diagnosis that were no problems!! I would not go anywhere else.” ",
      title: "— Barbara S.",
    },
    {
      id: "3",
      description:
        "“We have been coming to this office for 30 years. Love Dr Procopio, she is very gentle when doing procedures. The staff is great; always get a good cleaning and exam.” ",
      title: "— Libby R.",
    },
    {
      id: "4",
      description:
        "“Great care, great service, nice people. Extremely pleased with the quality of care provided over the years.”",
      title: "— Dave G.",
    },
    {
      id: "4",
      description:
        "“Always Great ! Been coming here for 35 years! Loved Dr. Wolter and love his colleagues ! Had an excellent consultation w/ Dr. Procopio and know how to go with my next dental steps. Had work done by Dr. Nima before and it was excellent.” ",
      title: "— Dennis K",
    },
    {
      id: "5",
      description:
        "“Excellent services. I started with Dr Wolter and now I work with Dr P. She is just as great as Chris was. I could not be happier”",
      title: "—  Mark V.",
    },
    {
      id: "6",
      description:
      "“My 8 year old daughter instantly fell in love with Dr. P. My daughter was very comfortable with her from the beginning of her appointment. She did not feel her extraction of her baby tooth. Highly recommended!!!”",
      title: "— Christine A",
    },
    {
      id: "7",
      description:
      "“I chipped my tooth last night. Got an appointment immediately this morning. Dr. Lee evaluated and repaired my tooth right away. Her work is excellent. Her bedside manners are great. She softly explained every step of the procedure. Totally painless and reassuring.”",
      title: "— Maureen A",
    },
    {
      id: "8",
      description:
      "“Dr P is a very knowledgeable and competent dentist. A professional who cares about both patients and their families. She was able to see me right away when I had an emergency issue…being a “First Responder” I needed quick care and action with my tooth…I’m very fortunate to have them as my dentist and friend…”",
      title: "— Thomas M",
    },
    {
      id: "9",
      description:
      "“Charlene was one of the Best Dental Hygienists I have had in a very long time. Friendly, professional, and down to earth. Dr. Joyce was very nice also. Very Knowledgeable and friendly! Thank you for a nice experience!”",
      title: "— Scotty F",
    },
    {
      id: "10",
      description:
      "“My appointment went with speed, care and attention which made for a very satisfying and comfortable experience. And the resulting crown replacement was great. It is a continuation of the service we have had during our years in Walnut Creek. We would not be hesitant to recommend them.”",
      title: "—Joy H",
    },
    {
      id: "11",
      description:
      "“We have been coming to this dental practice for 35 years and have always been impressed with the excellent dental care that our whole family has received. We especially appreciate knowing that we can completely count on their conservative and honest recommendations. The dentists, hygienists, dental assistants, and office staff are all very good, professional, and friendly.” ",
      title: "—Arlene R.",
    },
    {
      id: "12",
      description:
      "“Top notch professional care. As a long time patient, it’s great to know you can count on great dental care in a calm friendly office. I appreciate the conservative approach that the late Dr. Wolter and Dr. Procopio take in regards to my dental care, and it’s nice having trust knowing I will only get recommended procedures that are truly needed.”",
      title: "—Pat H.",
    },
    {
      id: "13",
      description:
      "“Very positive experience. Staff keeps safety at the forefront of the service they are providing during this challenging time.”",
      title: "—Janette K",
    },
    {
      id: "14",
      description:
      "“Thank you so much for finding an appointment time for me on such short notice! I was seen quickly, and the needed repair to my front tooth were done in record time with no novocaine needed! Totally painless!”",
      title: "— Richard H.",
    },
    {
      id: "15",
      description:
      "“First cleaning experience with Alex: thorough and responded to inquiries in a concerned, caring matter.”",
      title: "—Jean G",
    },

  ];
  const CardsData4 = [
    {
      id: "1",
      description:
        "“Thanks for another quality cleaning job. These pandemic days have increased my anxiety and I haven’t been myself in a few years now. So I am more grateful than usual. See you in 6 months 😷😬” ",
      title: "—Jane K",
    },
    {
      id: "2",
      description:
        "Outstanding, professional service from Dr. O and his assistant. My situation was explained clearly, and the procedure was performed with the utmost care. Thank you. ",
      title: "— Milford W.",
    },
    {
      id: "3",
      description:
        "“We have been coming to this office for 30 years. Love Dr Procopio, she is very gentle when doing procedures. The staff is great; always get a good cleaning and exam.” ",
      title: "— Libby R.",
    },
    {
      id: "4",
      description:
        "“Helen cleaned my teeth on Friday March 26th and did a terrific job… very efficient thorough and speedy. In fact my teeth have never been cleaner. I am so grateful and thankful for her competence and professionalism. Brava!!!”        ",
      title: "— John T",
    },
    {
      id: "4",
      description:
        "“I would like to say, that my teeth cleaning experience with Alex was great. She is very personable and did a great job cleaning my teeth without any pain or bleeding. I hope to see her at my next teeth cleaning in 6 months.”",
      title: "—  Jeannie V",
    },
    {
      id: "5",
      description:
        "“Thank you for such a nice experience with a beautiful remodeled office and such a friendly and competent staff. Nice to see Bobbie and Dr. Procopio and now Alex who I just met. First class experience.”",
      title: "—Sharon R.",
    },
    {
      id: "6",
      description:
      "“My 8 year old daughter instantly fell in love with Dr. P. My daughter was very comfortable with her from the beginning of her appointment. She did not feel her extraction of her baby tooth. Highly recommended!!!”",
      title: "— Christine A",
    },
    {
      id: "7",
      description:
      "“I’ve been seeing Dr. Wolter for 18+ years and Dr. Procopio also. The doctors and their staff provide the best dental care in our area. I would highly recommend them to everyone.”",
      title: "—Robyn E",
    },
    {
      id: "8",
      description:
      "“I’ve been seeing Dr. Wolter for 18+ years and Dr. Procopio also. The doctors and their staff provide the best dental care in our area. I would highly recommend them to everyone.”",
      title: "—Robyn E",
    },
    {
      id: "9",
      description:
      "“Charlene was one of the Best Dental Hygienists I have had in a very long time. Friendly, professional, and down to earth. Dr. Joyce was very nice also. Very Knowledgeable and friendly! Thank you for a nice experience!”",
      title: "— Scotty F",
    },
    {
      id: "10",
      description:
      "“I wanted to express my delight with the dental care provided by Dr. Joyce today. She is very professional and pleasant. She is a great representative of the practice.”",
      title: "— William K",
    },
    {
      id: "11",
      description:
      "“The Professionalism of everyone on Staff is ALWAYS the highest standard! It is a pleasure coming to the office, and I enjoy interacting with each person I meet. Kudos to the “social distancing” procedures in place, too.”",
      title: "— David C",
    },
    {
      id: "12",
      description:
      "“Top notch professional care. As a long time patient, it’s great to know you can count on great dental care in a calm friendly office. I appreciate the conservative approach that the late Dr. Wolter and Dr. Procopio take in regards to my dental care, and it’s nice having trust knowing I will only get recommended procedures that are truly needed.”",
      title: "—Pat H.",
    },
    {
      id: "13",
      description:
      "“Very positive experience. Staff keeps safety at the forefront of the service they are providing during this challenging time.”",
      title: "—Janette K",
    },
    {
      id: "14",
      description:
      "“Thank you so much for finding an appointment time for me on such short notice! I was seen quickly, and the needed repair to my front tooth were done in record time with no novocaine needed! Totally painless!”",
      title: "— Richard H.",
    },
    {
      id: "15",
      description:
      "“First cleaning experience with Alex: thorough and responded to inquiries in a concerned, caring matter.”",
      title: "—Jean G",
    },
    {
      id: "16",
      description:
      "“Excellent work! Give stars. :)”",
      title: "—Charles E.",
    },
    {
      id: "17",
      description:
      "“Towards the end of the procedure when I could think, I realized all over again how grateful I am for your care. I seem to be speeding toward 80. You notice how folks treat you more gently than ever. Sorta nice. But I am hanging onto my teeth and have learned how to take better care of my teeth. So thank you all for being such a great team.”      ",
      title: "— Jane K",
    },
    
    {
      id: "18",
      description:
      "“Thank you so much. What a great team.”",
      title: "—Darryla G.",
    }
    ,
    {
      id: "19",
      description:
      "“I loved my hygienist.”",
      title: "—Linda M.",
    },

  ];

  useEffect(() => {

        const trustSliderYelp= document.getElementById("trustSliderYelp")
    const scriptYepl = document.createElement("script");
    scriptYepl.src = "https://cdn.trustindex.io/loader.js?e938aad60a7f7958d35f901be6";
    scriptYepl.async = true;
    trustSliderYelp.appendChild(scriptYepl);
    const trustSliderGoogle= document.getElementById("trustSliderGoogle")
    const scriptGoogle = document.createElement("script");
    scriptGoogle.src = "https://cdn.trustindex.io/loader.js?37feca976d150322ad5d2e02f2";
    scriptGoogle.async = true;
    trustSliderGoogle.appendChild(scriptGoogle);

  
},[])
  return (
    <div>
      <section className="max-w-[1400px] mx-auto xl:px-0 px-4 ">
        <div className=" lg:py-[144px] md:py-[100px] py-[50px] ">
          {/* <Header
            title="Testimonials"
            img="/static/images/google.png"
            review="Reviews"
            subtitle="EXCELLENT"
            starimg="/static/images/star.svg"
            totalReviews="87 reviews"
            subimg="/static/images/glogo.svg"
            On="on"
          /> */}

          <div id="trustSliderGoogle" className="mx-auto" >
            {/* {CardsData.map((card, index) => {
              const {
                profileimg,
                title,
                subtitle,
                logo,
                starimg,
                tickimg,
                description,
                btn,
              } = card;
              return (
                <ReviewsCards
                  key={index}
                  profileimg={profileimg}
                  title={title}
                  subtitle={subtitle}
                  logo={logo}
                  starimg={starimg}
                  tickimg={tickimg}
                  description={description}
                  btn={btn}
                />
              );
            })} */}
          </div>
        </div>

        <div className="md:py-[70px] py-[50px] ">
          {/* <Header
            title="Testimonials"
            img="/static/images/Yelp.png"
            review="Reviews"
            subtitle="EXCELLENT"
            starimg="/static/images/redstar.svg"
            totalReviews="87 reviews"
            subimg="/static/images/Ylogo.svg"
            On="on"
          /> */}

          <div id="trustSliderYelp" className="mx-auto" >
            {/* {CardsData2.map((card, index) => {
              const {
                profileimg,
                title,
                subtitle,
                logo,
                starimg,
                tickimg,
                description,
                btn,
              } = card;
              return (
                <ReviewsCards
                  key={index}
                  profileimg={profileimg}
                  title={title}
                  subtitle={subtitle}
                  logo={logo}
                  starimg={starimg}
                  tickimg={tickimg}
                  description={description}
                  btn={btn}
                />
              );
            })} */}

          </div>
        </div>

        <div className="md:py-[70px] py-[50px]">
          <Header
           title="Testimonials"
           img="/static/images/rate.png"
           review="Reviews"
           subtitle="EXCELLENT"
           starimg="/static/images/star.svg"
           totalReviews="87 reviews"
           subimg="/static/images/rate.png"
           On="on"
          />

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[18px] gap-[30px] lg:pb-[74px] md:pb-[40px] pb-0">
            {CardsData3.map((card) => {
              const { title, description,starimg, index } = card;
              return (
                <Blogcards
                  key={index}
                  // starimg={starimg}
                  description={description}
                  title={title}
                />
              );
            })}
          </div>
        </div>
        <div className="md:py-[70px] py-[50px]">
          <Header
           title="Email"
           img="/static/images/email.png"
           review="Reviews"
           subtitle="EXCELLENT"
           starimg="/static/images/star.svg"
           totalReviews="87 reviews"
           subimg="/static/images/email.png"
           On="on"
          />

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[18px] gap-[30px] lg:pb-[74px] md:pb-[40px] pb-0">
            {CardsData4.map((card) => {
              const { title, description,starimg, index } = card;
              return (
                <Blogcards
                  key={index}
                  // starimg={starimg}
                  description={description}
                  title={title}
                />
              );
            })}
          </div>
        </div>
{/* 
        <div className="md:py-[70px] py-[50px]">
        <div className="flex justify-center">
          <div>
            <h2 className="lg:text-[50px] lg:leading-[24px] md:text-[42px] md:leading-[22px] text-[36px] leading-[20px] font-[700] tracking-[0.7px] text-[#14142A]">
              Testimonials
            </h2>
            <p className="text-center pt-5 text-[16px] leading-[24px] tracking-[0.75px] text-[#4e4b66]">Email Reviews</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[18px] gap-[30px] lg:pb-[74px] md:pb-[40px] pb-0">
          {CardsData3.map((card , index) => {
            const { title, description} = card;
            return (
              <Blogcards key={index} description={description} title={title} />
            );
          })}
        </div>
        </div> */}
      </section>
    </div>
  );
};

export default index;
