import React from "react";
import Event from './Event';

const EventsBoard = () => {
  return (
    <div className="EventsBoard">
      <div className="events-grid">
        <Event 
          title = "Hironaka & Suib's The Philadelphians at LOVE Park"
          date = "Through Sunday, June 8, 2025"
          time = "between 5 p.m. and midnight every evening"
          location = "LOVE Park, 16th Street & John F Kennedy Boulevard, Philadelphia, PA"
          image = "https://formanartsinitiative.org/wp-content/uploads/2025/04/2025-05-07-Public-Works-Launch-v5-02-1-scaled.jpg"
          link = "https://formanartsinitiative.org/public-works-2024/"
        />
        
        <Event 
          title = "Black Restaurant Week"
          date = "Through Sunday, June 8, 2025"
          time = "See link for detail"
          location = "Participating restaurants including 48th Street Grille, 310 S. 48th Street, Philadelphia, PA"
          image = "https://blackrestaurantweeks.com/wp-content/uploads/2025/02/BRW-Web-Header_-Northeast.png"
          link = "https://blackrestaurantweeks.com/northeast-black-restaurant-week/"
        />
        
        <Event 
          title="Wonder Food Hall in Fishtown" 
          date="Sun-Sat"
          time=" 10:30 a.m.- 10:30 p.m."
          location= "23 West Girard Avenue, Philadelphia, PA 19123"
          image= "https://rfprodv2-wonder-image.azureedge.net/image/1460x1040%5E/hdr/b7080e57-a338-42b8-b2d3-e27bca1da23e.webp?original_image_key=hdr/b7080e57-a338-42b8-b2d3-e27bca1da23e.png"
          link= "https://www.wonder.com/food-delivery-locations/fishtown"
        />
        
        <Event 
          title= "In Plain Sight at Cherry Street Pier"
          date= "Throughout June 2025"
          time= "Daily"
          location= "Cherry Street Pier, 121 N. Christopher Columbus Boulevard, Philadelphia, PA"
          image= "https://www.visitphilly.com/wp-content/uploads/2025/06/in-plain-sight-angle-by-vp-2200x1237px.jpg"
          link= "https://www.visitphilly.com/features/in-plain-sight/"
        />
        
        <Event 
          title= "ODUNDE Festival"
          date= "June 1-8, 2025"
          time= "Daily"
          location= "Centered around South Street & South 23rd Street, Philadelphia, PA"
          image= "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crophttps://www.visitphilly.com/wp-content/uploads/2025/05/Odunde-photo-by-SRamones-for-vp-2200x1237px.jpg"
          link= "https://www.visitphilly.com/things-to-do/events/odunde-festival/"
        />
        
        <Event 
          title= "Philadelphia's Juneteenth Parade & Festivalt"
          date= "Sunday, June 22, 2025"
          time= "12:30 p.m.- 2 p.m."
          location= "5100 Pine Street Philadelphia, PA 19143"
          image= "https://www.visitphilly.com/wp-content/uploads/2025/06/Dancers-courtesy-Juneteenth-Parade-and-Festival-2200x1237px.jpg"
          link= "https://juneteenthphilly.org/"
        />
        
        <Event 
          title="Rothman Orthopaedics Roller Rink at Dilworth Park"
          date="Through Sunday, June 29, 2025"
          time= "Monday-Thursday: 2:45 p.m.- 8:45 p.m. Friday: 2:45 p.m. - 10 p.m. Saturday 11 a.m. - 10 p.m. Sunday 11 a.m. - 8:45 p.m."
          location= "Rothman Orthopaedics Roller Rink, 1 S. 15th Street, Philadelphia, PA"
          image="https://www.visitphilly.com/wp-content/uploads/2025/04/rothman-roller-rink-courtesy-center-city-district-1200x900px-1044x781.jpg"
          link= "https://centercityphila.org/parks/dilworth-park/rothman-roller-rink"
        />
        
        <Event 
          title="The Wiz at the Academy of Music"
          date="June 3-15, 2025"
          time="See link for detail"
          location="Academy of Music, 240 S. Broad Street, Philadelphia, PA"
          image="https://res.cloudinary.com/dwjhoulgv/image/upload/c_fill,g_auto,h_1200,w_1200/f_auto/q_auto/v1746125037/Sheherazade_as_Glinda_The_Good_Witch_and_Dana_Cimone_as_Dorothy_in_the_First_National_Tour_of_THE_WIZ_2025_Photo_by_Jeremy_Daniel?_a=BAACwmDQ"
          link="https://www.ensembleartsphilly.org/series-and-subscriptions/broadway-series/the-wiz"
        />
        
        <Event 
          title = "Opening Day: Center City District SIPS"
          date= "June 4 – August 27, 2025 (Wednesdays only)"
          time="5 p.m.- 7 p.m."
          location="Participating locations including Air Grille at Dilworth Park, 1 S. 15th Street, Philadelphia, PAr"
          image="https://www.visitphilly.com/wp-content/uploads/2024/05/CCD-SIPS-Dilworth-photo-by-Beaumonde-Originals-1200x900px-1044x781.jpg"
          link="https://centercityphila.org/explore-center-city/ccd-sips/sips-list-view"
        />
        
        <Event 
          title="Yesterday’s Dreams Are Real: Collecting Black Art and The Legacy of Lewis Tanner Moore at the Michener Art Museum"
          date="Through Sunday, July 27, 2025"
          time="See link for detail"
          location="Michener Art Museum, 138 S. Pine Street, Doylestown, PA"
          image="https://michenerartmuseum.org/wp-content/uploads/2025/01/Tanner-Moore-exhibition-header-image.jpg"
          link="https://michenerartmuseum.org/"
        />
      </div>
    </div>
  );
};

export default EventsBoard;