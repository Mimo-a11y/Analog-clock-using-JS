let secondHand = document.querySelector('.second-hand');
      let minuteHand =  document.querySelector('.min-hand');
      let hourHand =  document.querySelector('.hour-hand');
      setTime = () => {
        const now = new Date();
        const seconds = now.getSeconds();
        const convertedSeconds = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${convertedSeconds}deg)`; 

        const mins = now.getMinutes();
        const convertedMins = ((mins / 60) * 360) + 90;
        minuteHand.style.transform = `rotate(${convertedMins}deg)`;

        const hours = now.getHours();
        const convertedHours = ((hours / 12) * 360) + ((mins/60)*30) + 90;
        hourHand.style.transform = `rotate(${convertedHours}deg)`;

        
      }
      setInterval(setTime, 1000);