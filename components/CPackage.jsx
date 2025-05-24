import React from "react";
import styles from "../styles/CustomPackage.module.css";
import { useState, useEffect } from "react";
import loading from "../public/images/loading.gif";
export default function CPackage() {

  const [isNotMobile, setIsNotMobile] = useState(false);
  const [startGenerating, setStartGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [singlePrice, setSinglePrice] = useState(0);
  const [groupPrice, setGroupPrice] = useState(0);
  const [emptyWarning, setEmptyWarning] = useState(false);
  const [formData, setFormData] = useState({
    numOfPersons: "",
    nightsMakkah: "",
    nightsMedina: "",
    makkahDist: "",
    medinaDist: "",
    transport: "",
    zyarat: "",
    room: "",
  });

  const CONVERSION_RATE = 75;
  const TICKET = 1933;
  const TVISA = 530;
  const VISA = 450;
  const ZYARAT = 35;
  const SELF = 10000;
  const DATE = '24 - 05 - 2025';
  const prices = [
    {
      dist: "800-900m",

      MakkahRoom: 20,
      MedinaRoom: 16,
    },
    {
      dist: "500-700m",

      MakkahRoom: 28,
      MedinaRoom: 28,
    },
    {
      dist: "300-400m",

      MakkahRoom: 39,
      MedinaRoom: 42,
    },
    {
      dist: "shuttle",

      MakkahRoom: 14,
      MedinaRoom: 16,
    },
  ];
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  function MakkahHotelPrice(distance, nights, room, persons) {
    var Makkah_price = 0;
    prices.map((value, index) => {
      if (value.dist == distance) {
        Makkah_price = value.MakkahRoom * nights * CONVERSION_RATE;
      }
    });
    if (room == 'sharing') {
      return Makkah_price;
    } else {
      return (Makkah_price * 5) / persons;
    }
  }
  function MedinaHotelPrice(distance, nights, room, persons) {
    var Medina_price = 0;
    prices.map((value, index) => {
      if (value.dist == distance) {
        Medina_price = value.MedinaRoom * nights * CONVERSION_RATE;
      }
    });
    if (room == 'sharing') {
      return Medina_price;
    } else {
      return (Medina_price * 5) / persons;
    }
  }
  function visaPrice(transport) {
    if (transport == "include_trans") {
      //console.log('tvisa price: ', TVISA * CONVERSION_RATE)
      return TVISA * CONVERSION_RATE;
    } else {
      //console.log('visa price: ', VISA * CONVERSION_RATE)
      return VISA * CONVERSION_RATE;
    }
  }
  function zyaratPrice(zyarat) {
    if (zyarat == "include_zyarat") {
      //console.log('zyarat price: ', ZYARAT * CONVERSION_RATE)
      return ZYARAT * CONVERSION_RATE;
    } else {
      //console.log(0)
      return 0 * CONVERSION_RATE;
    }
  }

  function createPackage(formData) {
    var Makkah = 0;
    var Medina = 0;
    var visa = 0;
    var zyarat = 0;

    Makkah = MakkahHotelPrice(formData.makkahDist, formData.nightsMakkah, formData.room, formData.numOfPersons);
    Medina = MedinaHotelPrice(formData.medinaDist, formData.nightsMedina, formData.room, formData.numOfPersons);
    visa = visaPrice(formData.transport);
    zyarat = zyaratPrice(formData.zyarat);
    console.log('hotel prices: ', Makkah+Medina)
    return Makkah + Medina + TICKET * CONVERSION_RATE + visa + zyarat + SELF;
  }

  const handleFormSubmit = async (e) => {
    setStartGenerating(true);
    e.preventDefault();
  
    if (
      formData.makkahDist.length === 0 ||
      formData.medinaDist.length === 0 ||
      formData.transport.length === 0 ||
      formData.zyarat.length === 0 ||
      formData.room.length === 0
    ) {
      setEmptyWarning(true);
      setStartGenerating(false);
    } else {
      setEmptyWarning(false);
  
      // Add a delay before setting setStartGenerating to false
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStartGenerating(false);
  
      const singleCalculatedPrice = createPackage(formData, prices);
      setSinglePrice(singleCalculatedPrice);
      const group_price = singleCalculatedPrice * formData.numOfPersons;
      setGroupPrice(group_price);
      setGenerated(true);
    }
  };

  useEffect(() => {
    setIsNotMobile(window.innerWidth >= 760);
  });
  return (
    <div>
      {generated ? (
       <div className={isNotMobile ? styles.summary_div : styles.mobile_summary_div}>
      
       <div className = {isNotMobile ? styles.pkg_summary : styles.mobile_pkg_summary}>
       <h1>Your Custom Package</h1>
         <p>No. of Persons: <b>{formData.numOfPersons}</b></p>
         <p>Nights in Makkah: <b>{formData.nightsMakkah}</b></p>
         <p>Nights in Medina: <b>{formData.nightsMedina}</b></p>
         <p>Makkah Distance: <b>{formData.makkahDist}</b></p>
         <p>Medina Distance: <b>{formData.medinaDist}</b></p>
         <p>Room Type: <b>{formData.room}</b></p>
         <p>Zyarat Included: <b>{formData.zyarat === 'include_zyarat'? 'YES' : 'NO'}</b></p>
         <p>Transport Included: <b>{formData.transport === 'include_trans'? 'YES' : 'NO'}</b></p>
       </div>
       <table className={styles.priceTable}>
         <thead>
           <tr>
             <th colSpan="2" >Price Details</th>
           </tr>
           <tr>
             <th>Single Person Estimated Price</th>
             <th>Estimated Price For {formData.numOfPersons} persons</th>
           </tr>
         </thead>
         <tbody>
           <tr>
            
             <td>{singlePrice - 10000} - {singlePrice + 10000}</td>
             <td>{groupPrice - 10000} - {groupPrice + 10000}</td>
           </tr>
           
         </tbody>
       </table> <br />
       <button onClick={()=>{
        setGenerated(false)
      
       }} className={isNotMobile ? styles.cta_button : styles.cta_mobile_button}>Create Another</button>
     </div>
     
      ) :  (
        <div className={isNotMobile ? styles.desktop_cp_main : styles.mobile_cp_main}>
          <div className={isNotMobile ? styles.cp_form_div : styles.cp_mobile_form_div}>
           
            <h1>Select Services</h1>
            <small className = {styles.updated}>Updated on : {DATE}</small>
            <form className={isNotMobile ? styles.cp_form : styles.cp_mobile_form} onSubmit={handleFormSubmit}>
            <label htmlFor="numOfPersons">Number of persons</label>
              <input
              required
              id="numOfPersons"
                type="number"
                placeholder="Number of Persons"
                name="numOfPersons"
                value={formData.numOfPersons}
                onChange={handleInputChange}
              />
              <label htmlFor="MakkahNights">Nights in MAKKAH</label>
              <input
              required
              id="MakkahNights"
                type="number"
                placeholder="Nights in Makkah"
                name="nightsMakkah"
                value={formData.nightsMakkah}
                onChange={handleInputChange}
              />
               <label htmlFor="MedinaNights">Nights in MEDINA</label>
              <input
              required
              id="MedinaNights"
                type="number"
                placeholder="Nights in Medina"
                name="nightsMedina"
                value={formData.nightsMedina}
                onChange={handleInputChange}
              />
              <label htmlFor="makkahDist">MAKKAH Hotel Distance</label>
              <select
                name="makkahDist"
                value={formData.makkahDist}
                onChange={handleInputChange}
              >
                <option value="MAKKAH">Makkah Distance</option>
                <option value="300-400m">300-400m</option>
                <option value="500-700m">500-700m</option>
                <option value="900-1100m">900-1100m</option>
                <option value="shuttle">With Shuttle</option>
              </select>
              <label htmlFor="medinaDist">MEDINA Hotel Distance</label>
              <select
                name="medinaDist"
                value={formData.medinaDist}
                onChange={handleInputChange}
              >
                <option value="MEDINA">Medina Distance</option>
                <option value="300-400m">300-400m</option>
                <option value="500-700m">500-700m</option>
                <option value="900-1100m">900-1100m</option>
                <option value="shuttle">With Shuttle</option>
              </select>
              <label htmlFor="transport">Transport</label>
              <select
                name="transport"
                value={formData.transport}
                onChange={handleInputChange}
              >
                <option value="">Transport</option>
                <option value="include_trans">Include Transport</option>

                <option value="exclude_trans">Exclude Transport</option>
              </select>
              <label htmlFor="zyarat">Zyarat</label>
              <select
                name="zyarat"
                value={formData.zyarat}
                onChange={handleInputChange}
              >
                <option value="">Zyarat (City View)</option>
                <option value="include_zyarat">Include Zyarat</option>

                <option value="exclude_zyarat">Exclude Zyarat</option>
              </select>
              <label htmlFor="room">Room Type</label>
              <select
                name="room"
                value={formData.room}
                onChange={handleInputChange}
              >
                <option value="">Room Type</option>
                <option value="sharing">Sharing</option>

                <option value="separate">Separate</option>
              </select>
              {emptyWarning ? <p className = {styles.warning}>All fields are required</p>: null}
              {startGenerating ? (
                <img
                  className={styles.cp_loading}
                  src={loading.src}
                  alt="loading"
                />
              ) : (
                <button className={isNotMobile ? styles.cta_button : styles.cta_mobile_button}>Create Package</button>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
