import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function Calendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar showDaysOutsideCurrentMonth
        sx={{
            width: '100%', height:'100%', maxHeight: '800px', bgcolor: 'rgb(45, 45, 45)', color: 'white', scale:'fill', theme: { palette: { mode: 'dark' }},
            '& .MuiPickersCalendarHeader-label': { color: 'white' },
            '& .MuiPickersArrowSwitcher-root button': { color: 'white' },
            '& .MuiPickersDay-root': { color: 'white', width: '12%', height: '100px', fontSize: '16px', bgcolor: 'rgb(55, 55, 55)', borderRadius: '8px', border: '1px solid rgb(75, 75, 75)'},
            '& .MuiPickersDay-root.Mui-selected': { bgcolor: 'rgb(75, 75, 75)' },
            '& .MuiPickersDay-root.Mui-selected:hover': { bgcolor: 'rgb(95, 95, 95)'},
            '& .MuiPickersYear-root': { bgcolor: 'rgb(45, 45, 45)', color: 'white'},
            '& .MuiPickersMonth-root': { bgcolor: 'rgb(45, 45, 45)', color: 'white'},
            '& .MuiDayCalendar-root': { height: '750px',bgcolor: 'rgb(45, 45, 45)'},
            '& .MuiDayCalendar-weekDayLabel': { color: 'white', bgcolor: 'rgb(45, 45, 45)', fontSize: '16px', width: '12%' },
            '& .MuiPickersSlideTransition-root': { height: '100%',bgcolor: 'rgb(45, 45, 45)'},
         }}
      />
    </LocalizationProvider>
  );
}

export default Calendar;