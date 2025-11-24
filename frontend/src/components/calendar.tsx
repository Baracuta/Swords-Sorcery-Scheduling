import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function Calendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        sx={{
            width: '100%', height: '100%', bgcolor: 'rgb(45, 45, 45)', color: 'white', theme: { palette: { mode: 'dark' }},
            '& .MuiPickersCalendarHeader-label': { color: 'white' },
            '& .MuiPickersArrowSwitcher-root button': { color: 'white' },
            '& .MuiPickersDay-root': { color: 'white' },
            '& .MuiPickersDay-root.Mui-selected': { bgcolor: 'rgb(75, 75, 75)' },
            '& .MuiPickersDay-root.Mui-selected:hover': { bgcolor: 'rgb(95, 95, 95)'},
            '& .MuiPickersWeek-root': { bgcolor: 'rgb(45, 45, 45)', color: 'white'},
            '& .MuiPickersYear-root': { bgcolor: 'rgb(45, 45, 45)', color: 'white'},
            '& .MuiPickersMonth-root': { bgcolor: 'rgb(45, 45, 45)', color: 'white'},
         }}
      />
    </LocalizationProvider>
  );
}

export default Calendar;