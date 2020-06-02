import React, {Component} from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SimpleTabs from '../components/Navbar';
import Footer from '../components/Footer';
import './styles/faq.css';

export default class SimpleExpansionPanel extends Component {
	render()
  {
   return (
     <div className="faqbg" >
      <SimpleTabs />
      <div className="faqh" style={{paddingTop: '90px',paddingLeft: '70px'}}><p>POPULAR QUERIES</p></div><center><div className="questions" style={{width: '70%',paddingTop: '40px',paddingBottom: '80px'}}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          Do I have to return the car to the same location where I picked it up?
        </ExpansionPanelSummary>
        <div style={{backgroundColor:'silver'}}> <ExpansionPanelDetails>
          Yes. You must bring the vehicle back to the same place you picked it up before the end of your reservation. If you dropoff the car at a location different from your pickup point, you will be charged INR 2,000, and the full hourly rate and late fees until the vehicle is returned to the correct location.
        </ExpansionPanelDetails></div>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          What happens if I return the car late?
        </ExpansionPanelSummary>
        <div style={{backgroundColor:'silver'}}><ExpansionPanelDetails>
          
          a) A standard hourly fee will be applicable per hour of delay.
          b) Free KMs will be given per hour as per your booked package.
          c) In addition to the standard hourly fee, every hour of delay would be charged at Rs. 300/hour,
          
        </ExpansionPanelDetails></div>     </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          Is there a km limit to how much I can drive?
        </ExpansionPanelSummary>
        <div style={{backgroundColor:'silver'}}><ExpansionPanelDetails>
          
            With reference to the km package which you select you are eligible to drive accordingly.For example, if you opt for 10 km/hr package then 5 hours reservation would come with 50 km in driving at no additional charge, while a 3 day reservation would come with 720 km in driving at no additional charges. There is a per-km charge for each km beyond that point. Please see Kiraye-Car tariffs for more details.
          
        </ExpansionPanelDetails></div>     </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          How do I unlock my car?
        </ExpansionPanelSummary>
        <div style={{backgroundColor:'silver'}}><ExpansionPanelDetails>
          
          "Location without fleet (KLE booking): Filling checklists is easy! Now you can fill your pick up checklist via the Kiraye-Car App. Just login to the App, select your live booking from the My bookings page and start. 1. Fill Exterior cleanliness and damage reporting with images. 2. Unlock the vehicle 3. Interior cleanliness, documents check and vehicle KM/Fuel readings with images. 4. Pick up the car keys from the dashboard. 5. Start your trip. It is advised to keep the images for your future reference and do ensure proper network coverage filling the checklist."
            Location with Fleet assistance: Collect the keys from the location executive.
          
        </ExpansionPanelDetails></div>     </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          Where can I find the Car Keys?
        </ExpansionPanelSummary>
        <div style={{backgroundColor:'silver'}}><ExpansionPanelDetails>
          
          "After you unlock the car using KLE, you can find the car keys in the dashboard."
            At times previous customers would have kept the car keys on the seat, On the sun visor, dropped below the seats.
          
        </ExpansionPanelDetails></div>     </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          Can someone else drive Kiraye-Car during my reservation? What is the process to add co-driver?
        </ExpansionPanelSummary>
        <div style={{backgroundColor:'silver'}}><ExpansionPanelDetails>
          
          We understand that driving can get tiring on a long drive and you want to share driving responsibilities with a friend. Simply add co-drivers through the Co-Drivers page in your account. This will ensure that in case of any damage while your friend is driving, liability is limited to the security deposit (under our usual conditions). If your friend is not a Kiraye-Car user already, we will ask them to upload their DL and then review it. If your friend is already a Kiraye-Car user then their DL has most likely already been approved. 
          Please do remember, you are still responsible for the vehicle during your reservation. Additionally if a non-KirayeCar verified person drives the vehicle, Kiraye-Car's insurance coverage would be invalidated and you will face unlimited liability.
          
        </ExpansionPanelDetails></div>     </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          How do I end my reservation?
        </ExpansionPanelSummary>
        <div style={{backgroundColor:'silver'}}><ExpansionPanelDetails>
          
          "Location without fleet (KLE booking): Filling checklists is easy! Now you can fill your End checklist via the Kiraye-Car app. Just log in to the App, select your live booking from the My bookings page and start. 1. Keep the keys inside the dashboard. 2. Edit your checklist details if there are any changes with Images. 3. Lock the vehicle. 4. End of your trip by uploading 4 side images of the vehicle. It is advised to keep the images for your future reference and need proper network coverage filling the checklist."
            Please collect all your belonging before locking the vehicle.
          
        </ExpansionPanelDetails></div>     </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          How will I receive my Refund?
        </ExpansionPanelSummary>
        <div style={{backgroundColor:'silver'}}><ExpansionPanelDetails>
          
          "Refund will be initiated to the account/card used to make the payment and will take 5 to 15 days to settle."
            If the payment was made from the wallet account, it would take 24-48 hrs for the refund to settle.
          
        </ExpansionPanelDetails></div>     </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          In case of  Doorstep service who will deliver the car?What if the delivery guy comes late?
        </ExpansionPanelSummary>
        <div style={{backgroundColor:'silver'}}><ExpansionPanelDetails>
          
          A Delivery executive will be allotted for your booking one hour before the booking start time, you will receive the details of the delivery executive at the same time. In the case of address clarification, our executive will call you for confirmation and he will be at your location by your bookings start time.
          You can contact the executive over the shared contact number.
          
        </ExpansionPanelDetails></div>     </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          How long do refunds take?
        </ExpansionPanelSummary>
        <div style={{backgroundColor:'silver'}}><ExpansionPanelDetails>
          
          Cashfree (1day), PayTM (1 day), Simpl (1 day), PhonePe (1 day) • ICICI, HDFC, CITI, AXIS, KOTAK : Net banking (3-7 days), Credit card (5-7 days), Debit card (5-7 days) • ALL OTHER BANKS : Net banking (7-10 days), Credit card (7-10 days), Debit card (7-10 days)
          
        </ExpansionPanelDetails></div>     </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          How do I reach the location of the car?
        </ExpansionPanelSummary>
        <div style={{backgroundColor:'silver'}}><ExpansionPanelDetails>
          
          Once the booking is confirmed, vehicle details with the location would be shared 3-4 hours prior to booking start time. We will also share an exact car location before 30 minutes of your booking start time along with the Navigation Link. Please use this Link or your application to navigate to your pickup location.
          
        </ExpansionPanelDetails></div>     </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          How do I find my car?
        </ExpansionPanelSummary>
        <div style={{backgroundColor:'silver'}}><ExpansionPanelDetails>
          
          It’s simple to find the vehicle. We will share the exact vehicle location 30 minutes prior to your booking start time through an SMS on your registered contact number. Use this navigation to reach your vehicle or you can even use Find my car option through your App and follow the Last mile directions.
          
        </ExpansionPanelDetails></div>     </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          How do I proceed with my Start Checklist after reaching the location?
        </ExpansionPanelSummary>
        <div style={{backgroundColor:'silver'}}><ExpansionPanelDetails>
          
          "Location without fleet (KLE booking): Filling checklists is easy! Now you can fill your pick up checklist via the Kiraye-Car app. Just log in to the App, select your live booking from the My bookings page and start. 1. Fill Exterior cleanliness and damage reporting with images. 2. Unlock the vehicle 3. Interior cleanliness, documents check and vehicle KM/Fuel readings with images. 4. Pick up the car keys from the dashboard. 5. Start your trip. It is advised to keep the images for your future reference and do ensure proper network coverage filling the checklist."
            Location with Fleet assistance: Collect the keys from the location executive.
          
        </ExpansionPanelDetails></div>     </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          I reached my location back, how do I proceed with my End Checklist?
        </ExpansionPanelSummary>
        <div style={{backgroundColor:'silver'}}><ExpansionPanelDetails>
          
          "Location without fleet (KLE booking): Filling checklists is easy! Now you can fill your End checklist via the Kiraye-Car app. Just log in to the App, select your live booking from the My bookings page and start. 1. Keep the keys inside the dashboard. 2. Edit your checklist details if there are any changes with Images. 3. Lock the vehicle. 4. End of your trip by uploading 4 side images of the vehicle. It is advised to keep the images for your future reference and need proper network coverage filling the checklist."
            Please collect all your belonging before locking the vehicle.
          
        </ExpansionPanelDetails></div>     </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          What if my Driving License is  in not yet Approved/ Review in progress state?
        </ExpansionPanelSummary>
        <div style={{backgroundColor:'silver'}}><ExpansionPanelDetails>
          
          If you have successfully completed the DL upload process, be rest assured that your driving license will be approved before your booking start time. You can check the status of your Driving license over your App. If our team is unable to approve your Driving license, they will notify you of the supporting documents required to approve your driving license. Please upload those documents and our team will verify the uploaded documents to approve your driving license. Kindly wait till your Driving license is reviewed by our team.
          
        </ExpansionPanelDetails></div>     </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          How do I extend my booking end time?
        </ExpansionPanelSummary>
        <div style={{backgroundColor:'silver'}}><ExpansionPanelDetails>
          
          "Extension is subject to vehicle availability and extension can be done before the booking end time. To extend the booking you have to 1. Login to Kiraye-Car application 2. Click on My trips from Menu option 3. Select the booking 4. Click on extend booking right below the Remaining time. 5. If yes, Key in your desired extension time. 6. Pay the amount immediately to confirm your extension. Failing to pay the extension amount immediately would reverse the extended time and you will have to drop back the vehicle within the originally reserved time. Any Late drop without extension would incur late fees and charges. https://www.Kiraye-Car.com/policy#feePolicy."
            Extend booking option will be available only if the vehicle is available for extension.
          
        </ExpansionPanelDetails></div>     </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          What would be the fuel level in the vehicle which gets allotted to me? What if the fuel level is low?
        </ExpansionPanelSummary>
        <div style={{backgroundColor:'silver'}}><ExpansionPanelDetails>
          
          Fuel levels in few vehicles may be as low as 5-10%. Post completing the pick-up checklist procedure. Please do check the fuel percentage in the vehicle and refuel the vehicle if the current fuel level is not enough for your trip. Please refuel the vehicle as per your trip requirement.
          
        </ExpansionPanelDetails></div>     </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          How do I track my free KM reading?
        </ExpansionPanelSummary>
        <div style={{backgroundColor:'silver'}}><ExpansionPanelDetails>
          
          "To avoid the KM confusion, we request you to capture the odometer reading images to track your free KMs and for any future reference and check your booking details on your APP to know the total free KM on the booking.
            Excess KM would be charged as per the selected vehicle. 
            Ex: Extra KMs x Per km charge of the vehicle"
          
        </ExpansionPanelDetails></div>     </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          What if I see there are exterior damages on the vehicle?
        </ExpansionPanelSummary>
        <div style={{backgroundColor:'silver'}}><ExpansionPanelDetails>
          
          We try to inspect all our vehicle's condition periodically however if you notice any damage on the vehicle, Please do call out the same in the start checklist and also do capture the images for future reference.
          
        </ExpansionPanelDetails></div>     </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          How should I pay the outstanding amount on a booking?
        </ExpansionPanelSummary>
        <div style={{backgroundColor:'silver'}}><ExpansionPanelDetails>
          
          You can pay the outstanding amount either through your APP. Click on the booking with an outstanding amount and click on the Outstanding amount. You can pay using Debit/Credit card or net banking.
          
        </ExpansionPanelDetails></div>     </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          When will I get my security deposit refunded back?
        </ExpansionPanelSummary>
        <div style={{backgroundColor:'silver'}}><ExpansionPanelDetails>
          
          Once the booking gets completed, We will process the refund of your security deposit within 6-12 hours. The payment owed will be deducted from the security deposit in the event the customer is found to violate Kiraye-Car T&C.
          
        </ExpansionPanelDetails></div>     </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          What is there is an outstanding amount against my previous booking pending?
        </ExpansionPanelSummary>
        <div style={{backgroundColor:'silver'}}><ExpansionPanelDetails>
          
          You will not be able to pick up the vehicle on your next booking unless you have cleared all the outstanding balance from your previous booking. Please ensure you check for pending outstandings before making another booking.
          
        </ExpansionPanelDetails></div>     </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          When will I get to know the exact vehicle details?
        </ExpansionPanelSummary>
        <div style={{backgroundColor:'silver'}}><ExpansionPanelDetails>
          
          Vehicle and Location details would be shared 3-4 hours prior to your booking start time to your registered mobile number. Once the vehicle and location are allocated, You can check the details on your APP's Main page. 
          
        </ExpansionPanelDetails></div>     </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          What are excess KMs charges?
        </ExpansionPanelSummary>
        <div style={{backgroundColor:'silver'}}><ExpansionPanelDetails>
          
          Every booking comes with a KM package which is already included in the booking fee however exceeding the free KMs would result in extra fee as per the selected vehicle. You can keep a note of your free KMs and an extra fee per KM on your App.
          Charges would be according to the extra KMs driven: Total extra KMs x Charge per km 
          
        </ExpansionPanelDetails></div>
      </ExpansionPanel>
    </div></center>
    <Footer />
    </div>
  );
  }
}
