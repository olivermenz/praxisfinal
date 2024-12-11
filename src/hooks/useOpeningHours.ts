import { useState, useEffect } from 'react';
import { OPENING_HOURS } from '../data/openingHours';
import { isTimeInRange } from '../utils/timeUtils';

export const useOpeningHours = () => {
  const [isWithinOpeningHours, setIsWithinOpeningHours] = useState(false);

  useEffect(() => {
    const checkOpeningHours = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentDay = now.getDay(); // 0 = Sunday, 1-5 = Monday-Friday, 6 = Saturday

      // Practice is closed on weekends
      if (currentDay === 0 || currentDay === 6) {
        setIsWithinOpeningHours(false);
        return;
      }

      // Get schedule for current day
      const todaySchedule = OPENING_HOURS[currentDay];
      setIsWithinOpeningHours(isTimeInRange(currentHour, todaySchedule));
    };

    checkOpeningHours();
    const interval = setInterval(checkOpeningHours, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return isWithinOpeningHours;
};

export default useOpeningHours;